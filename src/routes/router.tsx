import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import SaveRecipes from "../pages/SaveRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/recipes/:id", element: <Details /> },
      { path: "/recipes/save", element: <SaveRecipes /> },
    ],
  },
]);
