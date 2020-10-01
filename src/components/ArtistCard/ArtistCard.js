import React from "react";
import { useHistory } from "react-router-dom";
import NewTabLink from "../NewTabLink";
import likeIconFilledRed from "../../images/like-icon-filled-red.png";
import likeIconRed from "../../images/like-icon-red.png";
import "./artistcard.scss";

const ArtistCard = ({ artist, favorite }) => {
  const history = useHistory();

  const {
    error,
    name,
    image_url,
    upcoming_event_count: count,
    facebook_page_url: facebook,
  } = artist;

  const eventText =
    count > 0 ? `${count} Event${count > 1 && "s"}` : "No Events";

  const renderError = () => {
    return (
      <div className="artist-card flex-row flex-center">
        {error} Please Try again.
      </div>
    );
  };

  if (error) {
    return renderError();
  } else {
    return (
      <div className="artist-card">
        <img alt={name} src={image_url} className="shadow-default" />
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
            <h2>{name}</h2>
            {facebook && (
              <NewTabLink name="facebookLink" url={facebook}>
                Go to Facebook Page
              </NewTabLink>
            )}
          </div>
          <div className="artist-card-info-buttons">
            <button
              className="btn btn-large btn-primary-outline"
              onClick={() => history.push(`/${name}/events`)}
            >
              {eventText}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ArtistCard;
