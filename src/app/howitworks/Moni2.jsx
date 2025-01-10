import React from "react";
import SignupImg from "../../assets/SIGNUP.png";
import InviteImg from "../../assets/INVITE.png";
import Image from "next/image";
import DownloadImg from "../../assets/DOWNLOAD.png";
import Activity from "../../assets/Daily-Activity-1.png";
import TaskImg from "../../assets/Tasks.png";
import InternetActivity from "../../assets/INTERNET-ACTIVITY-USAGE.png";
export default function Moni2() {
  return (
    <>
      {/* First Section */}
      <div className="bg-blue-50 flex items-center justify-center py-8 pt-[60px]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[24px] font-bold mb-6 text-custom-black font-custom">
            A few simple steps to start
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-4 p-4">
            {/* Left Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:mr-4">
              <h3 className="text-[30px] text-custom-blue2 font-bold mb-1 font-custom">
                Step 1
              </h3>
              <h4 className="text-[18px] font-bold mb-2 text-custom-black font-custom">
                Create a Monitask account
              </h4>

              <a
                href="#"
                className="text-custom-white  hover:text-blue-700 transition text-[14px] font-custom"
              >
                Sign up for a free 10-day trial
              </a>
            </div>

            {/* Right Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0 md:ml-8">
              {" "}
              {/* Increased margin-top for more space */}
              <Image src={SignupImg} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-blue-50 flex items-center justify-center py-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-8 p-4">
            {/* Left Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center">
              <Image src={InviteImg} />
            </div>

            {/* Right Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:ml-8">
              <h3 className="text-custom-blue2 font-bold mb-1 text-[30px] font-custom">
                Step 2
              </h3>
              <h4 className="text-[18px] font-bold mb-2 text-custom-black font-custom">
                Invite employees and remote workers
              </h4>
              <p className="text-custom-white text-[14px] font-custom">
                Click "Invite your team" from the dashboard and add your team
                members’ email addresses. You can add an unlimited number of
                employees to your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-blue-50 flex items-center justify-center py-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-4 p-4">
            {/* Left Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:mr-4">
              <h3 className="text-[30px] text-custom-blue2 font-bold mb-1 font-custom">
                Step 3
              </h3>
              <h4 className="text-[18px] font-bold mb-2 text-custom-black font-custom">
                Ask employees to start tracking time using Monitask
              </h4>
              <p className="text-custom-white text-[14px] font-custom">
                Your team members will need to download the time-tracking app
                and start using it to track the time spent on work items.
                Company owners, administrators, and managers do not need to
                install Monitask, as data is accessible via the web-based
                real-time dashboard.
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0 md:ml-8">
              <Image src={DownloadImg} />
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-blue-50 flex items-center justify-center py-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-8 p-4">
            {/* Left Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center">
              <Image src={TaskImg} />
            </div>

            {/* Right Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:ml-8">
              <h3 className="text-[30px] text-custom-blue2 font-bold mb-1 font-custom">
                Step 4
              </h3>
              <h4 className="text-[18px] text-custom-black font-bold mb-2 font-custom">
                Assign projects and tasks
              </h4>
              <p className=" text-custom-white text-[14px] font-custom">
                Project management features allow you to assign projects to team
                members and review work hours associated with each project and
                task.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}

      <div className="bg-blue-50 flex items-center justify-center py-8 pt-[60px]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-4 p-4">
            {/* Left Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:mr-4">
              <h3 className="text-[30px] text-custom-blue2 font-bold mb-1 font-custom">
                Step 5
              </h3>
              <h4 className="text-[18px] font-bold mb-2 text-custom-black font-custom">
                Review work hours and proof of work
              </h4>

              <p className="text-custom-white font-custom text-[14px]">
                Use Live Dashboard to review online employees, their time
                entries, screenshots, activity levels, and internet usage.
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0 md:ml-8">
              {" "}
              {/* Increased margin-top for more space */}
              <Image src={Activity} />
            </div>
          </div>
        </div>
      </div>
      {/* Sixth Section */}
      <div className="bg-blue-50 flex items-center justify-center py-8 ">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-8 p-4">
            {/* Left Section (Image) */}
            <div className="md:w-1/2 flex items-center justify-center">
              <Image src={InternetActivity} />
            </div>

            {/* Right Section (Text) */}
            <div className="md:w-1/2 flex flex-col justify-center text-left md:ml-8">
              <h3 className="font-bold text-[30px] text-custom-blue2 mb-1 font-custom">
                Step 6
              </h3>
              <h4 className="text-[18px] text-custom-black font-bold mb-2 font-custom">
                Continue using Monitask to get in-depth insights
              </h4>
              <p className="text-custom-white text-[14px] font-custom">
                Monitask analyzes time and data across your company. After you
                use the software for several weeks, it generates comprehensive
                reports so that you can analyze and identify bottlenecks,
                employee productivity, and processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
