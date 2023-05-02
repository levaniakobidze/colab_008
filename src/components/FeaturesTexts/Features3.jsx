import "./Features3.css";
import responsive from "../../assets/features/desktop/responsive.svg";
import nolimit from "../../assets/features/desktop/no-limit.svg";
import embed from "../../assets/features/desktop/embed.svg";

export default function Features3() {
  return (
    <div className="features-container-3">
      <div className="items-container-3">
        <div className="features-cell">
          <img className="features-icon" src={responsive} alt="icon"></img>
          <div>
            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>
        <div className="features-cell">
          <img className="features-icon-2" src={nolimit} alt="icon"></img>
          <div>
            <h3>No Photo Upload Limit</h3>
            <p className="nolimit-p">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
        </div>
        <div className="features-cell embed-cell">
          <img className="features-icon" src={embed} alt="icon"></img>
          <div>
            <h3 className="embed-h3">Available to Embed</h3>
            <p className="embed-p">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
