import React from 'react';
import {Swiper1Wrapper} from "./Swiper1.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MyButton from "../../../../../../../Common/MyButton";

const swiperData=[
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img:"images/article.png",
    name: "K5",
    price: "from 3mln "
  },
]

const Swiper1 = () => {
  return (
    <Swiper1Wrapper>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {swiperData.map((item, index)=>(
        <SwiperSlide key={index}>
          <MyButton className="card">
            <img src={item.img} alt=""/>
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </MyButton>
        </SwiperSlide>
        ))}
      </Swiper>

    </Swiper1Wrapper>
  );
};

export default Swiper1;