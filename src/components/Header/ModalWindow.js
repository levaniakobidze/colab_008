export default function ModalWindow(props) {
  return (
    <div
      className={`${props.clicked ? "modal-window dropdown" : "modal-window"}`}
    >
      <div className="modal-links">
        <button>STORIES</button>
        <button>FEATURES</button>
        <button>PRICING</button>
      </div>
      <div className="modal-invite">
        <p>GET AN INVITE</p>
      </div>
    </div>
  );
}
