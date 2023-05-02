import React from "react";
import "./FeaturesHero.css";
import purpleLineForTablet from "../Hero/images/purpleLineForTables.svg";
import purpleLine from "../Hero/images/purpleline.svg";
import mobileHero from "../../assets/features/mobile/hero.jpg";
import tabletHero from "../../assets/features/tablet/hero.jpg";
import desktopHero from "../../assets/features/desktop/hero.jpg";

const FeaturesHero = () => {
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
          <h1 className="features-heading">FEATURES</h1>
        </div>
        <div>
          <p className="features-paragraph">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
