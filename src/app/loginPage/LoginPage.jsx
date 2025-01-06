import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const LoginPage = () => {
  return (
    <>
      <div className="bg-[#F6FAFF] pb-48 ">
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
              <h1 className=" text-[#5087C2] pb-4 font-semibold">Log In</h1>
            </div>
            <div>
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="Email Address"
              />
              <Input
                className="w-80 mt-5"
                type="text"
                placeholder="Password "
              />

              <div className="mt-3">
                <h1 className=" text-xs text-[#5470CB] underline  text-end ">
                  Forgot Your Password ?
                </h1>
              </div>
              <Link href="/projectmanagement">
                <Button className="mt-5 text-xs h-8 w-80 hover:bg-[#5470CB] bg-[#5470CB] ">
                  LOG IN
                </Button>
              </Link>
              <h1 className=" pb-4 text-center mt-3 text-xs">
                Don't Have an account?{" "}
                <a
                  className="text-[#5470CB] text-xs underline "
                  href="/signUpPage"
                >
                  Sign Up!
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
