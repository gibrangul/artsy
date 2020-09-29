import moment from "moment";
import React from "react";
import googleMapLink from "../../apis/googleMapLink";
import locationIcon from "../../images/location-icon.png";
import "./eventsgrid.scss";

const EventsGrid = ({ events }) => {
  return (
    <div className="events-grid no-scroll-bars">
      {events.map(({ datetime, venue, url }) => {
        const eventDate = moment(datetime);
        const day = eventDate.format("DD");
        const month = eventDate.format("MMMM");
        const year = eventDate.format("YYYY");
        return (
          <div className="events-grid_item">
            <div className="events-grid_item_header">
              <div className="events-grid_item_header_date">
                <h1>{day}</h1>
                <div className="flex-column">
                  <p>{month}</p>
                  <p>{year}</p>
                </div>
              </div>
            </div>
            <div className="events-grid_item_content mb-16">
              <img src={locationIcon} alt="location" />
              <div className="flex-column flex-1 flex-truncate">
                <div className="flex-column flex-align-start mb-8">
                  <p className="bold mb-2">Event Location</p>
                  <a
                    href={googleMapLink(venue.latitude, venue.longitude)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link"
                  >
                    View On Google Maps
                  </a>
                </div>
                <div className="flex-row mb-8">
                  <div className="flex-column flex-1 flex-truncate">
                    <p className="bold mb-2">Country</p>
                    <p className="truncate">{venue.country}</p>
                  </div>
                  <div className="flex-column flex-1 flex-truncate">
                    <p className="bold mb-2">City</p>
                    <p className="truncate">{venue.city}</p>
                  </div>
                </div>
                <div className="flex-column">
                  <p className="bold mb-2">Venue</p>
                  <p className="truncate">{venue.name}</p>
                </div>
              </div>
            </div>
            <a href={`${url}`} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary flex-1">Book Now</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default EventsGrid;
