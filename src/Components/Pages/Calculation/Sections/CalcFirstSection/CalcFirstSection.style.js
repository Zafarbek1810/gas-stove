import styled from "styled-components";

const CalcFirstWrapper=styled.div`
  padding: 30px 0;
  background: white;
  
  h2{
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .wrapper{
    display: flex;
    .left{
      user-select: none;
      width: 50%;
      border-right: 3px solid #eee;
      .res{
        margin-bottom: 30px;
        img{
          width: 90%;
          height: 300px;
          object-fit: cover;
        }
      }
      
      .price{
        h4{
          font-size: 24px;
          user-select: none;
          span{
            
          }
        }
      }
    }
    
    .right{
      width: 50%;
      padding-left: 30px;
      user-select: none;
      
      .checkboxGroup{
        
        .col{
          margin-bottom: 30px;
          
          .checkbox{
            font-size: 16px;
          }
        }
      }
    }
  }
`

export{ CalcFirstWrapper }