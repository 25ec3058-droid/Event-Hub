import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#111", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/events" style={{ margin: "10px", color: "white" }}>Events</Link>
      <Link to="/calendar" style={{ margin: "10px", color: "white" }}>Calendar</Link>
      <Link to="/contact" style={{ margin: "10px", color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;