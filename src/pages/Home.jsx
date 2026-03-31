import { useState } from "react";
import movies from "../data/movies";
import Navbar from "../components/Navbar";
import Row from "../components/Row";

function Home({ myList, onLike }) {
  const [selected, setSelected] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(0);

  const trending = movies.filter(
    (m) => m.category === "Trending" && m.rating >= ratingFilter
  );

  const action = movies.filter(
    (m) => m.category === "Action" && m.rating >= ratingFilter
  );

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
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
          }}
        />

        {/* text */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Welcome Back 
          </h1>
          <p style={{ color: "#aaa" }}>
            Continue watching your favorites
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
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <option value="0">All</option>
          <option value="8">8+</option>
          <option value="9">9+</option>
        </select>
      </div>

      {/* CONTENT */}
      <div style={{ marginTop: "20px" }}>
        <Row
          title="Trending"
          movies={trending}
          onSelect={setSelected}
          onLike={onLike}
        />

        <Row
          title="Action"
          movies={action}
          onSelect={setSelected}
          onLike={onLike}
        />
      </div>
    </div>
  );
}

export default Home;