import styled from "styled-components";

const NavbarStyle = styled.div`
 
  .logo {
    width: 25%;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;

    span {
      text-transform: uppercase;
      margin-left: 10px;
      width: 80%;
      font-size: 0.6875rem;
      line-height: 18px;
      font-family: "Montserrat";
      letter-spacing: 0.5px;
      font-weight: 600;
      margin-right: -50px;
    }
  }

  a, .link, .active, li {
    text-decoration: none !important;
    list-style: none !important;
  }

  @media (max-width: 992px) {
    width: 100%;
    position: fixed;
    z-index: 25;
    background: #f6f5f5;


  }

  @media (max-width: 700px) {
    .logo {
      width: 60%;

      span {
        width: 100% !important;
        font-size: 0.5rem;
      }
    }
  }
`



export {NavbarStyle}