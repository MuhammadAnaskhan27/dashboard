import React from 'react'
import dynamic from "next/dynamic";
import AppSidebar from '../../sidebar/AppSidebar';

const Project_Dashboard_Table = dynamic(() => import("./Project_Dashboard_Table"), { ssr: false });

const page = () => {
  return (
    <div className="flex">
    <div className="w-1/5 bg-gray-100 h-screen"><AppSidebar/></div>
    <div className="w-4/5">
      <Project_Dashboard_Table/>
    </div>
  </div>
  )
}

export default page
