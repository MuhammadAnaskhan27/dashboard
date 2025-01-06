import React from "react";
import Image from "next/image";
import StatsTrackingImg from "../../assets/Stats-tracking.svg";
import { Button } from "@/components/ui/button";
const StatsTracking = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6FAFF" }} className="mt-12">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold pt-12"
        >
          View Statistics and Generate Reports
        </h1>

        <div className="flex gap-24 ml-12 mr-12 mt-20 pb-20">
          <div className="">
            <Image width={6000} src={StatsTrackingImg} />
          </div>
          <div>
            <p style={{ color: "#2969AE" }} className=" mt-2 text-xl">
              Monitask helps you get a clear picture of the time your team
              spends on each project through reports and statistics. This means
              you can determine how much each project has cost. The application
              allows you to analyze your employees’ output to promote efficiency
              and help improve the way your business operates. Your team members
              can create reports to view their work hours and use that
              information to create invoices. Simple and transparent.
            </p>
            <Button
              className="mt-8 h-12 font-bold"
              style={{ backgroundColor: "#4866C7" }}
            >
              TRY MONITASK FOR FREE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTracking;
