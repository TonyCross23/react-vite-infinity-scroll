import { NavLink } from "react-router";
import { CiBellOn } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-2">
      <div className="flex items-center justify-between px-4">
        <NavLink to={"/"}>
          <h1 className="text-3xl font-bold">Recipes</h1>
        </NavLink>
        <div className="md:flex hidden gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/save"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            }
          >
            Save
          </NavLink>
          <NavLink to={"/"} className="relative">
            <CiBellOn className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </NavLink>
        </div>
        {/*mobile*/}
        <div
          className="md:hidden block text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 /> : <IoMdMenu />}
        </div>

        <div
          className={`absolute top-16 right-0 transition-all duration-300 ease-in-out bg-white shadow-lg ${
            isOpen
              ? "w-40 h-auto py-4 me-4 rounded-xl"
              : "w-0 h-0 overflow-hidden"
          } flex flex-col items-center border border-gray-300`}
        >
          <div className="mt-1 flex flex-col w-full">
            <a
              className="w-full text-center rounded-md px-4 py-2 my-1 hover:bg-gray-100 transition"
              href="/"
            >
              Home
            </a>
            <a
              className="w-full text-center rounded-md px-4 py-2 my-1 hover:bg-gray-100 transition"
              href="/about"
            >
              Save
            </a>
            <a
              className="w-full text-center rounded-md px-4 py-2 my-1 hover:bg-gray-100 transition"
              href="/contact"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
