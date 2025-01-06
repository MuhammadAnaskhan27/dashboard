import Image from "next/image";
import HeroImg from "../../assets/hero.png";
import Carrier from "../../assets/carrier.png";
import DG from "../../assets/DatalyticsGlobal.png";
import Fima from "../../assets/logo-fima.png";
import AXSource from "../../assets/AXSource.png";
import LegalNodes from "../../assets/logo_legalnodes.png";
import TimeSVG from "../../assets/time.svg";
import ScreenshotSVG from "../../assets/screenshots.svg";
import ProjectSVG from "../../assets/project.svg";
import SummarySVG from "../../assets/summary.svg";
import AppsSVG from "../../assets/apps.svg";
import CrossSVG from "../../assets/cross.svg";
import Mack from "../../assets/mack.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Users from "./Users";
import TimeTracking from "./TimeTracking";
import AppsTracking from "./AppsTracking";
import RemoteTracking from "./RemoteTracking";
import Projects from "./Projects";
import StatsTracking from "./StatsTracking";
import OtherFeatures from "./OtherFeatures";
import Security from "./Security";
import Monitoring from "./Monitoring";
import Tabs from "./TabPage";
import Testimonial from "./Testimonial";
import Footer from "../Footer";

const Hero = () => {
  return (
    <>
      <div className="mb-20 " style={{ backgroundColor: "#FEFEFE" }}>
        {/* Hero Div */}
        <div className="mt-20 ml-8 flex gap-32 ">
          {/* text div */}
          <div className="">
            <h1
              className="mt-8 text-5xl font-bold"
              style={{ color: "#293763" }}
            >
              Employee Productivity
            </h1>
            <h1
              className="text-5xl font-bold mt-2"
              style={{ color: "#293763" }}
            >
              Tracking and Workforce
            </h1>
            <h1
              className="text-5xl font-bold mt-2"
              style={{ color: "#293763" }}
            >
              Analytics Platform
            </h1>
            <h3 className="mt-4 text-2xl">
              Employee monitoring software with screenshots
            </h3>
            {/* input field and button div */}
            <div className="flex mt-8 gap-2">
              <Input
                className="w-60 h-12"
                type="email"
                placeholder="Work-Email"
              />
              <Button
                className="w-60 h-12"
                style={{ backgroundColor: "#FF4041" }}
                type="submit"
              >
                Start Your 10 Day Trial
              </Button>
            </div>
            <h6 className="text-sm mt-2" style={{ color: "#5470CD" }}>
              1 min setup. No credit card required.
            </h6>
          </div>

          {/* image div */}
          <div>
            <Image src={HeroImg} />
          </div>
        </div>
        {/* users div */}
        <div className="mt-16 border-b ml-8 mr-8 ">
          <h6 className="text-center">
            1000+ clients worldwide increase workforce productivity with
            Monitask
          </h6>
          <div className="flex justify-around mb-6 mt-12 ">
            <Image src={Carrier} />
            <Image src={DG} />
            <Image src={Fima} />
            <Image src={AXSource} />
            <Image src={LegalNodes} />
            <Image src={Mack} />
          </div>
        </div>
        {/* svg div */}
        <div className="flex justify-around mt-24">
          <div className="flex flex-col justify-center items-center">
            <Image src={TimeSVG} />
            <h1 className="text-xl text-center">
              Employee Time <br /> Tracking{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={ScreenshotSVG} />
            <h1 className="text-xl text-center">
              View Employee <br /> Screenshots{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={ProjectSVG} />
            <h1 className="text-xl text-center">
              Project and Task <br /> Tracking{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={SummarySVG} />
            <h1 className="text-xl text-center">
              Summary and <br /> Custom Reports{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={AppsSVG} />
            <h1 className="text-xl text-center">
              Track Apps and <br /> Websites{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={CrossSVG} />
            <h1 className="text-xl text-center">
              Cross <br /> Platforms{" "}
            </h1>
          </div>
        </div>
      </div>
      <Users />
      <TimeTracking />
      <AppsTracking />
      <RemoteTracking />
      <Projects />
      <StatsTracking />
      <OtherFeatures />
      <Security />
      <Monitoring />
      <Tabs />
      <Footer />
      {/* <Testimonial /> */}
    </>
  );
};

export default Hero;
