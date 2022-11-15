import styled from "styled-components";

const HomeFirstWrapper=styled.div`
  height:calc(100vh - 50px);
  max-width: 100%;
  background: url("images/banner.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
  .swiperWrap{
    position: relative;
  }
  
  .text{
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    
    .subtitle{
      font-size: 18px;
      color: #069e78;
      font-weight: 400;
      margin-bottom: 15px;
      text-transform: uppercase;
    }
    
    .title{
      margin: 0 0 24px 0;
      width: 50%;
      font-size: 60px;
      font-weight: 700;
      color: #000;
      line-height: 90px;
      text-transform: capitalize;
    }
    
    .btn{
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
  
  .controlBtns{
    position: absolute;
    top: 0;
    left: 0;
  }
  
`

export{
  HomeFirstWrapper
}