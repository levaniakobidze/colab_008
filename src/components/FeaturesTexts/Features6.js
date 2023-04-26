import responsive from "../../assets/features/desktop/responsive.svg";
import embed from "../../assets/features/desktop/embed.svg";
import boost from "../../assets/features/desktop/boost-exposure.svg";
import custom from "../../assets/features/desktop/custom-domain.svg";
import drag from "../../assets/features/desktop/drag-drop.svg";
import nolimit from "../../assets/features/desktop/no-limit.svg";
import "./Features3.css";

export default function Features6() {
  return (
    <div className="features-container-6">
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
      <div className="features-cell">
        <img className="features-icon" src={custom} alt="icon"></img>
        <div>
          <h3>Custom Domain</h3>
          <p>
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
      </div>
      <div className="features-cell">
        <img className="features-icon" src={boost} alt="icon"></img>
        <div>
          <h3>Boost Your Exposure</h3>
          <p className="nolimit-p">
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
      </div>
      <div className="features-cell">
        <img className="features-icon" src={drag} alt="icon"></img>
        <div>
          <h3>Drag & Drop Image</h3>
          <p className="embed-p">
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
        </div>
      </div>
    </div>
  );
}
