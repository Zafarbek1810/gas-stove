import React from "react";
import { NavbarStyle } from "./Header.style";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";

const Navbar = () => {

  return (
    <NavbarStyle>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MyLink className="logo" to="/">
          <img src="images/logo.webp" alt=""/>
        </MyLink>
        <Burger />
      </Container>
    </NavbarStyle>
  );
};

export default Navbar;
