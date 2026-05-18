import { useState } from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import events from "../data/events";

export default function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = events.filter(e => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || e.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>All Events</h1>

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option>All</option>
          <option>Tech</option>
          <option>Music</option>
          <option>Business</option>
        </select>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px"
        }}>
          {filtered.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}