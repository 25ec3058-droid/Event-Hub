import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import events from "../data/events";

export default function EventDetails() {
  const { id } = useParams();

  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <h2>Event not found</h2>;

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", padding: "60px" }}>
        <h1>{event.title}</h1>
        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>
        <p>🏷️ {event.category}</p>

        <button style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}>
          Register Now
        </button>
      </div>
    </div>
  );
}