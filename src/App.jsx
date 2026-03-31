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

  // 🔑 Get current user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const storageKey = currentUser
    ? `myList_${currentUser.username}`
    : null;

  // ✅ Load user-specific list
  useEffect(() => {
    if (storageKey) {
      const savedList = JSON.parse(localStorage.getItem(storageKey)) || [];
      setMyList(savedList);
    }
  }, [storageKey]);

  // ✅ Save user-specific list
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(myList));
    }
  }, [myList, storageKey]);

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
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
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