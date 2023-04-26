import React from "react";
import "./Hero.css";

import purpleLine from './images/purpleline.svg'
const Hero = (props) => {
  return (
    <div
      style={{ background: props.background, flexDirection: props.direction }}
      className="heroContainer"
    >
      
    
       
       <img className="heroImgInner" src={props.img} alt="" />
       <div className="purpleLineContainer">
       <img style={{display:props.lineOff}} className="purpleLine" src={purpleLine} alt=""/>
       </div>
       <div className="heroTextContainer">
      <div className="heroText">
        <h1 style={{ color: props.color }} className="heroHeader">
          {props.header}
        </h1>
        <p style={{ color: props.color }} className="heroParagraph">
         {props.paragraph}
        </p>
        <div className="heroArrowContainer">
          <div className="" style={{ color: props.color }}>
            GET AN INVITE <svg className="svg" width="42" height="14" viewBox="0 0 42 14" fill={props.fill}xmlns="http://www.w3.org/2000/svg">
<path d="M0 7H41.864" stroke={props.fill}/>
<path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white"/>
</svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
