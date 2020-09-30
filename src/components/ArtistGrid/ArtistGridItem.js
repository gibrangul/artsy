import React from "react";

const ArtistGridItem = ({ artist, onClick }) => {
  const { name, thumb_url, upcoming_event_count: count } = artist;
  const eventText =
    count > 0 ? `${count} Event${count > 1 && "s"}` : "No Events";
  return (
    <div onClick={onClick} className="artist-grid_list_item">
      <img alt={name} src={thumb_url} className="shadow-default" />
      <div className="artist-grid_list_item_info">
        <p className="artist-grid_list_item_info_name">{name}</p>
        <p className="artist-grid_list_item_info_events">{eventText}</p>
      </div>
    </div>
  );
};

export default ArtistGridItem;
