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
          Create and share your photo stories.{" "}
        </h1>
        <p style={{ color: props.color }} className="heroParagraph">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
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
