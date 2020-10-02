import React, { useState } from "react";
import "./searchbar.scss";

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") return;
    onSearch(searchTerm);
  };

  return (
    <form autoComplete="off" className="search-bar" onSubmit={onSubmit}>
      <input
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="input input-li bg-200 border-50 search-icon"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
