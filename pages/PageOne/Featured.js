import React from "react";
import { images } from "../../components/data/heroSecondData";

function Featured() {
  const [firstUrl, secondUrl] = images;
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} alt="" />
      </div>
      <div className="featured-column-layout">
        <h6>green</h6>
        <img src={secondUrl} alt="" />
      </div>
    </section>
  );
}

export default Featured;
