import React from "react";
import "./renter.css";
import { Link } from "react-router-dom";
export default function Renter() {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">Ask a neighbor</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <Link to="/app">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Link>
    </div>
  );
}
