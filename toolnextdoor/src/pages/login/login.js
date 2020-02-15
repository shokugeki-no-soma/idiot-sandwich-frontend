import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function LoginPage(props) {
  return (
    <div className="form-container">
      <div className="form-group form-head">
        <p className="big-text">Welcome to Tool Next Door</p>
        <p>Where you can find your need immediately in your neighborhood</p>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <p>Create an account</p>
      <Link to="/app" onClick={() => props.dispatch({ type: "LOGIN" })}>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </Link>
    </div>
  );
}
