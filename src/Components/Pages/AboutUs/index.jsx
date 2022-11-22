import React from 'react';
import Header from "../Header"
import AboutFirst from "./Sections/AboutFirst";
import AboutSecond from "./Sections/AboutSecond";

const AboutUs = () => {
  return (
    <div>
      <Header/>
      <AboutFirst/>
      <AboutSecond/>
    </div>
  );
};

export default AboutUs;