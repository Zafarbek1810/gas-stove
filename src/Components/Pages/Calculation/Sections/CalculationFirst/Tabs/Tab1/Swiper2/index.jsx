import React, {useEffect, useRef} from 'react';
import {Swiper2Wrapper} from "./Swiper2.style";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import MyButton from "../../../../../../../Common/MyButton";

const Swiper2 = ({setActivePage, activeSwiperIndex, setActiveSwiperIndex, data}) => {
  const swiperRef = useRef(null)

  console.log(activeSwiperIndex)

  useEffect(() => {
    swiperRef.current.swiper.slideTo(activeSwiperIndex)
  }, [activeSwiperIndex])


  const next = () => {
    setActivePage(2)
  }
  const prev = () => {
    setActivePage(1)
  }
  return (
    <Swiper2Wrapper>
      <Swiper
        onActiveIndexChange={(r) => setActiveSwiperIndex(r.activeIndex)}
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card-slide">
              <h4>{item.name}</h4>
              <img src={item.img} alt=""/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </Swiper2Wrapper>
  );
};

export default Swiper2;