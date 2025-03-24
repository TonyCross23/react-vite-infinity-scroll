import { useInfiniteQuery } from "@tanstack/react-query";
import fetchRecipes from "../api/axios";
import { useEffect, useRef } from "react";
import { Recipe, RecipesResponse } from "../types/Recipes";
import Loading from "../components/Loading";

const Home = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    isLoading,
  } = useInfiniteQuery<RecipesResponse>({
    queryKey: ["Recipes"],
    queryFn: fetchRecipes,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.recipes.length ? allPages.length * 10 : undefined;
    },
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (status === "error") {
    return (
      <p>
        Something went wrong:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </p>
    );
  }

  return (
    <div className="w-2xl mx-auto p-4 space-y-2">
      {data?.pages.map((page, index) => (
        <div key={index} className="grid gap-4 ">
          {page.recipes.map((recipe: Recipe) => (
            <div
              key={recipe.id}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold mb-3">{recipe.name}</h2>
              <p className="text-gray-500 text-sm">
                Difficulty:{" "}
                <span
                  className={`inline-block px-2 text-white rounded-full text-sm ${
                    recipe.difficulty === "Easy"
                      ? "bg-green-300" // light green for Easy
                      : recipe.difficulty === "Medium"
                      ? "bg-blue-200" // light blue for Medium
                      : "bg-red-300" // red for Hard
                  }`}
                >
                  {recipe.difficulty}
                </span>
              </p>
            </div>
          ))}
        </div>
      ))}
      <div ref={observerRef} className="mt-4 text-center py-4">
        {isFetchingNextPage && (
          <p>
            <Loading />
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
