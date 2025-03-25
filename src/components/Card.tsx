import { Link } from "react-router";
import { Recipe } from "../types/Recipes";
import { FaRegBookmark } from "react-icons/fa6";

type RecipeProps = {
  recipe: Recipe;
};

const Card = ({ recipe }: RecipeProps) => {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="p-4 border border-gray-300 rounded-md shadow-sm"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-56 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold mb-3">{recipe.name}</h2>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">
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
        <p>
          <FaRegBookmark />
        </p>
      </div>
    </Link>
  );
};

export default Card;
