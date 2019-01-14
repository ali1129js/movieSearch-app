/**
 * @Author: Ali
 * @Date:   2019-01-14T12:44:56+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-14T13:29:18+01:00
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
      .then(data => console.log(data))
      .catch(error => console.log("Something is wrong with fetch"));
  };
  componentDidMount() {
    this.loadContent();
  }
  render() {
    return <div>TitleList</div>;
  }
}
export default TitleList;
