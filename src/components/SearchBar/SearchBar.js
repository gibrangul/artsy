import React, { useState } from "react";
import "./searchbar.scss";

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form autocomplete="off" className="search-bar" onSubmit={onSubmit}>
      <input
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
