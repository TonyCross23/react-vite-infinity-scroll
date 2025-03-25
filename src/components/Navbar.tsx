import { NavLink } from "react-router";
import { CiBellOn } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="flex items-center justify-between px-4">
        <NavLink to={"/"}>
          <h1 className="text-xl font-bold uppercase">Recipes</h1>
        </NavLink>
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="search"
            className="w-[180px] ms-3 sm:w-[200px] md:w-[260px] py-1 pl-10 pr-2 rounded-md bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for recipes"
          />
          <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
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
        <div>
          <div
            className="md:hidden block text-2xl bg-gray-100 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <IoMdMenu />}
          </div>
          <div
            className={`absolute top-16 right-0 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md shadow-lg ${
              isOpen ? "w-30 py-2 rounded-xl" : "w-0 h-0 overflow-hidden"
            } flex flex-col items-center border border-gray-300`}
          >
            <div className="mt-1 flex flex-col w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive ? "bg-gray-300" : "px-4 my-1 hover:bg-gray-100"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive ? "bg-gray-300" : "px-4 my-1 hover:bg-gray-100"
                  }`
                }
              >
                Save
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `w-[100px] text-center rounded-md py-1 mx-auto transition ${
                    isActive ? "bg-gray-300" : "px-4 my-1 hover:bg-gray-100"
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
