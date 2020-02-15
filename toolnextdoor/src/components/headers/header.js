import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Tool Next Door
      </a>
      {props.login ? (
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => props.pageDispatch({ type: "RENTER" })}
              >
                Renter
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => props.pageDispatch({ type: "RENTEE" })}
              >
                Rentee
              </a>
            </li>
          </ul>
          <Link to="/">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
