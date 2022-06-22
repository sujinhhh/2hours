import { gsap } from "gsap";
import { useEffect } from "react";

const HeroHeader = () => {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2, delay: 1 }
    );
  });

  return (
    <div className="hero-text-section2">
      <h2>UI/UX Design</h2>
      <h3>
        A positive, enthusiastic Web designer & Front End Developer. I have 2
        years experience as a web designer
      </h3>
      <img id="hero-text" src="./mola.png" alt="" />
      <div className="tools" id="hero-text">
        <p className="hero-p-text">Skills : </p>
        <img src="./js.png" alt="" />
        <img src="./html.png" alt="" />
        <img src="./react.png" alt="" />
        <img src="./photoshop.png" alt="" />
        <img src="./css.png" alt="" />
        <img src="./ill.png" alt="" />
      </div>
    </div>
  );
};

export default HeroHeader;
