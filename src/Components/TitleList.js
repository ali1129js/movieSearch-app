/**
 * @Author: Ali
 * @Date:   2019-01-14T12:44:56+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-15T10:35:12+01:00
 */
import React, { Component } from "react";

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
      .catch(error => console.log("Something is wrong with fetch"));
  };
  componentDidMount() {
    this.loadContent();
  }
  render() {
    if (!this.state.data.results) {
      return <div className="">loading</div>;
    } else {
      return (
        <div>
          {this.state.data.results.map(block => (
            <div className="bb">
              <div className="nn">
                {" "}
                <div className="titlelist"> {block.title}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default TitleList;
