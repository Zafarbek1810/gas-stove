import React from 'react';
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";

const Tab1 = ({setActivePage}) => {
  return (
    <div>
      <Swiper1/>
      <Swiper2 setActivePage={setActivePage}/>
    </div>
  );
};

export default Tab1;