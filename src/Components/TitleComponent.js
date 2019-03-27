/**
 * @Author: Ali
 * @Date:   2019-03-27T11:49:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-03-27T15:19:30+01:00
 */
import React from "react";

const TitleComponent = props => {
  return (
    <div className="item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        alt={props.title}
      />
    </div>
  );
};

export default TitleComponent;
