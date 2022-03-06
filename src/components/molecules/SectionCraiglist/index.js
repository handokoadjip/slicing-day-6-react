import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-color-3">
      <div className="container">
        <div className="row min-vh-50 py-5">
          <Content
            className="order-1 order-lg-0"
            title="CRAIGLIST"
            description="LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT."
            textColor="black"
          />
          <Image className="bg-image-3 order-0 order-lg-1" />
        </div>
      </div>
    </section>
  );
};

export default index;
