import React, { useState } from 'react';


function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input id='search-bar'
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
