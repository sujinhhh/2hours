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
    <div className="hero-text-section">
      <h2 id="hero-text">Change happens in an instant...</h2>
    </div>
  );
};

export default HeroHeader;
