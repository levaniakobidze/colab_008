import React from "react";
import "./PricingCalculator.css";
const PricingMenuComponent = (props) => {
  return (
    <div
      style={{ background: props.background, height: props.height }}
      className="pricingMenuContainer"
    >
      <div className="pricingMenuInfo">
        <div className="pricingMenuHeader">{props.title}</div>
        <p style={{ color: props.color }} className="pricingMenuParagraph">
          {props.paragraph}
        </p>
        <div className="pricingMenuPrice">
          <div className="price">{props.price}</div>
          <div className="permonth">per month</div>
        </div>
        <button className="pricingMenuButton">PICK PLAN</button>
      </div>
      <div className="pricingRightSide">
        <div className="price">{props.price}</div>
        <div className="permonth">per month</div>
      </div>
    </div>
  );
};

export default PricingMenuComponent;
