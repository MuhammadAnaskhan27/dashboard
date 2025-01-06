import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectTrack from "../../assets/Project-tracking.svg";

const Projects = () => {
  return (
    <>
      <div className="mt-12 mb-20">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold"
        >
          Create Projects For Your Team
        </h1>

        <div className="flex item-center mt-16 ml-16 gap-20 ">
          <div>
            <p style={{ color: "#2969AE" }} className="text-xl">
              Try Monitask’s time tracking with the screenshot feature, which
              helps you track employees and their performance remotely. The
              screenshot-taking option allows you to get transparent information
              about what your employees and freelancers are really working on
              right now. No spying – the application tracks activity only while
              the user is manually clocked in.
            </p>
            <Button
              className="mt-8 h-12 font-bold"
              style={{ backgroundColor: "#4866C7" }}
            >
              TRY MONITASK FOR FREE
            </Button>
          </div>
          <div className="  mr-20">
            <Image width={4500} src={ProjectTrack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
