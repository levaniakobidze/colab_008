import "./Features3.css";
import responsive from "../../../assets/features/desktop/responsive.svg";
import embed from "../../../assets/features/desktop/embed.svg";
import boost from "../../../assets/features/desktop/boost-exposure.svg";

export default function TextItemTab() {
  return (
    <div className="items-container-3">
      <div className="features-cell">
        <img className="features-icon" src={responsive} alt="icon"></img>
        <div>
          <h3>100% Responsive</h3>
          <p className="responsive-p">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>
      <div className="features-cell">
        <img className="features-icon" src={embed} alt="icon"></img>
        <div>
          <h3>Available to Embed</h3>
          <p className="embed-p">
            Embed Tweets, Facebook posts, Instagram <br></br> media, Vimeo or
            YouTube videos, Google Maps, and more.
          </p>
        </div>
      </div>
      <div className="features-cell">
        <img className="features-icon" src={boost} alt="icon"></img>
        <div>
          <h3>Boost Your Exposure</h3>
          <p className="embed-p">
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
      </div>
    </div>
  );
}
