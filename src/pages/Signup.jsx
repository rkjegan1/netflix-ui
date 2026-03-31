import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.username === username);

    if (userExists) {
      alert("User already exists");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created!");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "red" }}>SIGN UP</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSignup} style={buttonStyle}>
          Create Account
        </button>
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