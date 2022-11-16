import styled from "styled-components";

const BannerWrappper = styled.div`
  height: 100vh;

  .swiperWrap {

    .swiper-0, .swiper-2 {
      background: url("/images/banner1.jpeg") no-repeat center center;
      height: calc(100vh - 73px);
      max-width: 100%;
      background-size: cover;
      position: relative !important;

    }

    .swiper-1, .swiper-3 {
      background: url("/images/banner2.jpeg") no-repeat center center;
      height: calc(100vh - 73px);
      max-width: 100%;
      background-size: cover;
      position: relative !important;

    }
  }

  .controlBtns {
    position: absolute !important;
    bottom: 0;
    right: 0;
    z-index: 4;
    padding: 5px;
    background: #fff;

    button {
      background: #fff;
      border: none;
      cursor: pointer;

      &:first-child {
        border-right: 1px solid #eee;
      }
    }
  }
`

const HomeFirstWrapper = styled.div`

  .text {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    .subtitle {
      font-size: 18px;
      color: #069e78;
      font-weight: 400;
      margin-bottom: 15px;
      text-transform: uppercase;
    }

    .title {
      margin: 0 0 24px 0;
      width: 50%;
      font-size: 60px;
      font-weight: 700;
      color: #000;
      line-height: 90px;
      text-transform: capitalize;
    }

    .btn {
      background: #069e78;
      border: none;
      padding: 14px 30px;
      font-size: 14px;
      letter-spacing: 1px;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 10px;

      display: flex;
      align-items: center;
    }
  }



`

export {
  HomeFirstWrapper, BannerWrappper
}