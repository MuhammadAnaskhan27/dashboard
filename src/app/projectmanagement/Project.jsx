import Image from "next/image";

import Logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { FiLogOut } from "react-icons/fi"; // Exit Icon
import Link from "next/link";
const Project = () => {
  return (
    <>
      <div className="bg-[#F6F9FE]">
        <Button className="absolute top-4 right-4 flex items-center  text-white bg-[#8E9BB3] hover:bg-[#8E9BB3] ">
          <span>Logout</span>
          <FiLogOut size={20} />
        </Button>

        <div className="flex items-center justify-center h-screen ">
          <div className="p-4 flex flex-col items-center">
            {/* Centered Logo */}
            {/* <Image src={Logo} alt="Logo" className="mb-8" /> */}
            <h1 className="font-bold text-3xl mb-4 ">Raqeeb</h1>
            <div className=" bg-white h-64 pt-2 pl-4 pr-4 shadow-lg ">
              <h1 className="text-start border-b-2 pb-2 text-[#8D9CB3] font-bold ">
                Let's start with your organization
              </h1>
              {/* organization div */}
              <div className="flex gap-x-4 mt-10 ml-2 mr-2">
                {/* Employee/Contractor Section */}
                <div className="border w-80 p-4 flex flex-col items-center shadow-md ">
                  <h1 className="mb-6 text-center  ">
                    I'm an employee/contractor
                  </h1>
                  <Button className="flex justify-center items-center  bg-[#8E9BB1] hover:bg-[#8E9BB1] ">
                    I want to join a company
                  </Button>
                </div>
                {/* Owner/Manager Section */}
                <div className=" w-80 border p-4 flex flex-col items-center shadow-md ">
                  <h1 className="mb-6   text-center">
                    I'm a company owner/manager
                  </h1>
                  <Link href="/projectmanagement/monitask">
                    <Button className="flex justify-center items-center bg-[#5371CB] hover:bg-[#5371CB] ">
                      I want to create a new organization
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
