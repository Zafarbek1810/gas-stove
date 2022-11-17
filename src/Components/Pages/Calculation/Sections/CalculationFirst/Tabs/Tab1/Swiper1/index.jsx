import React, {useEffect, useRef} from 'react';
import {Swiper1Wrapper} from "./Swiper1.style";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import MyButton from "../../../../../../../Common/MyButton";



const Swiper1 = ({setActiveSwiperIndex, activeSwiperIndex, data}) => {
  const swiperRef = useRef()

  const handleOnClick = (index) => {
    setActiveSwiperIndex(index)
  }

  return (
    <Swiper1Wrapper>
      <Swiper
        ref={swiperRef}
        slidesPerView={6}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`card ${index === activeSwiperIndex ? 'active-card' : ""}`}
                 onClick={() => handleOnClick(index)}>
              <img src={item.img} alt=""/>
              <h5>{item.name}</h5>
              <p>{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </Swiper1Wrapper>
  );
};

export default Swiper1;