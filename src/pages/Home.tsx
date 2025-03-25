import { useInfiniteQuery } from "@tanstack/react-query";
import fetchRecipes from "../api/axios";
import { useEffect, useRef } from "react";
import { RecipesResponse } from "../types/Recipes";
import Loading from "../components/Loading";
import Card from "../components/Card";

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
    <div className="w-xl mx-auto p-4 space-y-2">
      {data?.pages.map((page, index) => (
        <div key={index} className="grid gap-4">
          {page.recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
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
