import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AppTrack from "../../assets/app-track.PNG";
const AppsTracking = () => {
  return (
    <>
      <div className="mt-12 mb-20">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold"
        >
          View Apps Used By Your Team
        </h1>

        <div className="flex item-center mt-16 ml-16 gap-52 ">
          <div>
            <p style={{ color: "#2969AE" }} className="text-xl">
              Use the employee time tracking features in <br /> Monitask to
              monitor the workload of your team <br /> and employees. The
              dashboards allow employers <br /> to observe the work process in
              real-time. Our <br />
              application tracks employees’ web and application <br /> activity,
              it shows which tasks and projects are <br /> currently being
              worked on, and how long the <br /> workflow actually takes.
            </p>
            <Button
              className="mt-8 h-12 font-bold"
              style={{ backgroundColor: "#4866C7" }}
            >
              TRY MONITASK FOR FREE
            </Button>
          </div>
          <div className="flex flex-end">
            <Image
              className="flex flex-end item-end"
              width={500}
              src={AppTrack}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppsTracking;
