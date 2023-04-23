import "./Features3.css";
import custom from "../../../assets/features/desktop/custom-domain.svg";
import boost from "../../../assets/features/desktop/boost-exposure.svg";
import drag from "../../../assets/features/desktop/drag-drop.svg";

export default function TextItem2() {
  return (
    <div className="items-container-3">
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
