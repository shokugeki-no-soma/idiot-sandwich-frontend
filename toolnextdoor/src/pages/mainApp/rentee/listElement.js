import React from "react";
import "./rentee.css";
import fakeAva from "../../../fakeAva.png";
export default function ListElement(props) {
  const { data } = props;
  return (
    <div className="container ele-cont">
      <div className="col-3 cont-left">
        <img src={fakeAva} alt="Logo" className="fake-ava" />
      </div>
      <div className="col-9 cont-right">
        <p className="row title">{data.name}</p>
        <div className="container">
          <div className="row ">
            <p className="col-6">{data.request}</p>
            <p className="col-6">{data.location}</p>
          </div>
          <div className="row">
            <p className="col-6">{data.urgency}</p>
            <p className="col-6">{data.timeStamp}</p>
          </div>
        </div>
        <div className="row">
          <button type="button" class="btn btn-primary">
            Accept
          </button>
          <button type="button" class="btn btn-light">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
