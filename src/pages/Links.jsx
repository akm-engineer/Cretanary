import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <div className="bg-[#4A508E] w-full flex justify-center items-center flex-col p-8 relative">
        <div>
          <h1 className="text-4xl font-signature font-extrabold text-white">
            Your audience wants links
          </h1>
        </div>
        <div className="pt-6">
          <p className="text-xl font-signature  text-white">
            Make it easy for them by linking products to every post and video
          </p>
        </div>
        <div className="pt-6 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="text-white ">
              <FaChevronLeft size={44} />
            </button>
          </div>
          <img src="/images/highlight.png" alt="" className="rounded-2xl " />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="text-white">
              <FaChevronRight size={44} />
            </button>
          </div>
        </div>
        <div className="pt-6">
          <button className="bg-white px-6 rounded-2xl font-bold font-signature py-4">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Links;
