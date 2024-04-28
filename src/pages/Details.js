import React from "react";
import Footer from "./Footer";

const Details = () => {
  return (
    <>
      <div className="bg-[#f8f9fb] h-fit pt-44 sm:pt-44 flex justify-center items-center md:pt-44 lg:pt-36 pb-8 relative">
        <div className="flex w-full h-fit flex-col sm:flex-row sm:justify-center  pl-0  md:pl-32 lg:pl-28 xl:pl-60">
          <div class="font-bold text-2xl px-4 block sm:hidden">
            HOW IT WORKS
          </div>
          <div className="sm:sticky top-0 bottom-0 pt-6 px-4 sm:pt-40 w-full sm:w-1/3 h-fit flex gap-6 md:px-6 lg:px-16 flex-col font-signature">
            <h3 class="font-extrabold text-2xl">
              GetSetYo handholds you at every step of the way
            </h3>
            <p className="text-lg">
              You focus on helping your friends and family, we take care of
              everything else.
            </p>
            <div class="flex justify-start pt-4 items-center w-full">
              <button class="bg-[#4A508E] text-white w-fit  rounded-2xl px-5 py-3">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex w-full pt-8 justify-start sm:pt-0 sm:w-3/5">
            <div className="w-3/12 sm:w-[8%]  flex items-center flex-col">
              <div class="flex justify-center items-center  px-4 py-1.5 sm:px-6 sm:py-3.5 rounded-lg text-xl sm:text-3xl bg-[#4A508E] text-white">
                1
              </div>
              <div class="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
              <div class="flex justify-center items-center  px-4 py-1.5 sm:px-6 sm:py-3.5 rounded-lg text-xl sm:text-3xl bg-[#4A508E] text-white">
                2
              </div>
              <div class="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
              <div class="flex justify-center items-center  px-4 py-1.5 sm:px-6 sm:py-3.5 rounded-lg text-xl sm:text-3xl bg-[#4A508E] text-white">
                3
              </div>
              <div class="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
              <div class="flex justify-center items-center  px-4 py-1.5 sm:px-6 sm:py-3.5 rounded-lg text-xl sm:text-3xl bg-[#4A508E] text-white">
                4
              </div>
              <div class="h-[42vh] border border-[#D6D6D6]"></div>
            </div>
            <div className="flex flex-col  w-full sm:w-1/2 pr-4 sm:pl-10 sm:pr-0 font-signature">
              <div className="flex flex-col gap-6">
                <h3 class="font-bold text-[1.3rem]">
                  Share the holidays, stays and experiences with your friends
                  and family{" "}
                </h3>
                <p className="text-lg">
                  You receive trending &amp; curated Itineraries and Insider
                  deals on Hotels &amp; Flights to share
                </p>
                <img
                  src="/images/detail.png"
                  alt=""
                  className="object-contain  rounded-[1.2rem] "
                />
              </div>
              <div class="h-[5vh] sm:h-[42vh] "></div>
              <div class="flex flex-col gap-6">
                <h3 class="font-bold text-[1.3rem]">
                  Understand their requirements and budgets
                </h3>
                <p className="text-lg">
                  You receive trending &amp; curated Itineraries and Insider
                  deals on Hotels &amp; Flights to share
                </p>
                <img
                  alt="detail-two"
                  className="object-contain  rounded-[1.2rem]"
                  src="/images/detail.png"
                />
              </div>
              <div class="h-[4vh] sm:h-[44vh] "></div>
              <div class="flex flex-col gap-6">
                <h3 class="font-bold text-[1.3rem]">
                  Share the payment link, sit back and relax
                </h3>
                <p className="text-lg">
                  You receive trending &amp; curated Itineraries and Insider
                  deals on Hotels &amp; Flights to share
                </p>
                <img
                  alt="detail-two"
                  className="object-contain  rounded-[1.2rem]"
                  src="/images/detail.png"
                />
              </div>
              <div class="h-[6vh] sm:h-[47vh] "></div>
              <div class="flex flex-col gap-6">
                <h3 class="font-bold text-[1.3rem]">Get Rewarded each time</h3>
                <p className="text-lg">
                  You receive trending &amp; curated Itineraries and Insider
                  deals on Hotels &amp; Flights to share
                </p>
                <img
                  alt="detail-three"
                  className="object-contain  rounded-[1.2rem] "
                  src="/images/detail.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
