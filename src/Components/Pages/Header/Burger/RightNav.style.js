import styled from "styled-components";

const RightNavWrapper = styled.div`
  list-style: none;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;

  ul {
    display: flex;
    padding-left: 30px;
    margin-bottom: 0;
  }

  li {
    padding: 10px 0 10px 20px;
    width: auto;
    display: inline-block;

    .active {
      display: block;
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
      color: #000000;
      text-decoration: none;
      list-style: none;
      position: relative;
      
    }

    .link {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 20px;
      color: #000000;
      text-decoration: none;
      list-style: none;
      cursor: pointer;
      position: relative;

    }

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

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 350px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    justify-content: start;

    ul {
      display: flex;
      flex-direction: column;
      text-align: end;
    }

    li {
      color: #000 !important;

      .link {
        color: #000 !important;
        font-size: 1rem;
        font-weight: 400;
      }

      svg {
        fill: #000;
      }

      .bottom {
        padding: 10px;

        .link {
          color: #000 !important;
        }
      }

      .active {
        color: #000;
        font-weight: 600;
      }
    }

    .btn {
      display: none;
    }
  }
`;

export {RightNavWrapper};
