import React, {useEffect, useRef} from 'react';
import {Swiper2Wrapper} from "./Swiper2.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MyButton from "../../../../../../../Common/MyButton";

const Swiper2 = ({setActivePage}) => {
  const swiperRef=useRef(null)

  useEffect(()=>{
    console.log(swiperRef.current.swiper.activeIndex)
  },[])

  const next=()=>{
    setActivePage(2)
  }
  const prev=()=>{
    setActivePage(1)
  }
  return (
    <Swiper2Wrapper>
      <Swiper
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <MyButton><img src="images/article.png" alt=""/></MyButton>
        </SwiperSlide>
        <SwiperSlide>
          <MyButton><img src="images/article.png" alt=""/></MyButton>
        </SwiperSlide>
        <SwiperSlide>
          <MyButton><img src="images/article.png" alt=""/></MyButton>
        </SwiperSlide>
        <SwiperSlide>
          <MyButton><img src="images/article.png" alt=""/></MyButton>
        </SwiperSlide>
      </Swiper>


    </Swiper2Wrapper>
  );
};

export default Swiper2;