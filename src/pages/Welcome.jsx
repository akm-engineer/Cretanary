import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div
        className="flex items-center justify-center flex-col md:flex-row pt-48 md:pt-8"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="top-[450px] -left-10 hidden inset-0 z-10 fixed lg:flex items-center w-20 h-20 backdrop-blur-md backdrop-filter  bg-[#7d80ad] bg-opacity-40 rounded-full">
          <FaChevronRight className=" cursor-pointer ml-10 size-8 text-white text-center" />
        </div>
        <div className="w-full md:w-1/2 flex items-center flex-col justify-center">
          <div className="max-w-md text-center md:text-left">
            <div>
              <h1 className="text-4xl font-bold font-signature">
                Welcome To India’s First
              </h1>
              <h1 className="text-4xl font-bold font-signature text-[#624b8e]">
                Creator’s Marketplace
              </h1>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold font-signature">
                Create your first E-Store @ Zero Cost
              </h3>
            </div>
            <div>
              <p className="text-lg font-semibold font-signature pt-8">
                Empower your creativity with Createnary. Showcase, sell, and
                connect with a global audience effortlessly, turn your products
                into profits.
              </p>
            </div>
          </div>
          <div className="pt-8">
            <Link to={"/detail"}>
              <button className="bg-[#4a508e] px-6 rounded-2xl text-white py-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex pt-16 justify-center md:justify-start">
          <img src="/images/mobile.png" alt="" className="h-[550px] mt-8" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
