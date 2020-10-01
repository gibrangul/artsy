import React, { useState, forwardRef } from "react";
import "./filtersbar.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FiltersBar = ({ onFilter }) => {
  const [location, setLocation] = useState("");
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);

  const DateButton = forwardRef(({ value, onClick, placeholder }, ref) => (
    <button
      className="btn date-button bg-dark-200 calendar-icon"
      onClick={onClick}
    >
      {value ? value : <p>{placeholder}</p>}
    </button>
  ));

  return (
    <form
      autoComplete="off"
      className="filters-bar"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        name="location"
        value={location}
        onChange={(e) => {
          const text = e.target.value;
          onFilter({ location: text });
          setLocation(text);
        }}
        placeholder="Search for a Location e.g Venue, City, Country"
        className="input input-li bg-dark-200 mr-8 location-icon"
      />
      <div className="filters-bar_buttons">
        <DatePicker
          selected={dateStart}
          onChange={(date) => {
            onFilter({ dateStart: date });
            setDateStart(date);
          }}
          placeholderText="Start Date"
          isClearable
          selectsStart
          customInput={<DateButton />}
          startDate={dateStart}
          endDate={dateEnd}
          maxDate={dateEnd}
        />
        <DatePicker
          selected={dateEnd}
          onChange={(date) => {
            onFilter({ dateEnd: date });
            setDateEnd(date);
          }}
          placeholderText="End Date"
          isClearable
          selectsEnd
          customInput={<DateButton />}
          startDate={dateStart}
          endDate={dateEnd}
          minDate={dateStart}
        />
      </div>
    </form>
  );
};

export default FiltersBar;
