import { NavLink } from "react-router";
import { CiBellOn } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaPlateWheat } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 py-2 dark:bg-black/1 dark:backdrop-blur dark:border-gray-800">
      <div className="flex items-center justify-between px-4">
        <NavLink to={"/"}>
          <h1 className="text-xl font-bold uppercase dark:text-white">
            <FaPlateWheat />
          </h1>
        </NavLink>
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="search"
            className="w-[200px] ms-8 sm:w-[150px] md:w-[300px] py-1 pl-10 pr-2 rounded-md bg-white/50 border
             border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
             dark:bg-neutral-800 dark:border-gray-800 dark:focus:ring-neutral-700 dark:text-white"
            placeholder="Search for recipes"
          />
          <FiSearch className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg dark:text-white/50" />
        </div>
        <div className="md:flex hidden gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-500 dark:text-gray-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/save"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-500 dark:text-gray-200"
            }
          >
            Save
          </NavLink>
          <NavLink to={"/"} className="relative">
            <CiBellOn className="text-2xl dark:text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </NavLink>
        </div>
        {/*mobile*/}
        <div>
          <div
            className="md:hidden block text-2xl bg-gray-100 dark:bg-neutral-900 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 className="dark:text-white" />
            ) : (
              <IoMdMenu className="dark:text-white" />
            )}
          </div>
          <div
            className={`absolute top-16 right-0 transition-all duration-300 ease-in-out bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-lg ${
              isOpen ? "w-30 py-2 rounded-xl" : "w-0 h-0 overflow-hidden"
            } flex flex-col items-center border text-white/50 border-gray-300 dark:border-gray-800`}
          >
            <div className="mt-1 flex flex-col w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive
                      ? "bg-gray-100 text-black dark:text-black"
                      : "px-4 my-1 hover:bg-gray-100 text-black dark:hover:text-black"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive
                      ? "bg-gray-100 text-black dark:text-black"
                      : "px-4 my-1 hover:bg-gray-100 text-black dark:hover:text-black"
                  }`
                }
              >
                Save
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive
                      ? "bg-gray-100 text-black dark:text-black"
                      : "px-4 my-1 hover:bg-gray-100 text-black dark:hover:text-black"
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
