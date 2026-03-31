import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Row from "../components/Row";

function MyList({ myList, onLike }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#fff",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,0,0,0.15), transparent 40%),
          linear-gradient(to bottom, #0f0f0f, #000)
        `,
      }}
    >
      <Navbar myList={myList} />

      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "8px 14px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <h2 style={{ margin: 0 }}>My List ❤️</h2>

        <div style={{ width: "60px" }} /> {/* spacer */}
      </div>

      {/* CONTENT */}
      {myList.length === 0 ? (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <p style={{ color: "#aaa", fontSize: "18px" }}>
            No movies added yet 😢
          </p>
          <button
            onClick={() => navigate("/home")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "linear-gradient(90deg, #ff0000, #e50914)",
              border: "none",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Browse Movies
          </button>
        </div>
      ) : (
        <Row title="Saved" movies={myList} onLike={onLike} />
      )}
    </div>
  );
}

export default MyList;