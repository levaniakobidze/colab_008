import { Link } from "react-router-dom";

export default function ModalWindow(props) {
  return (
    <div
      className={`${props.clicked ? "modal-window dropdown" : "modal-window"}`}
    >
      <div className="modal-links">
        <Link to="stories">
          <button onClick={() => props.setClicked(false)}>STORIES</button>
        </Link>
        <Link to="features">
          <button onClick={() => props.setClicked(false)}>FEATURES</button>
        </Link>
        <Link to="pricing">
          <button onClick={() => props.setClicked(false)}>PRICING</button>
        </Link>
      </div>
      <div className="modal-invite">
        <p>GET AN INVITE</p>
      </div>
    </div>
  );
}
