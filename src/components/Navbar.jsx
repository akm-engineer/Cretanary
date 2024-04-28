import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaCartPlus,
  FaInfoCircle,
  FaPhone,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="w-full z-10 fixed justify-center mt-4 flex font-signature">
        <nav className="w-3/4 h-[140px] lg:h-[90px] bg-slate-300 bg-opacity-25 backdrop-blur-md backdrop-filter rounded-3xl lg:rounded-full">
          <div className="flex h-full lg:flex-row flex-col gap-4 lg:justify-between items-start lg:items-center max-sm:py-2 py-1.5 px-6 lg:px-8">
            <div className="flex lg:items-center w-full justify-between lg:w-2/4 lg:justify-around">
              <h3 className="text-2xl mt-3 lg:mt-0 flex justify-center items-center font-semibold font-signature">
                <Link to="/">Createnary</Link>
              </h3>
              <div className="hidden lg:flex bg-white px-2 mx-2 rounded-3xl items-center justify-center">
                <img
                  alt="search"
                  className="object-contain mx-2 bg-transparent size-10"
                  src="/images/search.png"
                />
                <input
                  type="text"
                  placeholder="Search Creators"
                  className="p-3.5 rounded-r-3xl w-48 outline-none"
                />
              </div>
            </div>
            <div className="flex lg:hidden w-full lg:w-auto bg-white px-2 rounded-3xl mt-4 justify-center items-center">
              <img
                alt="search"
                className="object-contain  size-8"
                src="/images/search.png"
              />
              <input
                type="text"
                placeholder="Search Creators"
                className="p-3.5 rounded-r-3xl w-full lg:w-auto outline-none"
              />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer text-black absolute right-0 mr-6 z-10 lg:hidden "
            >
              <button className="border border-black flex items-center justify-center px-4 rounded-2xl py-3 z-10 ">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
            {nav && (
              <ul className="flex flex-col justify-center items-start font-semibold duration-300 absolute top-20 right-0 border border-black rounded-2xl p-4 gap-4 z-999 bg-slate-100 ">
                <li className="flex gap-2 cursor-pointer hover:scale-95 duration-300 items-center ">
                  <FaCartPlus className="size-4" />
                  Cart
                </li>
                <li className="flex gap-2 cursor-pointer hover:scale-95 duration-300 items-center ">
                  <FaInfoCircle className="size-4" />
                  About
                </li>
                <li className="flex gap-2 cursor-pointer hover:scale-95 duration-300 items-center  ">
                  <FaPhone className="size-4" />
                  Contact
                </li>
                <li className=" cursor-pointer hover:scale-95 duration-300">
                  Login
                </li>
                <li className=" cursor-pointer hover:scale-95 duration-300">
                  Sign-up
                </li>
              </ul>
            )}
            <ul className="lg:flex items-center hidden lg:flex-row w-2/4 justify-evenly">
              <li className="flex gap-2 cursor-pointer items-center">
                <FaCartPlus className="size-4" />
                Cart
              </li>
              <li className="flex gap-2 cursor-pointer items-center">
                <FaInfoCircle className="size-4" />
                About
              </li>
              <li className="flex gap-2 cursor-pointer items-center">
                <FaPhone className="size-4" />
                Contact
              </li>
              <div className="relative z-10">
                <button
                  id="login-dropdown-trigger"
                  className={`group inline-flex h-12 w-max items-center justify-center rounded-2xl bg-none px-5 py-2 border border-black font-normal hover:bg-transparent focus:bg-transparent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isDropdownOpen ? "bg-accent" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-chevron-down relative top-[1px] ml-2 h-4 w-4 transition duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-14 w-28 left-0  bg-transparent  border border-black shadow-lg rounded-md ">
                    <ul>
                      <li className="px-4 py-2  hover:bg-[#6a71a2] cursor-pointer ">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-[#6a71a2]  ">
                        <Link to="/signup">Signup</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
