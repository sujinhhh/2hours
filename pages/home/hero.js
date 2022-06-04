import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="card">
          <div className="info">
            <h1 className="title">{"Let's Roll!"}</h1>
            <p className="sub-contents-title">
              “Nothing is impossible. The word itself says ‘I’m possible!”
            </p>
            <h4> - Audrey Hepburn</h4>
            <p id="sub-contents">
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
