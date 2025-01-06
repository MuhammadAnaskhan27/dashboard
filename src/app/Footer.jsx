import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import FooterImg from "../assets/footerImg.png";
import FooterImg2 from "../assets/footerImg2.png";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <>
      <footer className=" mt-10 bg-[#F6FAFF]">
        <div className=" pb-10 pt-10 flex justify-around">
          <Image className="h-8 mt-2 " src={Logo} alt="" />
          <Button className="bg-[#4866C7] text-white uppercase font-bold p-6 h-10 ">
            Try for free 10 days no limit
          </Button>
        </div>

        <div className=" flex pl-32 pr-32  justify-around ">
          <div>
            <h1 className="text-xl text-[#333359] font-semibold ">Address</h1>
            <p className="text-[#A099B7] pt-6 ">
              3300 NW 185th Ave #1031 <br /> Portland OR 97229 <br /> 360 350
              0330
            </p>
            <div className="flex gap-8 pt-6 ">
              <Image width={70} src={FooterImg} />
              <Image width={70} src={FooterImg2} />
            </div>
          </div>

          <div>
            <h1 className="text-xl text-[#333359] font-semibold ">
              Information
            </h1>
            <ul className="text-[#A099B7]">
              <li className="pt-6">How it works</li>
              <li className="pt-3">Pricing</li>
              <li className="pt-3">Terms of Service</li>
              <li className="pt-3"> Task Tracker </li>
              <li className="pt-3">Blog</li>
              <li className="pt-3">Integrations</li>
              <li className="pt-3">Non profits</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-[#333359] font-semibold ">Download</h1>
            <ul className="text-[#A099B7]">
              <li className="pt-6">For Windows</li>
              <li className="pt-3">For MAC</li>
              <li className="pt-3">For Android</li>
              <li className="pt-3"> For Linux </li>
              <li className="pt-3">For iOS</li>
              <li className="pt-3">For Chromebook[Beta]</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-[#333359] font-semibold ">Help</h1>
            <ul className="text-[#A099B7]">
              <li className="pt-6">Support</li>
              <li className="pt-3">FAQ</li>
              <li className="pt-3">
                Monitask Help <br /> Center
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 pl-44 pr-36 flex justify-between">
          <div className="text-[#A099B7]">
            <h1 className="text-md  ">
              Privacy Policy
              <h1 className="pt-2 text-md">© 2024 Monitask</h1>
            </h1>
          </div>

          <div className="text-[#A099B7]">
            <p className="text-md">
              Monitask is GDPR compliant with representative in the EU. <br />{" "}
              Please follow this link for more information here.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
