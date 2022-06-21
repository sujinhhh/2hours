import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const imgSrc =
  "https://images.unsplash.com/photo-1561570541-aaba21a3ecf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80";

const videoUrl = "https://sujinhhh.github.io/img/letters.mp4";

const HeroPhoneBlock = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }
    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top top",
          end: "+=1300",
          pin: true,
          scrub: true,
        },
      });
      tl.to(phoneRef.current, { scale: 1.5 }, "+=0.2");
      tl.to(
        ".hero-container",
        {
          backgroundColor: "black",
          duration: 0.25,
        },
        "-=0.5"
      );
      return tl;
    }
    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <h1 ref={phoneRef}>Front-end Development</h1>
        {/* <video
          className="collage-element"
          playsInline=""
          autoPlay
          webkit-playsinline=""
          loop
          src={videoUrl}
        ></video> */}
      </div>
    </div>
  );
};

export default HeroPhoneBlock;
