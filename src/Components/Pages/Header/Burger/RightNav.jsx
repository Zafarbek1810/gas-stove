import { useRouter } from "next/router";
import React from "react";
import { RightNavWrapper } from "./RightNav.style";
import MyLink from "../../../Common/MyLink";
import MyButton from "../../../Common/MyButton";

const RightNav = ({ open }) => {
  const router = useRouter();
  return (
    <RightNavWrapper open={open}>
      <ul>
        <li>
          <MyLink  to="/" className={router.pathname == "/" ? "active" : "link"}>
            Home
          </MyLink>
        </li>
        <li>
          <MyLink to="/" className={router.pathname == "/news" ? "active" : "link"}>
            About Us
          </MyLink>
        </li>
        <li>
          <MyLink to="/" className={router.pathname == "/news" ? "active" : "link"}>
            Categories
          </MyLink>
        </li>
        <li>
          <MyLink to="/" className={router.pathname == "/news" ? "active" : "link"}>
            Calculation
          </MyLink>
        </li>
        <li>
          <MyLink to="/" className={router.pathname == "/news" ? "active" : "link"}>
            Contact us
          </MyLink>
        </li>
      </ul>
      <MyButton to="/" className="btn">
        Quick CTA
      </MyButton>
    </RightNavWrapper>
  );
};

export default RightNav;
