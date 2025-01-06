import React from "react";
import Camera from "../../assets/camera.png";
import Clock from "../../assets/clock.png";
import Calendar from "../../assets/calendarblank.png";
import Signin from "../../assets/signin.png";
import Components from "./Components";
const OtherFeatures = () => {
  return (
    <>
      <div className="mb-20">
        <h6
          className="text-center text-4xl font-bold mt-12 mb-12"
          style={{ color: "#293763" }}
        >
          What else does Monitask have for your business?
        </h6>
        <div className="flex">
          <Components
            title="Screen monitoring"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Camera}
          />
          <Components
            title="Employee Scheduling App"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Calendar}
          />
          <Components
            title="Time Tracking Software"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Clock}
          />
          <Components
            title="Employee In Out Board"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Signin}
          />
        </div>

        <div className="flex mt-8">
          <Components
            title="Screen monitoring"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Camera}
          />
          <Components
            title="Employee Scheduling App"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Calendar}
          />
          <Components
            title="Time Tracking Software"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Clock}
          />
          <Components
            title="Employee In Out Board"
            description=" Customized screen monitoring to improve productivity,accountability,
          and data protection."
            img={Signin}
          />
        </div>
      </div>
    </>
  );
};

export default OtherFeatures;
