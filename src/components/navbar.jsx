import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/events">Events</Link> |
      <Link to="/calendar">Calendar</Link> |
      <Link to="/contact">Contact</Link>
    </div>
  );
}