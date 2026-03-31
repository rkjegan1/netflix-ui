import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MyList from "./pages/MyList";

// 🔐 Protected Route
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("currentUser");
  return user ? children : <Navigate to="/" />;
}

function App() {
  const [myList, setMyList] = useState([]);

  // ✅ Load saved list from localStorage
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedList);
  }, []);

  // ✅ Save list whenever it changes
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const toggleList = (movie) => {
    if (myList.find((m) => m.id === movie.id)) {
      setMyList(myList.filter((m) => m.id !== movie.id));
    } else {
      setMyList([...myList, movie]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home myList={myList} onLike={toggleList} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mylist"
          element={
            <ProtectedRoute>
              <MyList myList={myList} onLike={toggleList} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;