/**
 * @Author: Ali
 * @Date:   2019-03-27T11:49:59+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-04-05T18:10:08+02:00
 */
import React, { useState } from "react";
import MyModal from "./MyModal";
const TitleComponent = props => {
  const [isOpen, setModal] = useState(false);
  const handleClicked = () => {
    setModal(!isOpen);
  };

  return isOpen ? (
    <MyModal
      show={isOpen}
      onClose={handleClicked}
      title={props.title}
      votes={props.votes}
      overview={props.overview}
      backdrop={props.backdrop}
    />
  ) : (
    <div className="item" onClick={handleClicked}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        alt={props.title}
      />
    </div>
  );
};

export default TitleComponent;
