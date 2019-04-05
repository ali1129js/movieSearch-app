/**
 * @Author: Ali
 * @Date:   2019-03-27T11:49:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-04-05T17:36:22+02:00
 */
import React from "react";
import MyModal from "./MyModal";
const TitleComponent = props => {
  const handleClicked = () => {
    console.log("clicked");
  };

  return (
    <div className="item" onClick={handleClicked}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        alt={props.title}
      />
    </div>
  );
};

export default TitleComponent;
