import React, { useState } from "react";
import "./filtersbar.scss";

const FiltersBar = ({ onFilter }) => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFilter({
      location,
      country,
      dateStart,
      dateEnd,
    });
  };

  const clearFields = () => {
    setLocation("");
    setCountry("");
    setDateEnd("");
    setDateStart("");
    onFilter({
      location,
      country,
      dateStart,
      dateEnd,
    });
  };

  return (
    <form
      autoComplete="off"
      className="filters-bar shadow-default"
      onSubmit={onSubmit}
    >
      <input
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search for a Location e.g Venue, City, Country"
        className="input input-li bg-dark-200 mr-8"
      />
      <div className="filters-bar_buttons">
        <button className="btn btn-primary mr-8 flex-1">Calendar</button>
        <button type="submit" className="btn btn-primary mr-8 ml-auto">
          Search
        </button>
        <button className="btn btn-link ph-18" onClick={clearFields}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default FiltersBar;
