import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Lorem ipsum" },
  { id: "e2", title: "Lorem Ipsum random" },
];

function EventPage() {
  return (
    <>
      <h1>Event Page !</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventPage;
