import "./Footer.css";
import triangle from "./triangle.png";
import twitter from "./twitter.png";
import pinterest from "./pinterest.png";
import facebook from "./facebook.png";
import inst from "./instagram.png";
import youtube from "./youtube.png";
import line from "./line.png";
import arrow from "./arrow.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <img src={triangle}></img>
          <h2>PHOTOSNAP</h2>
        </div>
        <div className="icon-div">
          <img src={facebook}></img>
          <img src={youtube}></img>
          <img src={twitter}></img>
          <img src={pinterest}></img>
          <img src={inst}></img>
        </div>
        <ul>
          <li>HOME</li>
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="get-invite">
          <h3>GET AN INVITE</h3>
          <img src={line}></img>
          <img className="arrow" src={arrow}></img>
        </div>
        <p className="footer-p">Copyright 2019. All Rights Reserved</p>
      </div>

      <div className="tablet-footer">
        <div className="wrapper">
          <div className="tablet-h2">
            <img src={triangle}></img>
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
            <img src={line}></img>
            <img className="arrow" src={arrow}></img>
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
            <img src={facebook}></img>
            <img src={youtube}></img>
            <img src={twitter}></img>
            <img src={pinterest}></img>
            <img src={inst}></img>
          </div>

          <p className="footer-p">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
