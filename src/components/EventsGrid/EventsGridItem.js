import moment from "moment";
import React from "react";
import googleMapLink from "../../apis/googleMapLink";
import { dateSuperScript } from "../../utils/general";
import NewTabLink from "../NewTabLink";

const EventsGridItem = ({ eventItem }) => {
  const { datetime, venue, url } = eventItem;
  const eventDate = moment(datetime);
  const day = eventDate.format("DD");
  const month = eventDate.format("MMMM");
  const year = eventDate.format("YYYY");
  return (
    <div className="events-grid_item mb-24 bg-100">
      <div className="pv-12 ph-16 mb-12">
        <div className="flex-row flex-align-center">
          <div className="icon-24 mr-12 calendar-icon" />
          <h1 className="semi-bold">
            {day}
            <sup className="normal-font">{dateSuperScript(day)}</sup>
          </h1>
          <div className="divider ml-16 mr-16" />
          <div className="flex-column">
            <p className="bold mb-4">{month}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
      <div className="flex-row ph-16 mb-16">
        <div className="icon-24 mr-12 location-icon mt-8" />
        <div className="flex-column flex-1 flex-truncate">
          <div className="flex-column flex-align-start mb-8">
            <p className="bold mb-2">Event Location</p>
            <NewTabLink
              name="googleMapsLink"
              url={googleMapLink(venue.latitude, venue.longitude)}
              className="btn btn-link"
            >
              View On Google Maps
            </NewTabLink>
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
      <NewTabLink url={url} name="bookingLink">
        <button className="btn bg-100 btn-hover-primary">Book Now</button>
      </NewTabLink>
    </div>
  );
};

export default EventsGridItem;
