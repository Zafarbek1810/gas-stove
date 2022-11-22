import React, {useEffect, useState} from "react";
import {NavbarStyle} from "./Header.style";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 150) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <NavbarStyle style={{boxShadow:" 0px 5px 10px 0px rgba(21, 21, 21, 0.15)"}}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: isFixed ? "5px" : "15px",
          paddingTop: isFixed ? "5px" : "15px",
          transition: "padding 0.3s ease",


        }}
      >
        <MyLink className="logo" to="/">
          <img src="images/logo.webp" alt=""/>
        </MyLink>
        <Burger/>
      </Container>
    </NavbarStyle>
  );
};

export default Navbar;
