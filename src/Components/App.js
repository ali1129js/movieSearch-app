/**
 * @Author: Ali
 * @Date:   2019-01-14T12:29:10+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-03-29T12:28:15+01:00
 */
import React, { useState, useEffect } from "react";
import Search from "./Search";
import TitleList from "./TitleList";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
    const reqUrl = `https://api.themoviedb.org/3/search/multi?query=${searchValue}&api_key=${
      process.env.REACT_APP_API_KEY
    }`;
    console.log(reqUrl);
    fetch(reqUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };
  return (
    <div className="container-fluid">
      <Search search={search} />
      <div className="row">
        <TitleList
          title="Trending now"
          url="discover/movie?certification_country=US&sort_by=popularity.desc&page=1"
        />
      </div>
      <div className="row">
        <TitleList title="Top Rated Movies" url="movie/top_rated?" />
      </div>
      <div className="row">
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?certification_country=US&sort_by=popularity.desc&page=1"
        />
      </div>
      <div className="row">
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?certification_country=US&sort_by=popularity.desc&page=1"
        />
      </div>
      <div className="row">
        <TitleList
          title="Top TV picks"
          url="genre/27/movies?certification_country=US&sort_by=popularity.desc&page=1"
        />
      </div>
    </div>
  );
};

export default App;
