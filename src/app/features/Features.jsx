import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DashboardImg from "../../assets/Live-Dashboard.png";
import DailyProductivity from "../../assets/Daily-Productivity.webp";
import Footer from "../Footer";
import ProductivityImg from "../../assets/Productivity.png";
const Features = () => {
  return (
    <>
      <div className="flex mt-16 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold ">Online Employees Status Board</h1>
        <p className="mt-4 text-xl text-[#717171]">
          Fuel a positive culture that boosts employee satisfaction and improves
          performance.
        </p>
        <Button className="mt-10 h-12 w-60 font-semibold bg-[#5470CB]">
          Sign up for free 10-day trial
        </Button>

        <div className="mt-16 flex flex-col">
          <Image src={DashboardImg} />
        </div>
      </div>
      <div className="m-60 mt-0 ">
        <h1 className="mt-16 text-[#293763] font-semibold text-4xl">
          Online Employees Status Board
        </h1>
        <p className="mt-6 text-[#293763] leading-normal text-lg">
          Time theft is one common problem that companies face with their
          employees. Businesses that let their employees log their working hours
          manually lose a lot. So, you certainly would like to monitor when your
          staff members punch in and out of work from any location in real-time.
          But using outdated systems for this purpose can make employees suffer
          unpaid hours. That’s when advanced tools like Monitask in-out board
          software tool enters!
        </p>
        <Image className="mt-10" src={DailyProductivity} />

        <h1 className="text-4xl mt-6 text-[#293763] font-semibold">
          Why Choose a Web-Based Employee In-Out Board?
        </h1>
        <p className="mt-6 text-[#293763] leading-normal text-lg">
          Monitask electronic in-out board is a web-based software program that
          you can access anywhere and anytime. The tool lets you manage the
          teams in your company remotely, whenever you want. The tool is
          accessible from any device that has a fast internet connection. With
          this real-time employee monitoring software, you can easily track and
          manage …your staff’s working time and attendance. Some of its top
          features include the following:
        </p>
        <div className="container mx-auto p-4">
          <h3 className="text-3xl font-bold mb-4">
            Monitask Electronic In-Out Board
          </h3>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <p>
                With the growing popularity of the "work from home" culture,
                these features give employers confidence in knowing when their
                employees are clocked in or not. They simply have to check out
                the dashboard.
              </p>
              <p>
                Using the Status Message widget, employees can send you messages
                that you can view in the digital in-out board.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Custom Landing Page</h3>
              <p>
                For each employee, you can set the landing page according to
                what the employee needs most. For instance, when someone wants
                to land where they have to make their time punch, you can set
                the Time Entry screen set as their landing page.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Report Filter</h3>
              <p>
                The report screen comes with many useful features. You can
                filter data in different desired manners. Some of these even
                ease complex manual tasks.
              </p>
              <p>
                You can save and assign a custom name to the most frequently
                used or important filters. Simply enter the desired name in the
                Filter Name field and tab the Options button. Finally, click on
                the Save button. You can see the named filter in the Load Saved
                Filters dropdown.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-60 mt-0 ">
        <h1 className="mt-16 text-[#293763] font-semibold text-4xl">
          Online Employees Status Board
        </h1>
        <p className="mt-6 text-[#293763] leading-normal text-lg">
          Time theft is one common problem that companies face with their
          employees. Businesses that let their employees log their working hours
          manually lose a lot. So, you certainly would like to monitor when your
          staff members punch in and out of work from any location in real-time.
          But using outdated systems for this purpose can make employees suffer
          unpaid hours. That’s when advanced tools like Monitask in-out board
          software tool enters!
        </p>
        <Image className="mt-10" src={ProductivityImg} />

        <h1 className="text-4xl mt-6 text-[#293763] font-semibold">
          Why Choose a Web-Based Employee In-Out Board?
        </h1>
        <p className="mt-6 text-[#293763] leading-normal text-lg">
          Monitask electronic in-out board is a web-based software program that
          you can access anywhere and anytime. The tool lets you manage the
          teams in your company remotely, whenever you want. The tool is
          accessible from any device that has a fast internet connection. With
          this real-time employee monitoring software, you can easily track and
          manage …your staff’s working time and attendance. Some of its top
          features include the following:
        </p>
        <div className="container mx-auto p-4">
          <h3 className="text-3xl font-bold mb-4">
            Monitask Electronic In-Out Board
          </h3>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <p>
                With the growing popularity of the "work from home" culture,
                these features give employers confidence in knowing when their
                employees are clocked in or not. They simply have to check out
                the dashboard.
              </p>
              <p>
                Using the Status Message widget, employees can send you messages
                that you can view in the digital in-out board.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Custom Landing Page</h3>
              <p>
                For each employee, you can set the landing page according to
                what the employee needs most. For instance, when someone wants
                to land where they have to make their time punch, you can set
                the Time Entry screen set as their landing page.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Report Filter</h3>
              <p>
                The report screen comes with many useful features. You can
                filter data in different desired manners. Some of these even
                ease complex manual tasks.
              </p>
              <p>
                You can save and assign a custom name to the most frequently
                used or important filters. Simply enter the desired name in the
                Filter Name field and tab the Options button. Finally, click on
                the Save button. You can see the named filter in the Load Saved
                Filters dropdown.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
