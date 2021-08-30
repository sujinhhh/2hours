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
      <h2 id="hero-text">Everything you can imagine is real.</h2>
      <p className="hero-p-text">
        Life is filled with highs and lows —happiness and struggles that will
        test your resilience and integrity, push you to overcome challenges and
        leave you with lessons that will make you even stronger on your way up.
      </p>
      <p className="hero-p-text">
        Always believe that something wonderful is about to happen! You should
        never regret anything in life. If it’s bad, it is experience. It’s not
        who you are that holds you behind, it’s who you think your are not.
      </p>
    </div>
  );
};

export default HeroHeader;
