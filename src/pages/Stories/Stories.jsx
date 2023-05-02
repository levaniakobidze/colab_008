import "./Stories.css";
import { ImgComData } from "../../ImgCompData.jsx";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import StoriesHeader from "../../components/StoriesHeader/StoriesHeader";

export default function Stories() {
  return (
    <>
      <StoriesHeader />
      <div className="stories-flex">
        <div className="stories-grid">
          {ImgComData.map((item) => (
            <ImageComponent
              img={item.img}
              imgDesk={item.imgDesk}
              title={item.title}
              creator={item.creator}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}
