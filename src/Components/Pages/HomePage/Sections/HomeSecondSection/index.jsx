import React, {useEffect, useRef} from 'react';
import {HomeSecondWrapper} from "./HomeSecondSection.style";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import Container from "../../../../Common/Container";
import MyLink from "../../../../Common/MyLink";
import PrevSvg from "../../../../Common/Svgs/PrevSvg";
import NextSvg from "../../../../Common/Svgs/NextSvg";

const cardData = [
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
  {
    img1: "images/card1.webp",
    subtitle: "Sagaform",
    title: "Buick Iconic Chair Orange In Color",
    price: "$999.00"
  },
]


const HomeSecond = () => {
  const swiperRef=useRef();

  useEffect(()=>{
    console.log(swiperRef.current.swiper.slideNext)
  },[])

  const slideNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  const slidePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <HomeSecondWrapper>
      <Container>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={40}
          // navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={item.img1} alt=""/>
                <p className="subtitle">{item.subtitle}</p>
                <h3 className="title"><MyLink to="/">{item.title}</MyLink></h3>
                <span className="price">{item.price}</span>
                <button>CHoose option</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btnControl">
          <button onClick={slidePrev}><PrevSvg/></button>
          <button onClick={slideNext}><NextSvg/></button>
        </div>
      </Container>
    </HomeSecondWrapper>
  );
};

export default HomeSecond;