import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import { hasSession } from "./api/auth";

// 🔐 Protected Route
function ProtectedRoute({ children }) {
  return hasSession() ? children : <Navigate to="/" replace />;
}

function App() {
  const [myList, setMyList] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return [];
    return JSON.parse(localStorage.getItem(`myList_${currentUser.username}`)) || [];
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const storageKey = currentUser ? `myList_${currentUser.username}` : null;

  const loadUserList = (user) => {
    const savedList = JSON.parse(localStorage.getItem(`myList_${user.username}`)) || [];
    setMyList(savedList);
  };

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
        <Route path="/" element={<Login onAuthenticated={loadUserList} />} />
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
