/**
 * @Author: Ali
 * @Date:   2019-01-14T12:44:56+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-04-05T17:40:36+02:00
 */
import React, { Component } from "react";
import TitleComponent from "./TitleComponent";
class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  loadContent = () => {
    const reqUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${
      process.env.REACT_APP_API_KEY
    }`;
    fetch(reqUrl)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error("Something is wrong with fetch"));
  };
  componentDidMount() {
    this.loadContent();
  }
  render() {
    if (!this.state.data.results) {
      return <div className="loading">loading...</div>;
    } else {
      return (
        <>
          <div className="wrapper">
            <strong> {this.props.title} </strong>
            <div className="row">
              {this.state.data.results.map(block => (
                <TitleComponent
                  key={block.id}
                  title={block.title}
                  overview={block.overview}
                  poster={block.poster_path}
                  votes={block.vote_average}
                  backdrop={block.backdrop_path}
                />
              ))}
            </div>
          </div>
        </>
      );
    }
  }
}
export default TitleList;
