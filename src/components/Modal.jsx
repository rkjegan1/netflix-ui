function Modal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#111",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff"
      }}>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;