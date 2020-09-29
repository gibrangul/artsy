import React from "react";
import { useHistory } from "react-router-dom";
import "./artistcard.scss";

const ArtistCard = ({ artist }) => {
  const history = useHistory();
  return (
    <div className="artist-card">
      <img
        alt={artist.name}
        src={artist.image_url}
        className="shadow-default"
      />
      <div className="overlay" />
      <div className="artist-card-info">
        <div className="artist-card-info-text">
          <h2>{artist.name}</h2>
          <a
            href={artist.facebook_page_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Facebook Page
          </a>
        </div>
        <div className="artist-card-info-buttons">
          <button
            className="btn btn-large btn-primary-outline"
            onClick={() => history.push(`/${artist.name}/events`)}
          >
            {artist.upcoming_event_count} Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
