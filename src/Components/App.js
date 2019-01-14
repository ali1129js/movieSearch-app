/**
 * @Author: Ali
 * @Date:   2019-01-14T12:29:10+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-14T13:43:25+01:00
 */

import React, { Component } from "react";

import TitleList from "./TitleList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="App">
        <TitleList
          title="Top TV picks"
          url="discover/tv?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Popular kids movies"
          url="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"
        />
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
      </div>
    );
  }
}

export default App;
