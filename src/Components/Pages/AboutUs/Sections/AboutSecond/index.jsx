import React from 'react';
import Container from "../../../../Common/Container";
import {AboutSecondWrapper} from "./AboutSecond.style";

const data = [
  {
    title: "",
    span: "What is Lorem Ipsum? ",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    title: "Why do we use it?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    title: "Why do we use it?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    title: "Why do we use it?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
];

const AboutSecond = () => {
  return (
    <AboutSecondWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <div className="text">
              {data.map((v, i) => (
                <div key={i}>
                  <h5>{v.title}</h5>
                  <span>{v.span}</span>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <img src="/images/card3.jpg" alt="" />
          </div>
        </div>
      </Container>
    </AboutSecondWrapper>
  );
};

export default AboutSecond;