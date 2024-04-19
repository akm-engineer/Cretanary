// import React from "react";

// const Welcome = () => {
//   return (
//     <>
//       <div className=" flex items-center justify-center  flex-col md:flex-row pt-48 md:pt-8">
//         <div className=" w-1/2 flex items-center flex-col justify-center">
//           <div className="">
//             <div>
//               <h1 className="text-4xl font-bold font-signature">
//                 Welcome To India’s First
//               </h1>
//               <h1 className="text-4xl font-bold font-signature text-[#624b8e]">
//                 Creator’s Marketplace
//               </h1>
//             </div>
//             <div className="pt-8">
//               <h3 className="text-xl font-bold font-signature">
//                 Create your first E-Store @ Zero Cost
//               </h3>
//             </div>
//             <div>
//               <p className="text-lg font-semibold font-signature max-w-sm pt-8">
//                 Empower your creativity with Createnary. Showcase, sell, and
//                 connect with a global audience effortlessly, turn your products
//                 into profits.
//               </p>
//             </div>
//           </div>
//           <div className="pt-8">
//             <button className=" bg-[#4a508e] px-6 rounded-2xl text-white py-4">
//               Get Started
//             </button>
//           </div>
//         </div>
//         <div className="w-1/2 flex   pt-16">
//           <img src="/images/mobile.png" alt="" className="h-[550px] mt-8" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;
import React from "react";

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
        <div className="w-1/2 flex items-center flex-col justify-center">
          <div className="">
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
              <p className="text-lg font-semibold font-signature max-w-sm pt-8">
                Empower your creativity with Createnary. Showcase, sell, and
                connect with a global audience effortlessly, turn your products
                into profits.
              </p>
            </div>
          </div>
          <div className="pt-8">
            <button className=" bg-[#4a508e] px-6 rounded-2xl text-white py-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 flex pt-16">
          <img src="/images/mobile.png" alt="" className="h-[550px] mt-8" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
