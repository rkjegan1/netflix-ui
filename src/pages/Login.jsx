import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "jegan" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://raw.githubusercontent.com/rkjegan1/my-website-assets/main/6613bfe1-5daa-453f-98cc-51a5955ec2af.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.7)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            borderRadius: "12px",
            width: "320px",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 8px 40px rgba(0,0,0,0.8)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 12px 60px rgba(255,0,0,0.4)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 8px 40px rgba(0,0,0,0.8)")
          }
        >
          <h2
            style={{
              color: "red",
              marginBottom: "20px",
              letterSpacing: "2px",
            }}
          >
            NOTNETFLIX
          </h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "none",
              background: "#333",
              color: "#fff",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "none",
              background: "#333",
              color: "#fff",
              outline: "none",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(90deg, #ff0000, #e50914)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #ff1a1a, #ff0000)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #ff0000, #e50914)")
            }
          >
            Sign In
          </button>

          <p
            style={{
              marginTop: "15px",
              fontSize: "12px",
              color: "#aaa",
            }}
          >
            Don't have an account? Sign up now.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;