import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center h-vh-30 py-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <div className="mb-5 mb-lg-0">
                  <Link className="text-decoration-none mx-2" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link className="text-decoration-none mx-2" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="text-decoration-none mx-2" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="text-decoration-none mx-2" to="#">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      newsletter
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      view stories
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      about
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      subscribe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
