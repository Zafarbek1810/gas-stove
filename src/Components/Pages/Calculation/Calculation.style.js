import styled from "styled-components";

const CalculationWrapper=styled.div`
  position: relative;
  height: 100vh;

  .btns {
    position: fixed;
    bottom: 0;
    right: 10%;
    z-index: 3;

    .prev {
      background: #fff;
      color: #000;
      padding: 15px 40px;
      border:none;

      &:hover {
        background: rgba(0, 0, 0, 0.9);
        color: #fff;
        text-decoration: underline;
        border-color: rgba(0, 0, 0, 0.9);
      }
    }

    .next {
      background: #000;
      color: #fff;
      padding: 15px 40px;
      border:none;

      &:hover {
        background: rgba(0, 0, 0, 0.9);
        text-decoration: underline;
      }
    }
  }

`

export { CalculationWrapper }