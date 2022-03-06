import React from "react";
import { Button } from "..";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "col-lg-6",
    "d-flex",
    "justify-content-center",
    "align-items-center",
  ];
  className.push(props.className);

  let title = "wrapper text-center text-white text-uppercase";
  let description = "text-fade-1";
  if (props.textColor === "black") {
    title = "wrapper text-center text-uppercase";
    description = "text-fade-black-1";
  }

  return (
    <div className={className.join(" ")}>
      <div className={title}>
        <h2 className="fs-3 fw-bold ls-5px ff-alatsi">{props.title}</h2>
        <p className={description}>{props.description}</p>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  textColor: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default index;
