import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-color-5">
      <div className="container">
        <div className="row min-vh-50 py-5">
          <Content
            className="order-1 order-lg-0"
            title="QOROS"
            description="LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT."
          />
          <Image className="bg-image-5 order-0 order-lg-1" />
        </div>
      </div>
    </section>
  );
};

export default index;
