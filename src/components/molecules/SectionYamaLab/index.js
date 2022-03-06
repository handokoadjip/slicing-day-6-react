import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-color-2">
      <div className="container">
        <div className="row min-vh-50 py-5">
          <Image className="bg-image-2" />
          <Content title="YAMA LAB" description="BRANDING" />
        </div>
      </div>
    </section>
  );
};

export default index;
