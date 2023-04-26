import React from "react";
import "./PricingCalculator.css";
const PricingMenuComponent = (props) => {
  return (
    <div
      style={{ background: props.background, height: props.height }}
      className="pricingMenuContainer"
    >
      <img className="pricePurpleLine" src={props.pricePurpleLine} alt="" />
      <div className="pricingMenuInfo">
        <div style={{ color: props.color }} className="pricingMenuHeader">
          {props.title}
        </div>
        <p style={{ color: props.color }} className="pricingMenuParagraph">
          {props.paragraph}
        </p>
        <div style={{ color: props.color }} className="pricingMenuPrice">
          <div style={{ color: props.color }} className="price">
            {props.price}
          </div>
          <div className="permonth">per month</div>
        </div>
        <button
          style={{ background: props.color, color: props.background, }}
          className={`pricingMenuButton ${props.background === "black" ? "blackHover" : ''}`  }
        >
          PICK PLAN
        </button>
      </div>
      <div className="pricingRightSide">
        <div style={{ color: props.color }} className="price">
          {props.price}
        </div>
        <div style={{ color: props.color }} className="permonth">
          per month
        </div>
      </div>
    </div>
  );
};

export default PricingMenuComponent;
