import React, { useState } from "react";
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchbar"
      />
    </div>
  );
};

export default SearchBar;
