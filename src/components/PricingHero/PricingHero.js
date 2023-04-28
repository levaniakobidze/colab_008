import React from "react";
import "./PricingHero.css";
import purpleLineForTablet from "../Hero/images/purpleLineForTables.svg";
import purpleLine from "../Hero/images/purpleline.svg";
import mobileHero from "../../assets/pricing/mobile/hero.jpg";
import tabletHero from "../../assets/pricing/tablet/hero.jpg";
import desktopHero from "../../assets/pricing/desktop/hero.jpg";

const PricingHero = () => {
  return (
    <div className="features-hero-container">
      <img className="camera-mobile" src={mobileHero} alt="camera"></img>
      <img className="camera-tablet" src={tabletHero} alt="camera"></img>

      <img className="camera-desktop" src={desktopHero} alt="camera"></img>

      <div className="features-text-box">
        <div className="color-line-container">
          <img
            className="color-line-tablet"
            src={purpleLineForTablet}
            alt="decor"
          ></img>
          <img className="color-line-mobile" src={purpleLine} alt="decor"></img>
        </div>
        <div>
          <h1 className="features-heading">PRICING</h1>
        </div>
        <div>
          <p className="features-paragraph">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
