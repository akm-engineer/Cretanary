import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  FaSearch,
  FaCartPlus,
  FaInfoCircle,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const GlassContainer = ({ children }) => (
  <div className="bg-gray-300 mt-3  absolute bg-opacity-50 backdrop-blur-lg rounded-full flex items-center w-full justify-center z-999">
    {children}
  </div>
);
const link = [
  {
    id: 1,
    logo: <FaCartPlus size={16} />,
    item: "Cart",
  },
  {
    id: 2,
    logo: <FaInfoCircle size={16} />,
    item: "About",
  },
  {
    id: 3,
    logo: <FaPhone size={16} />,
    item: "Contact",
  },
  {
    id: 4,
    logo: <FaUser size={16} />,
    item: "Login",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <GlassContainer>
        <div className=" w-full   flex justify-between md:justify-evenly items-center p-6 sm:flex-wrap">
          <div className="flex gap-10 flex-col md:flex-row">
            <h1 className="font-signature text-2xl ml-2 capitalize   cursor-pointer">
              Cretanary
            </h1>
            <div className="flex items-center justify-center gap-2 ml-10 sm:ml-20 md:ml-0">
              <FaSearch size={20} className="" />
              <input
                placeholder="Search Creators "
                className="rounded-full p-2 w-40 sm:w-64 border-none focus:outline-none "
              />
            </div>
          </div>

          <ul className="hidden md:flex">
            {link.map(({ id, item, logo }) => (
              <li
                key={id}
                className=" flex items-center gap-2 text-xl justify-center font-medium "
              >
                <Link to={item} smooth duration={500} className=" px-4">
                  <div className="flex items-center justify-center gap-2">
                    {logo}
                    {item}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-white md:hidden pr-4 pb-20 z-10"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 bg-gray-300 w-full h-screen ">
              {link.map(({ id, item, logo }) => (
                <li
                  key={id}
                  className="text-3xl py-6 px-4 cursor-pointer  duration-200 capitalize "
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={item}
                    smooth
                    duration={500}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {logo}
                      {item}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </GlassContainer>
    </>
  );
};

export default Navbar;
