import styled from "styled-components";

const AboutSecondWrapper=styled.div`
  height: auto;
  padding: 50px 0;

  .wrapper {
    display: flex;

    .right {
      width: 50%;

      img {
        width: 100%;
        height: 450px;
        border-radius: 15px;
      }
    }

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;

      .text {
        padding-right: 30px;

        h5 {
          font-size: 16px;
          margin-top: 15px;
        }

        ul {
          li {
            list-style: disc;
          }
        }

        span:nth-child(3) {
          color: #555;
          font-size: 16px;
          line-height: 1.5;
        }

        span:nth-child(2) {
          color: #555;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 800;
        }
      }


    }
  }

  @media (max-width: 767px) {
    .wrapper {
      flex-wrap: wrap;
    }

    .right {
      width: 100% !important;
      margin: auto;

    }

    .left {
      width: 100% !important;
      margin: auto;
      margin-bottom: 30px;
    }
  }

`

export{ AboutSecondWrapper}