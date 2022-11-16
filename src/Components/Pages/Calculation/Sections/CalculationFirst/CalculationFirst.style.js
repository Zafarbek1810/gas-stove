import styled from "styled-components";

const FirstWrapper = styled.div`
  .tabs {
    width: 40%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;

    .btnText {
      span {
        color: #05141f;
        font-weight: 700;
        font-size: 15px;
      }
    }

    button.tab-item {
      padding: 20px 30px 20px;
      background: transparent;
      border: none;
      transition-duration: 300ms;
      position: relative;
      color: #9ba1a5;
      width: 100%;
      text-align: start;

      &:hover {
        color: #000;
        cursor: pointer;
      }

      &:after {
        display: none;
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 5px;
        background: #000;
      }
    }

    button.active {
      color: #000;
      font-weight: 600;
      font-size: 15px;

      &:hover {
        cursor: auto;
      }


      &:after {
        display: block;
        background: #5d7d2b;
      }
    }
  }

  .component {
    padding: 90px 0 150px;
  }
`

export {FirstWrapper}