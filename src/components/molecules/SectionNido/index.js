import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container">
        <div className="row min-vh-50 py-5">
          <Image className="bg-image-4" />
          <Content
            title="CRAIGLIST"
            description="LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT."
            textColor="black"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
