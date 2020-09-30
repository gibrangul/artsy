import React from "react";
import { useHistory } from "react-router-dom";
import "./artistcard.scss";
import likeIconRed from "../../images/like-icon-red.png";
import likeIconFilledRed from "../../images/like-icon-filled-red.png";

const ArtistCard = ({ artist, favorite }) => {
  const history = useHistory();
  return (
    <div className="artist-card">
      <img
        alt={artist.name}
        src={artist.image_url}
        className="shadow-default"
      />
      <div className="overlay flex-row flex-center">
        {favorite && (
          <button
            onClick={favorite.onClick}
            className="btn btn-white-outline btn-round-icon icon-72 mb-16"
            style={{
              backgroundImage: favorite.liked
                ? `url(${likeIconFilledRed})`
                : `url(${likeIconRed})`,
            }}
          />
        )}
      </div>

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
