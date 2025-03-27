import { NavLink } from "react-router";
import { useStoreRecipe } from "../store/SaveRecipes";

const SaveRecipes = () => {
  const { saveRecipe, removeSaveRecipe } = useStoreRecipe();
  return (
    <div className="p-4 text-black dark:text-white">
      {saveRecipe.length === 0 ? (
        <p className="flex items-center justify-center">No saved recipes.</p>
      ) : (
        <ul>
          {saveRecipe.map((recipe) => (
            <li
              key={recipe.id}
              className="border p-3 rounded mb-2 flex justify-between items-center"
            >
              <NavLink to={`/recipes/${recipe.id}`}>
                <h3 className="font-bold">{recipe.name}</h3>
              </NavLink>

              <button
                onClick={() => removeSaveRecipe(recipe.id.toString())}
                className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SaveRecipes;
