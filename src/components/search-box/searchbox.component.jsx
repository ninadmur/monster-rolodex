import React from "react";
import './searchbar.styles.css';

export const SearchBox = ({placeholder, handleInput}) => {
  return (
    <input className='search'
      type="search"
      placeholder= {placeholder}
      onChange={handleInput}
    />
  );
};
