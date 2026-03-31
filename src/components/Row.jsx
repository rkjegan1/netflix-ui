import MovieCard from "./MovieCard";

function Row({ title, movies, onSelect, onLike }) {
  return (
    <div
      style={{
        marginBottom: "10px",
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
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "visible", 
          gap: "20px",
          padding: "60px 20px", 
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