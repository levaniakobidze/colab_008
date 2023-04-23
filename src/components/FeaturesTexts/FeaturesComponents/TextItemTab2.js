import "./Features3.css";
import nolimit from "../../../assets/features/desktop/no-limit.svg";
import custom from "../../../assets/features/desktop/custom-domain.svg";
import drag from "../../../assets/features/desktop/drag-drop.svg";

export default function TextItem2() {
  return (
    <div className="items-container-3">
      <div className="features-cell">
        <img className="features-icon-2" src={nolimit} alt="icon"></img>
        <div>
          <h3>No Photo Upload Limit</h3>
          <p className="responsive-p">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
      </div>
      <div className="features-cell">
        <img className="features-icon" src={custom} alt="icon"></img>
        <div>
          <h3>Custom Domain</h3>
          <p className="nolimit-p">
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
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
