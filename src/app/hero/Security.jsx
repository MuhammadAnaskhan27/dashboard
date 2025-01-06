import React from "react";
import SecurityInfo from "./SecurityInfo";

const Security = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6FAFF" }}>
        <h1
          className="text-center text-4xl font-bold pt-20 "
          style={{ color: "#293763" }}
        >
          What about security?
        </h1>
        {/* Security Boxes Div */}
        <div className="mt-12 ml-6 mr-6 pb-20 ">
          <div className="flex justify-center gap-8">
            <SecurityInfo
              title="100% secure and safe to use"
              description="Monitask encrypts all transmitted and stored data"
              readmore="Read More"
            />
            <SecurityInfo
              title="Attentive to confidential information"
              description="You are in complete control of what's measured and tracked"
              readmore="Read More"
            />
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <SecurityInfo
              title="No record of keystrokes or sensitive data"
              description="Monitask only captures the number of keystrokes and mouse movements"
              readmore="Read More"
            />
            <SecurityInfo
              title="No spying. Just transparency"
              description="Monitask tracks activity only when an employee manually clocks in"
              readmore="Read More"
            />
          </div>
        </div>
        {/* Security Texts Div */}
        <div className="flex gap-12 justify-between ml-20 mr-20 pb-12">
          <div className="container">
            <h1
              style={{ color: "#5470CB" }}
              className="text-2xl uppercase font-bold mr-8 "
            >
              Monitask is legal and ethical employee monitoring software
            </h1>
          </div>
          <div className="container">
            <p className="text-lg ml-12 mr-4 ">
              Monitask is a non-intrusive employee monitoring solution and only
              works during the time an employee is clocked in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
