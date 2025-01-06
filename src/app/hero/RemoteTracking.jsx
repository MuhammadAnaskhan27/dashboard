import React from "react";
import Image from "next/image";
import RemoteTrackingIMG from "../../assets/remote-tracking.PNG";
import { Button } from "@/components/ui/button";

const RemoteTracking = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6FAFF" }} className="mt-12">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold pt-12"
        >
          Observe the working process remotely
        </h1>

        <div className="flex gap-32 ml-12 mr-12 mt-20 pb-20">
          <div className="">
            <Image width={1500} src={RemoteTrackingIMG} />
          </div>
          <div>
            <p style={{ color: "#2969AE" }} className="text-xl">
              Try the Monitask time tracking with screenshot feature, which
              helps you track employee and performance remotely. No spying – the{" "}
              <br />
              screenshot taking option will allow you to get <br /> transparent
              information about what your <br /> employees and freelancers are
              really working <br /> on right now.
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

export default RemoteTracking;
