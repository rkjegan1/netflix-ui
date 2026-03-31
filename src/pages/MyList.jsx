import Navbar from "../components/Navbar";
import Row from "../components/Row";

function MyList({ myList, onLike }) {
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

      <h2 style={{ padding: "20px" }}>My List ❤️</h2>

      {myList.length === 0 ? (
        <p style={{ padding: "20px", color: "#aaa" }}>
          No movies added yet 😢
        </p>
      ) : (
        <Row title="Saved" movies={myList} onLike={onLike} />
      )}
    </div>
  );
}

export default MyList;