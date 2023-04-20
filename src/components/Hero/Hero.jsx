import React from "react";
import "./Hero.css";
import heroImg from "./Bitmap.svg";
import arrow from "./arrow.svg";
const Hero = (props) => {
  return (
    <div
      style={{ background: props.background, flexDirection: props.direction }}
      className="heroContainer"
    >
      <div className="heroImg">
        <img className="heroImgInner" src={heroImg} alt="" />
      </div>
      <div className="heroText">
        <h1 style={{ color: props.color }} className="heroHeader">
          {props.header}
        </h1>
        <p style={{ color: props.color }} className="heroParagraph">
         {props.paragraph}
        </p>
        <div className="heroArrowContainer">
          <div className="" style={{ color: props.color }}>
            GET AN INVITE <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
