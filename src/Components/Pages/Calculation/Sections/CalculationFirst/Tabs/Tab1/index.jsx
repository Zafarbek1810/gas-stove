import React, {useState} from 'react';
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";

const swiperData = [
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "111",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "222",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "333",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
  {
    img: "images/article.png",
    name: "K5",
    price: "from 3mln "
  },
]

const Tab1 = ({setActivePage}) => {
  const [activeSwiperIndex, setActiveSwiperIndex]=useState(0)
  const [data, setData]=useState(swiperData)

  return (
    <div>
      <Swiper1
        activeSwiperIndex={activeSwiperIndex}
        setActiveSwiperIndex={setActiveSwiperIndex}
        data={data}
      />
      <Swiper2
        activeSwiperIndex={activeSwiperIndex}
        setActiveSwiperIndex={setActiveSwiperIndex}
        setActivePage={setActivePage}
        data={data}
      />
    </div>
  );
};

export default Tab1;