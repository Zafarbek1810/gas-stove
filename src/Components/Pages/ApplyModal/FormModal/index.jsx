import React from 'react';
import {FormModalWrapper} from "./FormModal.style";
import {useForm} from "react-hook-form";
import axios from "axios";
import {message} from "antd";
import UserSvg from "../../../Common/Svgs/UserSvg";
import PhoneSvg from "../../../Common/Svgs/PhoneSvg";
import MailSvg from "../../../Common/Svgs/MailSvg";
import MapSvg from "../../../Common/Svgs/MapSvg";

const FormModal = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {cdl, email, phoneNumber, message: Message} = data
    const formData = new FormData()
    formData.append("email", email)
    formData.append("phoneNumber", phoneNumber)
    formData.append("message", Message)
    formData.append("name", cdl[0])

    axios
      .post(local, formData)
      .then((res) => {
        console.log(res)
        message.success("Email has been send")
        reset()
      })
      .catch((err) => {
        message.error("Failed :(")
      })
  }

  return (
    <FormModalWrapper>
      <div className="left">
        <div className="left-side__inner">
          {/* ---------- TITLE --------- */}
          <div className="left-side__top">
            <h2 className="title">Get in Touch</h2>
            <p className="text">
              <em>Level up</em> your career, together
            </p>
          </div>
          {/* ---------- CONTACTS --------- */}
          <div className="left-side__center">
            <ul className="contacts-list">
              <li className="contacts-item">
                <a className="contacts-link" href="tel:1111111">
                <PhoneSvg/>
                  <span>+(998) 91 1111111</span>
                </a>
              </li>
              <li className="contacts-item mobileNone">
                <a className="contacts-link" href="mailto:zafarbekyoldoshev@gmail.com">
                <MailSvg/>
                  <span>email@gmail.com</span>
                </a>
              </li>
              <li className="contacts-item mobileNone">
                <div className="contacts-link">
                <MapSvg/>
                  <span>Toshkent sh, Yunusobod tumani</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <form onSubmit={handleSubmit(onSubmit)} className="right-side__form">
          {/* -------- NAME INPUT -------- */}
          <label className="label">
            <span className="label-name">Your email</span>
            <div className="input-wrapper">
              <UserSvg />
              <input
                {...register("email", { required: true, minLength: 2 })}
                type="email"
                placeholder="Input your email"
                id="modalEmailInput"
              />
            </div>
            {errors.email && (
              <span className="error-span">This field is required!</span>
            )}
          </label>

          {/* -------- PHONE NUMBER INPUT -------- */}
          <label className="label">
            <span className="label-name">Phone number</span>
            <div className="input-wrapper">
              <PhoneSvg/>
              <input
                {...register("phoneNumber", {
                  required: true,
                })}
                type="number"
                placeholder="+1234 5678 9012"
                id="modalEmailInput"
              />
            </div>
            {errors.phoneNumber && (
              <span className="error-span">This field is required!</span>
            )}
          </label>

          {/* -------- MESSAGE TEXTAREA -------- */}
          <label className="label">
            <span className="label-name">Message</span>
            <div>
              <textarea
                {...register("message", { required: false })}
                placeholder="Message"
                id="modalTextareaInput"
              />
            </div>
          </label>

          {/* -------- SUBMIT BUTTON -------- */}
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </FormModalWrapper>
  );
};

export default FormModal;