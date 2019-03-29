/**
 * @Author: Ali
 * @Date:   2019-03-29T08:13:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-03-29T12:24:41+01:00
 */
import React, { useState } from "react";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChanges = e => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
    console.log("searchValue : ", searchValue);
  };
  return (
    <form className="search">
      <input value={searchValue} onChange={handleInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="Search" />
    </form>
  );
};
export default Search;
