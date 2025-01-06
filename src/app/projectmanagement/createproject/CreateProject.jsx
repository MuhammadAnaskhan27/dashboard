"use client";
import Image from "next/image";
import Logo from "../../../assets/logo.png";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateProject = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-[#F6F9FE]">
        <div className="flex items-center justify-center  ">
          <div className="p-4 flex flex-col items-center">
            {/* <Image src={Logo} alt="Logo" className="mb-8" /> */}
            <h1 className="font-bold text-3xl mb-4">Raqeeb</h1>
            <Card className="w-[650px]">
              <CardHeader>
                <CardTitle className="border-b-2 pb-2 text-[#697094] text-md ">
                  Create Your Projects
                </CardTitle>
                <h1 className="pt-4">
                  Enter name of projects on which you would like to work in
                  Monitask (can be changed later){" "}
                </h1>
              </CardHeader>

              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    {/* first input field */}
                    <div className="border p-4 ">
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          className="text-[#A5A5A5]"
                          id="name"
                          placeholder="Project name"
                        />
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox className="border-" id="terms" />
                          <label
                            htmlFor="terms"
                            className=" text-[#727FC4] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-none "
                          >
                            Billable
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* second input field */}
                    <div className="border p-4 ">
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          className="text-[#A5A5A5]"
                          id="name"
                          placeholder="Project name"
                        />
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox className="border-" id="terms" />
                          <label
                            htmlFor="terms"
                            className=" text-[#727FC4] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-none "
                          >
                            Billable
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* third input field */}
                    <div className="border p-4 ">
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          className="text-[#A5A5A5]"
                          id="name"
                          placeholder="Project name"
                        />
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox className="border-" id="terms" />
                          <label
                            htmlFor="terms"
                            className=" text-[#727FC4] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-none "
                          >
                            Billable
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button className="mt-2 text-sm underline text-[#5570CB]">
                  + Add project
                </button>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Link href="/monitaskdashboard">
                  <Button className="bg-[#5270D1]  hover:bg-[#5270D1]">
                    Continue
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
