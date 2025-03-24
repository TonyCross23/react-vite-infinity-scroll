import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-2">
      <div className="flex items-center justify-between px-4">
        <NavLink to={"/"}>
          <h1 className="text-3xl font-bold">Recipes</h1>
        </NavLink>
        <div className="flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-black font-bold underline" : "text-gray-500"
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
