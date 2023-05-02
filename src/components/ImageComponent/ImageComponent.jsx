import "./ImageComponent.css";
import line from "./Path 3.png";
import arrow from "./Path 4.png";
import rect from "./Rectangle.png";
export default function ImageComponent({ img, date, title, creator }) {
  return (
    <div className="img-comp-div">
      <img className="img-comp-main-img" src={img} alt="" />
      <img className="imagecomponent-rect" src={rect} alt=""></img>
      <div className="img-comp-absolute">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{creator}</p>
        <div className="line"></div>
        <div className="img-comp-readstory">
          <h3>READ STORY</h3>
          <div className="img-component-icon-wrapper">
            <img src={line} alt=""></img>
            <img className="img2" src={arrow} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
