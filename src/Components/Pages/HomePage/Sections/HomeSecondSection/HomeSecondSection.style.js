import styled from "styled-components";

const HomeSecondWrapper=styled.div`
  padding: 50px 0;
  background: white;
  .card{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    user-select: none;
    img{
    height: 200px;
      
    }
    
    .subtitle{
      color: #757575;
    }
    
    .title{
        margin: 0 0 10px;
      a{
        font-size: 16px;
        text-transform: capitalize;
      }
    }
    
    .price{
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    button{
      background: #069e78;
      color: #fff;
      padding: 15px;
      text-transform: uppercase;
      font-size: 14px;
      border: none;
      border-radius: 10px;
      transition: 500ms;
      
      &:hover{
        background: #000;
        cursor: pointer;
      }
    }
  }
  
  .btnControl{
    text-align: center;
    
    button{
      background: #fff;
      border: none;
      border-radius: 50%;
      box-shadow: 0 1px 10px 3px rgb(0 0 0 / 10%);
      margin: 0 10px;
      padding: 8px 15px;
      cursor: pointer;
    }
  }
`

export{ HomeSecondWrapper }