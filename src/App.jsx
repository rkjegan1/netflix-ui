import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyList from "./pages/MyList";

function App() {
  const [myList, setMyList] = useState([]);

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
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <Home
              myList={myList}
              onLike={toggleList}
            />
          }
        />

        <Route
          path="/mylist"
          element={
            <MyList
              myList={myList}
              onLike={toggleList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;