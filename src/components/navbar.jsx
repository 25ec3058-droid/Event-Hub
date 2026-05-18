import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const style = (path) => ({
    color: location.pathname === path ? "#60a5fa" : "white",
    textDecoration: "none",
    fontWeight: "bold"
  });

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "#111827",
      color: "white"
    }}>
      <h2>EventHub</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={style("/")}>Home</Link>
        <Link to="/events" style={style("/events")}>Events</Link>
        <Link to="/calendar" style={style("/calendar")}>Calendar</Link>
        <Link to="/contact" style={style("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}