import { useState } from "react";

function MovieCard({ movie, onSelect, onLike }) {
  const [hover, setHover] = useState(false);

  if (!movie) return null;

  return (
    <div
      style={{
        width: "200px",
        position: "relative",
        flex: "0 0 auto",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          background: "#111",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
          transform: hover ? "scale(1.2)" : "scale(1)",
          transition: "all 0.3s ease",
          zIndex: hover ? 50 : 1,
          boxShadow: hover
            ? "0 25px 60px rgba(0,0,0,0.9)"
            : "0 5px 15px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            display: "block",
            filter: hover ? "brightness(0.7)" : "brightness(1)",
            transition: "0.3s",
          }}
          onClick={() => movie.link && window.open(movie.link, "_blank")}
        />

        <div
          style={{
            padding: hover ? "10px" : "0px",
            maxHeight: hover ? "120px" : "0px",
            opacity: hover ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.3s ease",
            background: "#111",
          }}
        >
          <h3
            style={{
              color: "#fff",
              margin: "5px 0",
              fontSize: "16px",
            }}
          >
            {movie.title}  ⭐ {movie.rating}
          </h3>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                background: "#7b0505",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() =>
                movie.link && window.open(movie.link, "_blank")
              }
            >
               ▶ 
            </button>

            <button
              style={{
                background: "#7b0505",
                color: "#fff",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() =>
                movie.likeLink
                  ? window.open(movie.likeLink, "_blank")
                  : onLike(movie)
              }
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;