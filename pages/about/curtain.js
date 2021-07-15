import { useRef } from "react";

import { TweenMax, Power3 } from "gsap";
import { useEffect } from "react";

const Curtain = () => {
  let flower1 = useRef(null);
  let flower2 = useRef(null);
  let flower3 = useRef(null);

  let text1 = useRef(null);

  useEffect(() => {
    TweenMax.to(flower1, 3, {
      opacity: 0.2,
      x: 90,
      y: -100,
      scale: 5,
      rotate: 20,
      ease: Power3.easeOut,
      rotate: 60,
    });
    TweenMax.to(flower2, 2, {
      opacity: 1,
      x: 360,
      y: -400,
      scale: 1,
      ease: Power3.easeOut,
      rotate: -20,
      delay: 0.2,
    });
    TweenMax.to(flower3, 2, {
      opacity: 0.5,
      x: 160,
      y: -700,
      scale: 0.6,
      ease: Power3.easeOut,
      rotate: 20,
      delay: 0.5,
    });
    TweenMax.to(text1, 1, {
      opacity: 0.3,
      y: -20,
      ease: Power3.easeOut,
      delay: 1,
    });
  }, []);

  return (
    <div className="flower">
      <div className="flower__text01">
        <h1 ref={(el) => (text1 = el)}>Sujin lee</h1>
      </div>
      <div className="flower__container">
        <img
          ref={(el) => (flower1 = el)}
          className="flower01"
          src="./flower1.png"
          alt="flower"
        />
        <img
          ref={(el) => (flower2 = el)}
          className="flower02"
          src="./flower2.png"
          alt="flower"
        />
        <img
          ref={(el) => (flower3 = el)}
          className="flower03"
          src="./flower3.png"
          alt="flower"
        />
      </div>
    </div>
  );
};

export default Curtain;
