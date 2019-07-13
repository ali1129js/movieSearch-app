/**
 * @Author: Ali
 * @Date:   2019-03-29T13:28:37+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-07-13T12:58:38+02:00
 */
import React from "react";
import styled from "styled-components";
const Content = styled.div`
  background: linear-gradient(to bottom right, #3498db, papayawhip, #8e44ad);
  margin: auto;
  box-shadow: 10px 10px 10px #2d3436;
  font-size: 1em;
  text-align: center;
  height: 80vh;
`;
const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#3498db",
  padding: 50
};
const MyModal = props => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="backdrop" style={backdropStyle}>
      <div className="row">
        <div className="col-xs-12">
          <div className="modal-body">
            <div className="header">
              <button className="btn btn-outline-dark" onClick={props.onClose}>
                Close
              </button>
            </div>
            <Content>
              {props.title}
              <p> {props.overview} </p>
              <img
                src={`https://image.tmdb.org/t/p/original/${props.backdrop}`}
                alt={props.title}
                width="50%"
              />
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyModal;
