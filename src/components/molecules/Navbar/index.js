import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light p-5">
      <div className="container-fluid px-0">
        <button
          className="navbar-toggler me-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item py-3">
              <Link className="nav-link fw-bold" aria-current="page" to="#">
                newsletter
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link fw-bold" to="#">
                view stories
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link fw-bold" to="#">
                about
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link fw-bold" to="#">
                suscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
