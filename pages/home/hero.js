import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="card">
          <div className="info">
            <h1 className="title">{"Let's Roll !"}</h1>
            <p>
              “Software Developer” – An organism that turns caffeine into
              software...
            </p>
            <p>
              Writing the first 90 percent of a computer program takes 90
              percent of the time. The remaining ten percent also takes 90
              percent of the time and the final touches also take 90 percent of
              the time...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
