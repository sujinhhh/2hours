import { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import { FaReact, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Curtain = () => {
  let flower1 = useRef(null);
  let flower2 = useRef(null);
  let flower3 = useRef(null);

  let text1 = useRef(null);

  useEffect(() => {
    TweenMax.to(flower1, 3, {
      opacity: 0,
      x: 90,
      y: -100,
      scale: 5,
      rotate: 20,
      ease: Power3.easeOut,
      rotate: 60,
      delay: 0.5,
    });
    TweenMax.to(flower2, 2, {
      opacity: 1,
      x: 360,
      y: -400,
      scale: 1,
      ease: Power3.easeOut,
      rotate: -20,
      delay: 0.2,
      delay: 0.5,
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
      y: -60,
      ease: Power3.easeOut,
      delay: 0,
    });
  }, []);

  return (
    <div className="flower">
      <div className="flower__text-container">
        <div className="flower__text-container__title">
          <h1 ref={(el) => (text1 = el)}>Sujin lee</h1>
          <div className="about-me">
            <h2> I am ...</h2>
            <p>
              A positive, enthusiastic Web Developer.
              <br />I have 2 years experience as a Web Designer. Now I fell in
              love with programming and I am so passionate about it.
              <br /> I am a fast learner, great with teamwork and a hard worker.
              I guarantee I will perform highly in this role, I will be very
              useful to your company.
            </p>
          </div>
          <div className="about-me skill green-title">
            <h2> I do ...</h2>

            <div className="tagline">
              <span className="change-container">
                <span className="changing">
                  <SiJavascript />
                  Javascript
                </span>
                <span className="changing">
                  <FaReact />
                  react js
                </span>
                <span className="changing">
                  <FaCss3Alt />
                  css/sass
                </span>
                <span className="changing">
                  <FaHtml5 />
                  html
                </span>
              </span>
            </div>
          </div>
          <div className="about-me like">
            <h2> I like ...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nemo
              possimus adipisci dolor perspiciatis vero corrupti, tempore in.
              Illum veniam reprehenderit provident. Odit voluptate molestias
              veniam eos voluptatibus harum corporis!
            </p>
          </div>
          <div className="about-me contact green-title">
            <h2> Contact me ...</h2>
            <div className="contact-container">
              <div className="mail">
                <span>
                  <MdEmail />
                </span>
                <a href="mailto:sujinleeyo@gmail.com" target="_blank">
                  Email : sujinleeyo@gmail.com
                </a>
              </div>
              <div className="mail">
                <span>
                  <FaGithub />
                </span>
                <a href="https://github.com/sujinhhh" target="_blank">
                  Github : https://github.com/sujinhhh
                </a>
              </div>
            </div>
          </div>
        </div>
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
