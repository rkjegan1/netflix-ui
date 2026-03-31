import { useState } from "react";
import movies from "../data/movies";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
console.log([...new Set(movies.map(m => m.category))]);
function Home({ myList, onLike }) {
  const [ratingFilter, setRatingFilter] = useState(0);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // 🔥 Get all unique categories dynamically
  const categories = [...new Set(movies.map((m) => m.category))];

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#fff",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,0,0,0.15), transparent 40%),
          radial-gradient(circle at 80% 0%, rgba(104,16,237,0.15), transparent 40%),
          radial-gradient(circle at bottom, rgba(62, 2, 87, 0.25), transparent 60%),
          linear-gradient(to bottom, #0f0f0f, #000)
        `,
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
            Welcome Back {currentUser?.username} 👋
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
      </div>

      {/* 🔥 DYNAMIC CATEGORY ROWS */}
      <div style={{ marginTop: "10px" }}>
        {categories.map((category) => {
          const filteredMovies = movies.filter(
            (m) => m.category === category && m.rating >= ratingFilter
          );

          if (filteredMovies.length === 0) return null;

          return (
            <Row
              key={category}
              title={category}
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