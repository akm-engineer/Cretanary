import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { text: "Navigation", url: "/navigation" },
    { text: "About Cretanary", url: "/about" },
    { text: "Contact Us", url: "/contact" },
    { text: "Refund", url: "/refund" },
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <>
      <div className="bg-[#4A508E] p-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="text-white w-full md:w-1/3 flex justify-center  items-center mb-4 md:mb-0">
          <h2 className="text-2xl font-footer">Cretanary</h2>
        </div>

        <div className="text-white w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0 font-signature">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="text-sm md:text-lg py-2 ">
                <NavLink to={link.url}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-white w-full md:w-1/3 flex flex-col justify-center items-center font-signature">
          <h2 className="text-sm md:text-lg  mb-2">Contacts</h2>
          <div className="flex items-center gap-3 p-2 text-center">
            <FaMapMarkerAlt size={16} />
            <p>Delhi, India</p>
          </div>
          <div className="flex items-center gap-3 p-2 text-center">
            <FaPhone />
            <p>1234567890</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col  text-center bg-[#4A508E]">
        <div class="hidden sm:inline border border-primary-white"></div>
        <span class=" text-center p-4 text-white font-signature ">
          © Createnary 2024
        </span>
      </div>
    </>
  );
};

export default Footer;
