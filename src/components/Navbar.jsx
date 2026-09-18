import { useNavigate } from "react-router-dom";
import { signOut } from "../api/auth";

function Navbar({ myList }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
    } finally {
      navigate("/", { replace: true });
    }
  };

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

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
        <button
          type="button"
          onClick={handleSignOut}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ddd",
            padding: "8px 12px",
            borderRadius: "20px",
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
