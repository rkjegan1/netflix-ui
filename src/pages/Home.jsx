import { useEffect, useState } from "react";
import fallbackMovies from "../data/movies";
import Navbar from "../components/Navbar";
import Row from "../components/Row";

function Home({ myList, onLike }) {
  const [ratingFilter, setRatingFilter] = useState(0);
  const [movieRows, setMovieRows] = useState([]);
  const [catalogueMessage, setCatalogueMessage] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    let isActive = true;

    fetch("/api/movies")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Unable to load the catalogue.");
        return data.categories;
      })
      .then((categories) => {
        if (isActive) setMovieRows(categories);
      })
      .catch((error) => {
        if (!isActive) return;
        const categories = Object.entries(
          fallbackMovies.reduce((rows, movie) => {
            rows[movie.category] = [...(rows[movie.category] || []), movie];
            return rows;
          }, {}),
        ).map(([title, movies]) => ({ title, movies }));
        setMovieRows(categories);
        setCatalogueMessage(`${error.message} Showing the local collection instead.`);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="cosmic-page"
      style={{
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* NAVBAR */}
      <Navbar myList={myList} />

      {/* HERO SECTION */}
      <div
        style={{
          height: "60vh",
          backgroundImage:
            "url('https://mustafaselman.github.io/001-netflix-surveyform/background_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
          }}
        />

        {/* Text */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Welcome Back {currentUser?.username} 
          </h1>
          <p style={{ color: "#aaa" }}>
            Explore movies across categories
          </p>
        </div>
      </div>

      {/* FILTER */}
      <div style={{ padding: "20px" }}>
        Filter Rating:
        <select
          onChange={(e) => setRatingFilter(Number(e.target.value))}
          style={{
            marginLeft: "10px",
            padding: "6px 10px",
            borderRadius: "6px",
            background: "#222",
            color: "#fff",
            border: "1px solid #444",
          }}
        >
          <option value="0">All</option>
          <option value="8">8+</option>
          <option value="9">9+</option>
        </select>
        {catalogueMessage && (
          <p style={{ color: "#d7c5ff", fontSize: "13px", marginTop: "10px" }}>
            {catalogueMessage}
          </p>
        )}
      </div>

      {/* 🔥 DYNAMIC CATEGORY ROWS */}
      <div style={{ marginTop: "10px" }}>
        {movieRows.map((row) => {
          const filteredMovies = row.movies.filter(
            (movie) => movie.rating >= ratingFilter
          );

          if (filteredMovies.length === 0) return null;

          return (
            <Row
              key={row.title}
              title={row.title}
              movies={filteredMovies}
              onLike={onLike}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
