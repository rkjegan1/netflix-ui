import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/auth";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");
    setIsSubmitting(true);

    try {
      await signUp(username, password);
      navigate("/", { state: { message: "Account created. Please sign in." } });
    } catch (signupError) {
      setError(signupError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "red" }}>SIGN UP</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSignup} style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? "Creating…" : "Create Account"}
        </button>
        {error && <p style={{ color: "#ff8585", marginTop: "12px", maxWidth: "280px" }}>{error}</p>}
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#000",
};

const cardStyle = {
  background: "rgba(0,0,0,0.7)",
  padding: "40px",
  borderRadius: "10px",
  color: "#fff",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "red",
  color: "#fff",
  border: "none",
};

export default Signup;
