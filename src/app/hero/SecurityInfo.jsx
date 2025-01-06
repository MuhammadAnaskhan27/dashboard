import React from "react";

const SecurityInfo = ({ title, description, readmore }) => {
  return (
    <>
      <div className="container bg-white">
        <h1
          className="p-6 pb-0 text-2xl font-bold "
          style={{ color: "#293763" }}
        >
          {title}
        </h1>
        <p className=" pt-4 text-md pl-6 pr-6">{description}</p>
        <h6
          className="pt-4 text-lg pl-6 pr-6 pb-8 "
          style={{ color: "#5470CE" }}
        >
          {readmore}
        </h6>
      </div>
    </>
  );
};

export default SecurityInfo;
