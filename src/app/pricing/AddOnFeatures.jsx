"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const AddOnFeatures = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <>
      <div className="flex flex-col justify-center rounded-lg items-center ml-10 mr-10 pb-10 mt-10 bg-[#F6FAFF]">
        <h1 className="text-5xl mt-6 text-[#293763]">Add-On Features</h1>
        <p className="uppercase mt-4 text-[#293763]"> Screenshots</p>
        <div className="flex items-center justify-center py-8">
          <div className="flex rounded-full bg-white p-2 shadow-md">
            {" "}
            {/* Increased padding */}
            {/* Monthly Billing Tab */}
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-8 py-4 text-base font-medium transition-all rounded-full", // Increased padding and font size
                !isAnnual
                  ? "bg-white text-gray-900 shadow"
                  : "text-[#293763] hover:text-gray-700"
              )}
            >
              Monthly billing
            </button>
            {/* Annual Billing Tab */}
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-8 py-4 text-base font-medium transition-all rounded-full", // Increased padding and font size
                isAnnual
                  ? "bg-[#5470CB] text-white shadow"
                  : "text-[#293763] hover:text-gray-700"
              )}
            >
              Annual billing
              {isAnnual && <span className="ml-2 text-sm">Save 20%</span>}{" "}
              {/* Adjusted text size */}
            </button>
          </div>
        </div>
        <div className="flex justify-around gap-10">
          <div className="h-56 bg-white pt-4 pb-4 w-60 rounded-lg">
            <h1 className="text-5xl text-[#293763] text-center">30 </h1>
            <p className="text-center  text-[#293763]">screenshots per </p>
            <p className="text-center text-[#293763]">hour</p>
            <p className="text-center mt-4 text-[#293763]">
              $ <span className="text-[#293763] text-4xl">0</span> /mo
            </p>
            <p className="text-center text-[#293763]"> per license</p>
          </div>
          <div className="h-56 bg-white pt-4 pb-4 w-60 rounded-lg">
            <h1 className="text-5xl text-[#293763] text-center">60 </h1>
            <p className="text-center  text-[#293763]">screenshots per </p>
            <p className="text-center text-[#293763]">hour</p>
            <p className="text-center mt-4 text-[#293763]">
              $ <span className="text-[#293763] text-4xl">2.4</span> /mo
            </p>
            <p className="text-center text-[#293763]"> per license</p>
          </div>

          <div className="h-56 bg-white pt-4 pb-4 w-60 rounded-lg">
            <h1 className="text-5xl text-[#293763] text-center">90 </h1>
            <p className="text-center  text-[#293763]">screenshots per </p>
            <p className="text-center text-[#293763]">hour</p>
            <p className="text-center mt-4 text-[#293763]">
              $ <span className="text-[#293763] text-4xl">4.8</span> /mo
            </p>
            <p className="text-center text-[#293763]"> per license</p>
          </div>

          <div className="h-56 bg-white pt-4 pb-4 w-60 rounded-lg">
            <h1 className="text-5xl text-[#293763] text-center">120 </h1>
            <p className="text-center  text-[#293763]">screenshots per </p>
            <p className="text-center text-[#293763]">hour</p>
            <p className="text-center mt-4 text-[#293763]">
              $ <span className="text-[#293763] text-4xl">7.2</span> /mo
            </p>
            <p className="text-center text-[#293763]"> per license</p>
          </div>
        </div>

        <p className="mt-6">
          The screenshot storage time matches with the monthly / yearly plan
          purchased
        </p>
      </div>
    </>
  );
};

export default AddOnFeatures;
