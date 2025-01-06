import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const SignUp = () => {
  return (
    <>
      <div className="bg-[#F6FAFF] pb-20 ">
        <div className="flex justify-center items-center pt-10 ">
          <div>
            <Link href="/">
              {/* <Image src={Logo} /> */}
              <h1 className="font-bold text-3xl ">Raqeeb</h1>
            </Link>
          </div>
        </div>

        <div className="flex  flex-col pt-10 justify-center items-center">
          <div className=" rounded-lg shadow-lg bg-white pl-6 pt-4 pb-4 pr-6 ">
            <div className="border-b border-[#F7F7F7]">
              <h1 className=" text-[#5087C2] pb-4 font-semibold">
                Sign Up for a Raqeeb account
              </h1>
            </div>
            <div>
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="First Name"
              />
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="Last Name"
              />
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="Email Address"
              />
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="Password (Minimum of 8 characters) "
              />

              <div className="mt-3">
                <Checkbox className="mr-2" id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm text-[#5470CB] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree with the terms and privacy policy
                </label>
              </div>
              <Button className="mt-5 h-8 w-80 hover:bg-[#5470CB] bg-[#5470CB] ">
                SIGN UP
              </Button>
              <h1 className=" pb-4 text-center mt-3 text-sm">
                Already Have an account?{" "}
                <a className="text-[#5470CB] underline " href="/loginPage">
                  Log in here
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
