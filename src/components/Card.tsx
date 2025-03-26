import { NavLink } from "react-router";
import { Recipe } from "../types/Recipes";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useStoreRecipe } from "../store/SaveRecipes";

type RecipeProps = {
  recipe: Recipe;
};

const Card = ({ recipe }: RecipeProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const { addSaveRecipe } = useStoreRecipe();
  return (
    <div className="p-2 border border-gray-300 dark:border-neutral-600 rounded-md shadow-sm">
      <NavLink to={`/recipes/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-56 object-cover rounded-md mb-3"
        />
      </NavLink>
      <NavLink to={`/recipes/${recipe.id}`}>
        <h2 className="text-lg font-semibold mb-3 dark:text-white/80">
          {recipe.name}
        </h2>
      </NavLink>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          <span
            className={`inline-block px-2 text-white dark:text-white rounded-full text-sm ${
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
        <div onClick={() => setIsBookmarked(!isBookmarked)}>
          {isBookmarked ? (
            <FaBookmark className=" text-blue-600 cursor-pointer" />
          ) : (
            <FaRegBookmark
              className="dark:text-white/80 cursor-pointer"
              onClick={() => addSaveRecipe(recipe)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
