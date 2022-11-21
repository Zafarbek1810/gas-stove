import {useRouter} from "next/router";
import React, {useContext, useState} from "react";
import {RightNavWrapper} from "./RightNav.style";
import MyLink from "../../../Common/MyLink";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../../Context/ModalContext/Context";

const RightNav = ({open}) => {
    const router = useRouter();

    const setIsModalVisible = useContextSelector(
      ModalContext,
      (state) => state[1]
    )

    return (
      <RightNavWrapper open={open}>
        <ul>
          <li>
            <MyLink to="/" className={router.pathname == "/" ? "active" : "link"}>
              Home
            </MyLink>
          </li>
          <li>
            <MyLink to="/about" className={router.pathname == "/about" ? "active" : "link"}>
              About Us
            </MyLink>
          </li>
          <li>
            <MyLink to="/category" className={router.pathname == "/categories" ? "active" : "link"}>
              Categories
            </MyLink>
          </li>
          <li>
            <MyLink to="/calculation" className={router.pathname == "/calculation" ? "active" : "link"}>
              Calculation
            </MyLink>
          </li>
          <li>
            <MyLink to="/" className={router.pathname == "/contact" ? "active" : "link"}>
              Contact us
            </MyLink>
          </li>
        </ul>
        <button className="btn"
                onClick={() => {
                  setIsModalVisible(p => !p)
                }}>
          Get in Touch
        </button>
      </RightNavWrapper>
    );
  }
;

export default RightNav;
