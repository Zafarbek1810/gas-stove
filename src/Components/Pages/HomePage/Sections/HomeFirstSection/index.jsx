import React, {useEffect, useRef} from 'react';
import {HomeFirstWrapper} from "./HomeFirstSection.style";
import Container from "../../../../Common/Container";
import MyLink from "../../../../Common/MyLink";
import MyButton from "../../../../Common/MyButton";
import RightArrowSvg from "../../../../Common/Svgs/RightArrowSvg";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper";
import PrevSvg from "../../../../Common/Svgs/PrevSvg";
import NextSvg from "../../../../Common/Svgs/NextSvg";

const bannerData = [
  {
    subtitle: "new beds collection",
    title: "new beds Collection 2022"
  },
  {
    subtitle: "new beds collection",
    title: "new beds Collection 2022"
  },
  {
    subtitle: "new beds collection",
    title: "new beds Collection 2022"
  },
  {
    subtitle: "new beds collection",
    title: "new beds Collection 2022"
  },
]

const HomeFirst = () => {
  const swiperRef=useRef(null)

  useEffect(() => {
    console.log(swiperRef);
  }, []);

  const slideNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  const slidePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
   <>
     <div className="swiperWrap">
       <Swiper
         ref={swiperRef}
         spaceBetween={30}
         centeredSlides={true}
         // autoplay={{
         //   delay: 2500,
         //   disableOnInteraction: false,
         // }}
         pagination={{
           clickable: true,
         }}
         loop={true}
         // navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
       >
         {bannerData.map((item, index) => (
           <SwiperSlide key={index}>
             <HomeFirstWrapper>
               <Container>
                 <div className="text">
                   <p className="subtitle">{item.subtitle}</p>
                   <h1 className="title">{item.title}</h1>
                   <MyButton className="btn">view more <RightArrowSvg/></MyButton>
                 </div>
               </Container>
             </HomeFirstWrapper>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
     <div className="controlBtns">
       <button onClick={slidePrev}><PrevSvg/></button>
       <button onClick={slideNext}><NextSvg/></button>
     </div>
   </>

  );
};

export default HomeFirst;