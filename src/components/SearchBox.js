import React from "react";

const SearchBox = ({ handleChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robot friends"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
