import React from 'react';
import HomeFirst from "./Sections/HomeFirstSection";
import HomeSecond from "./Sections/HomeSecondSection";
import Header from "../Header";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HomeFirst/>
      <HomeSecond/>
    </div>
  );
};

export default HomePage;