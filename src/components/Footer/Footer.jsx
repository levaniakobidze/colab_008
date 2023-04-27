import triangle from "./triangle.png";
import twitter from "./twitter.png";
import pinterest from "./pinterest.png";
import facebook from "./facebook.png";
import inst from "./instagram.png";
import youtube from "./youtube.png";
import line from "./line.png";
import arrow from "./arrow.png";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <img src={triangle} alt="icon"></img>
          <h2>PHOTOSNAP</h2>
        </div>
        <div className="icon-div">
          <img src={facebook} alt="icon"></img>
          <img src={youtube} alt="icon"></img>
          <img src={twitter} alt="icon"></img>
          <img src={pinterest} alt="icon"></img>
          <img src={inst} alt="icon"></img>
        </div>
        <ul>
          <li>HOME</li>
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="get-invite">
          <h3>GET AN INVITE</h3>
          <img src={line} alt="icon"></img>
          <img className="arrow" src={arrow} alt="icon"></img>
        </div>
        <p className="footer-p">Copyright 2019. All Rights Reserved</p>
      </div>

      <div className="tablet-footer">
        <div className="wrapper">
          <div className="tablet-h2">
            <img src={triangle} alt="icon"></img>
            <h2>PHOTOSNAP</h2>
            <ul className="desktop-ul">
              <li>HOME</li>
              <li>STORIES</li>
              <li>FEATURES</li>
              <li>PRICING</li>
            </ul>
          </div>

          <div className="get-invite-tablet">
            <h3>GET AN INVITE</h3>
            <img src={line} alt="icon"></img>
            <img className="arrow" src={arrow} alt="icon"></img>
          </div>
        </div>
        <ul className="tablet-ul">
          <li>HOME</li>
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="wrapper2">
          <div className="icon-div-tablet">
            <img src={facebook} alt="icon"></img>
            <img src={youtube} alt="icon"></img>
            <img src={twitter} alt="icon"></img>
            <img src={pinterest} alt="icon"></img>
            <img src={inst} alt="icon"></img>
          </div>

          <p className="footer-p">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
