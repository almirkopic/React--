import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function Events() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default Events;