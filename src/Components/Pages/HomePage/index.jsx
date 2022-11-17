import React from 'react';
import HomeFirst from "./Sections/HomeFirstSection";
import HomeSecond from "./Sections/HomeSecondSection";
import Header from "../Header";
import {HomePageWrapper} from "./HomePage.style";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header/>
      <HomeFirst/>
      <HomeSecond/>
    </HomePageWrapper>
  );
};

export default HomePage;