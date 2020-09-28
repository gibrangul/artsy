import React from "react";
import "./artistgrid.scss";

const ArtistGrid = ({ title, headerAction, data, artistClick }) => {
  return (
    <div className="artist-grid">
      <div className="artist-grid_header">
        <h3>{title}</h3>
        <button onClick={headerAction} className="btn btn-link">
          See More
        </button>
      </div>
      <div className="artist-grid_list">
        {data.map((artist) => (
          <div
            key={artist.id}
            onClick={() => artistClick(artist)}
            className="artist-grid_list_item"
          >
            <img
              alt={artist.name}
              src={artist.thumb_url}
              className="shadow-default"
            />
            <div className="artist-grid_list_item_info">
              <p className="artist-grid_list_item_info_name">{artist.name}</p>
              <p className="artist-grid_list_item_info_events">
                {artist.upcoming_event_count} Events
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;
