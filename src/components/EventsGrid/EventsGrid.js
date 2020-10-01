import React from "react";
import "./eventsgrid.scss";
import EventsGridItem from "./EventsGridItem";

const EventsGrid = ({ events }) => {
  return (
    <div className="events-grid no-scroll-bars">
      {events.map((eventItem) => (
        <EventsGridItem key={eventItem.id} eventItem={eventItem} />
      ))}
    </div>
  );
};

export default EventsGrid;
