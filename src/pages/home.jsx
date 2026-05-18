import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import events from "../data/events";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", padding: "60px" }}>
        <h1>Discover Amazing Events</h1>
        <p>Find tech, music & business events near you</p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {events.slice(0, 3).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}