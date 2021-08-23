import React from "react";
import Line from "../components/Line/Line";
import Menu from "../components/Menu";

const Homepage = (props: any) => {
  const banner = require("../Images/spa-banner.jpg");
  const steps = require("../Images/steps.png");

  return (
    <>
      <Menu />
      <img src={banner} height="50%" width="100%" alt="banner"></img>
      <Line />
      <img src={steps} height="50%" width="100%" alt="process"></img>
      <Line />
    </>
  );
};

export default Homepage;
