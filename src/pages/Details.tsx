import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Recipe } from "../types/Recipes";
import Loading from "../components/Loading";
import { LuAlarmClock } from "react-icons/lu";
import { RxLapTimer } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";

const Details = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const getSingleRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
        const data = res.data;
        setRecipe(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSingleRecipe();
  }, [id]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="mt-8">
      {recipe && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <img src={recipe.image} alt={recipe.name} />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold"> {recipe.name}</h2>
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
            <div>
              <h4 className="text-md font-bold">Prep time minutes</h4>
              <div className="flex gap-2 items-center text-sm">
                <LuAlarmClock />
                <span>{recipe.prepTimeMinutes} Minutes</span>
              </div>
            </div>
            <div>
              <h4 className="text-md font-bold">Cook time minutes</h4>
              <div className="flex gap-2 items-center text-sm">
                <RxLapTimer />
                <span>{recipe.cookTimeMinutes} Minutes</span>
              </div>
            </div>
            <div>
              <h4 className="text-md font-bold">Ingredients</h4>
              <p>{recipe.ingredients}</p>
            </div>
            <div>
              <h4 className="text-md font-bold">Instructions</h4>
              <p>{recipe.instructions}</p>
            </div>
            <ol className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <li
                  key={index}
                  className="px-2 text-sm font-medium text-red-300 bg-gray-100 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ol>

            <div>
              <h4 className="text-md font-bold">Rating</h4>
              <div className="flex items-center gap-2">
                <FaRegStar />
                <p>{recipe.rating}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
