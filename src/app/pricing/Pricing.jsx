"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import PricingPlans from "./PricingPlans";
import AddOnFeatures from "./AddOnFeatures";
import KeyFeatures from "./KeyFeatures";
import Footer from "../Footer";
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center mt-16">
        <h1 className="text-6xl text-[#293763] ">Monitask Pricing</h1>
        <p className="text-md">
          Find out more about all our editions and pricing below.
        </p>
        <div className="flex gap-x-4 mt-6">
          <Button className="w-48 h-12 bg-[#5470CB] hover:bg-[#5470CB] ">
            Start Free Trial
          </Button>
          <Button className="w-48 h-12 bg-white text-[#5470CB] border-2 border-[#5470CB] hover:bg-white">
            {" "}
            Contact Sales
          </Button>
        </div>
        <div className="flex items-center justify-center py-8">
          <div className="flex rounded-full bg-[#F6FAFF] p-2 shadow-md">
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
      </div>

      <PricingPlans />
      <AddOnFeatures />
      <KeyFeatures />
      <Footer />
    </>
  );
};

export default Pricing;
