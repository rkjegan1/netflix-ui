import MovieCard from "./MovieCard";

function Row({ title, movies, onSelect, onLike }) {
  return (
    <div
      style={{
        marginBottom: "0",
        position: "relative", 
        zIndex: 1,
      }}
    >
      {/* Title */}
      <h3
        style={{
          color: "#fff",
          marginLeft: "20px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      {/* Scroll Container */}
      <div
        className="row-scroll"
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "visible", 
          gap: "20px",
          padding: "36px 20px 40px",
          scrollBehavior: "smooth",
        }}
      >
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}      
            onSelect={onSelect}
            onLike={onLike}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
