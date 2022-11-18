import styled from "styled-components";

const CalcFirstWrapper=styled.div`
  padding: 30px 0;
  
  h2{
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .wrapper{
    display: flex;
    .left{
      width: 50%;
      border-right: 1px solid #eee;
      .res{
        margin-bottom: 30px;
        img{
          width: 90%;
        }
      }
      
      .price{
        h4{
          font-size: 24px;
          span{
            
          }
        }
      }
    }
    
    .right{
      padding-left: 30px;
      
      .checkboxGroup{
        
        .col{
          margin-bottom: 30px;
          
          .checkbox{
            font-size: 24px;
          }
        }
      }
    }
  }
`

export{ CalcFirstWrapper }