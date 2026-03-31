import { useNavigate } from "react-router-dom";

function Navbar({ myList }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LOGO */}
      <h2
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        NOTNETFLIX
      </h2>

      {/* MY LIST BUTTON */}
      <button
        onClick={() => navigate("/mylist")}
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.2)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.1)")
        }
      >
        My List ❤️ ({myList.length})
      </button>
    </div>
  );
}

export default Navbar;