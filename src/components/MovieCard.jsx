import { useState } from "react";

function MovieCard({ movie, onLike }) {
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

          <div className="movie-card-actions">
            <button
              className="movie-card-action movie-card-play"
              type="button"
              aria-label={`Play ${movie.title}`}
              onClick={() =>
                movie.link && window.open(movie.link, "_blank")
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.15 5.14a1 1 0 0 1 1.53-.85l8.18 6.86a1.1 1.1 0 0 1 0 1.7l-8.18 6.86A1 1 0 0 1 8.15 19V5.14Z" />
              </svg>
              <span>Play</span>
            </button>

            <button
              className="movie-card-action movie-card-like"
              type="button"
              aria-label={`Add ${movie.title} to My List`}
              onClick={() =>
                movie.likeLink
                  ? window.open(movie.likeLink, "_blank")
                  : onLike(movie)
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.25S4 15.1 4 9.48C4 6.96 5.86 5 8.26 5c1.5 0 2.94.76 3.74 2.02A4.52 4.52 0 0 1 15.74 5C18.14 5 20 6.96 20 9.48c0 5.62-8 10.77-8 10.77Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
