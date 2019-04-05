/**
 * @Author: Ali
 * @Date:   2019-03-29T08:13:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-04-05T17:38:07+02:00
 */
import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const searchResults = () => {
    if (props.results) {
      const resVal = props.results.map(block => (
        <TitleComponent
          key={block.id}
          title={block.title}
          overview={block.overview}
          poster={block.poster_path}
          votes={block.vote_average}
          backdrop={block.backdrop_path}
        />
      ));
      return resVal;
    }
  };
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
  };
  return (
    <>
      <form className="search">
        <input value={searchValue} onChange={handleInputChanges} type="text" />
        <input onClick={callSearchFunction} type="submit" value="Search" />
      </form>
      <div className="row mt-5">{searchResults()}</div>
    </>
  );
};
export default Search;
