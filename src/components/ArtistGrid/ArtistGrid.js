import React from "react";
import "./artistgrid.scss";
import ArtistGridItem from "./ArtistGridItem";

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
          <ArtistGridItem
            key={artist.id}
            artist={artist}
            onClick={() => artistClick(artist)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;
