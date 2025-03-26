import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`https://dummyjson.com/recipes/search?q=${query}`)
        .then((res) => setRecipes(res.data.recipes))
        .catch((err) => console.error(err));
    } else {
      setRecipes([]);
    }
  }, [query]);

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative w-[200px] sm:w-[150px] md:w-[300px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full py-1 pl-7 pr-10 ms-7 rounded-md bg-white/50 border
             border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
             dark:bg-neutral-800 dark:border-gray-500 dark:focus:ring-neutral-700 dark:text-white"
          placeholder="Search for recipes"
        />

        {/* Clear Button (X Icon) */}
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <RxCross2 />
          </button>
        )}
      </div>

      {/* Modal Box */}
      {isOpen && query && (
        <div className="absolute top-12 left-0 w-[250px] bg-white dark:bg-neutral-800 border rounded shadow-lg p-2">
          {recipes.length > 0 ? (
            <ul>
              {recipes.map((recipe) => (
                <li
                  key={recipe.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <NavLink to={`/recipes/${recipe.id}`}>{recipe.name}</NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 p-2">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
