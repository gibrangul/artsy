import React, { useRef } from "react";
import "./eventsgrid.scss";
import EventsGridItem from "./EventsGridItem";
import useWindowSize from "../../utils/useWindowSize";

const EventsGrid = ({ events }) => {
  const size = useWindowSize();
  const eventsRef = useRef(null);
  if (eventsRef.current) {
    if (size.width > 1092) {
      document.querySelector(".events-grid").style.height = `${
        size.height - 150
      }px`;
    } else if (size.width < 1092 && size.width > 864) {
      document.querySelector(".events-grid").style.height = `${
        size.height - 216
      }px`;
    } else {
      document.querySelector(".events-grid").style.height = `unset`;
    }
  }

  return (
    <div ref={eventsRef} className="events-grid no-scroll-bars">
      {events.map((eventItem) => (
        <EventsGridItem key={eventItem.id} eventItem={eventItem} />
      ))}
    </div>
  );
};

export default EventsGrid;
