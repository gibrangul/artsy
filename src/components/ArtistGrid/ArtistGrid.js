import React from "react";
import "./artistgrid.scss";
import ArtistGridItem from "./ArtistGridItem";

const ArtistGrid = ({
  title,
  actionTitle,
  headerAction,
  data,
  artistClick,
  showMessage,
}) => {
  if (data.length === 0) {
    if (showMessage) {
      return (
        <div
          className="artist-grid bg-100 flex-center"
          style={{ maxHeight: "30px" }}
        >
          <h3>Your {title} will appear here</h3>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div className="artist-grid bg-100">
        <div className="artist-grid_header">
          <h3>{title}</h3>
          <button onClick={headerAction} className="btn btn-link">
            {actionTitle}
          </button>
        </div>
        <div className="artist-grid_list">
          {data.map((artist) => (
            <ArtistGridItem
              key={artist.id}
              artist={artist}
              onClick={() => artistClick(artist)}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ArtistGrid;
