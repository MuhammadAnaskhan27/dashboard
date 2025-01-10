import React from "react";
import Moni from "./Moni";
import Moni2 from "./Moni2";
import Platforms from "./Platforms";
import Footer from "../Footer";

const HowItWorks = () => {
  return (
    <div>
      <Moni />
      <div className="mt-[70px] ">
        <Moni2 />
        <Footer />
      </div>
    </div>
  );
};

export default HowItWorks;
