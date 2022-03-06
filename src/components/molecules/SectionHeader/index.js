import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper text-center">
            <div className="position-absolute top-50 start-50 translate-middle">
              <h1 className="display-1 px-5 fw-bolder text-uppercase ls-5px mb-5 ff-alatsi">
                yama
              </h1>
              <Link to="#">
                <i className="fs-1 far fa-play-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
