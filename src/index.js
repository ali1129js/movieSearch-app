/**
 * @Author: Ali
 * @Date:   2019-01-14T12:47:25+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-14T12:47:25+01:00
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
