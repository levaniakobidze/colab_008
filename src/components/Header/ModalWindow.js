import { Link } from "react-router-dom";

export default function ModalWindow(props) {
  return (
    <div
      className={`${props.clicked ? "modal-window dropdown" : "modal-window"}`}
    >
      <div className="modal-links">
        <Link to="stories">
          <button>STORIES</button>
        </Link>
        <Link to="features">
          <button>FEATURES</button>
        </Link>
        <Link to="pricing">
          <button>PRICING</button>
        </Link>
      </div>
      <div className="modal-invite">
        <p>GET AN INVITE</p>
      </div>
    </div>
  );
}
