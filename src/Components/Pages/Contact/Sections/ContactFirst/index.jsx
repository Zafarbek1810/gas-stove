import React from 'react';
import {ContactFirstWrapper} from "./ContactFirst.style";
import MapSvg from "../../../../Common/Svgs/MapSvg";
import PhoneSvg from "../../../../Common/Svgs/PhoneSvg";
import MailSvg from "../../../../Common/Svgs/MailSvg";
import {useForm} from "react-hook-form";
import Container from "../../../../Common/Container";
import UserSvg from "../../../../Common/Svgs/UserSvg";

const ContactFirst = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <ContactFirstWrapper>
      <Container>
        <div className="wrapper">
          <div className="top">
            <h3 className="title">Get in touch!</h3>
            <p className="subtitle">Contact us for a quote, help ot to join the team.</p>
            <div className="cards">
              <div className="card">
                <MapSvg/>
                102 street 2714
              </div>
              <div className="card">
                <PhoneSvg/>
                +998911111111
              </div>
              <div className="card">
                <MailSvg/>
                hello@gmail.com
              </div>
            </div>
          </div>

          <div className="bottom">
            <form >
              <div className="wrap">
                <div className="left">
                  {/* -------- NAME INPUT -------- */}
                  <label className="label">
                    <span className="label-name">Your Name</span>
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

                  {/* -------- Email INPUT -------- */}
                  <label className="label">
                    <span className="label-name">Your Email</span>
                    <div className="input-wrapper">
                      <MailSvg/>
                      <input
                        {...register("email", { required: true, minLength: 2 })}
                        type="email"
                        placeholder="Input your email"
                        id="modalEmailInput"
                      />
                      {/*<UserSvg className="svg"/>*/}
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
                </div>
                <div className="right">
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
                </div>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </ContactFirstWrapper>
  );
};

export default ContactFirst;