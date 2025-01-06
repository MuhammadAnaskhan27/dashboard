import React from "react";
import ProjectTab from "./ProjectTab";
import AppSidebar from "../sidebar/AppSidebar";
const page = () => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-100 h-screen">
        <AppSidebar />
      </div>
      <div className="w-4/5">
        <ProjectTab />
      </div>
    </div>
  );
};

export default page;
