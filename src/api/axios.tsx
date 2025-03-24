import axios from "axios";

const fetchRecipes = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `https://dummyjson.com/recipes?limit=10&skip=${pageParam}`
  );
  return data;
};

export default fetchRecipes;
