import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/event/${event.id}`)}
      style={{
        width: "260px",
        margin: "15px",
        padding: "15px",
        borderRadius: "12px",
        background: "#f3f4f6",
        cursor: "pointer",
        transition: "0.2s"
      }}
    >
      <h3>{event.title}</h3>
      <p>📅 {event.date}</p>
      <p>📍 {event.location}</p>
      <small>{event.category}</small>
    </div>
  );
}