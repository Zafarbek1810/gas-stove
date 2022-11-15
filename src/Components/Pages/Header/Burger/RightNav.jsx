import { useRouter } from "next/router";
import React from "react";
import { RightNavWrapper } from "./RightNav.style";
import MyLink from "../../../Common/MyLink";

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
          <MyLink to="/news" className={router.pathname == "/news" ? "active" : "link"}>
            About Us
          </MyLink>
        </li>
        <li>
          <MyLink to="/news" className={router.pathname == "/news" ? "active" : "link"}>
            Categories
          </MyLink>
        </li>
        <li>
          <MyLink to="/news" className={router.pathname == "/news" ? "active" : "link"}>
            Calculation
          </MyLink>
        </li>
        <li>
          <MyLink to="/news" className={router.pathname == "/news" ? "active" : "link"}>
            Contact us
          </MyLink>
        </li>
      </ul>
      <MyLink to="/" className="btn">
        Quick CTA
      </MyLink>
    </RightNavWrapper>
  );
};

export default RightNav;
