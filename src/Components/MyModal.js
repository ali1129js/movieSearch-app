/**
 * @Author: Ali
 * @Date:   2019-03-29T13:28:37+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-03-30T07:25:48+01:00
 */
import React from "react";

import styled from "styled-components";
const Content = styled.div`
  background: linear-gradient(to bottom right, #3498db, papayawhip, #f39c12);
  margin: auto;
  height: 22em;
  width: 32em;
  font-size: 1.2em;
  text-align: center;
  border: 3px solid #fab1a0;
  padding: 5px;
  padding-top: 10px;
  box-shadow: 8px 10px #7f8c8d;
`;
const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#2d3436",
  padding: 50
};
const MyModal = props => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="backdrop" style={backdropStyle}>
      <div className="modal-body">
        <Content>
          clcked
          <div className="footer">
            <button
              className="btn btn-outline-dark"
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
        </Content>
      </div>
    </div>
  );
};
export default MyModal;
