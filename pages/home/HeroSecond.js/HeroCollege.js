import { photos, videos } from "../../../components/data/heroSecondData";
import { gsap } from "gsap";
import { useEffect } from "react";

function VideoElment({ src }) {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        playsInline=""
        autoPlay
        webkit-playsinline=""
        loop
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}
const HeroCollege = () => {
  const leftImage = photos.slice(0, 2);
  const rightImage = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.fromTo(
      ".hero-element",
      { y: 600 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImage.map((src, index) => (
          <ImageElement key={index * Math.random()} src={src} />
        ))}
        {/* <VideoElment src={leftVideo} /> */}
      </div>
      <div className="right-column">
        {/* <VideoElment src={rightVideo} /> */}

        {rightImage.map((src, index) => (
          <ImageElement key={index * Math.random()} src={src} />
        ))}
      </div>
    </div>
  );
};

export default HeroCollege;
