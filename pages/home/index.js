import Hero from "./hero";
import CommonContainer from "./landing/CommonContainer";
import HeroSecond from "./HeroSecond.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <div>
      <div className="home">
        <div className="hover-left" />
        <div className="hover-right" />
        <CommonContainer />
        <Hero />
      </div>
      <HeroSecond />
    </div>
  );
  å;
};

export default Homepage;
