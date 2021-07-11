import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
// import SplitText from "../../utils/split.min.js";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artworks?page=1&limit=100&fields=id,title,image_id"
  );
  const data = await res.json();
  return {
    props: { gallery: data.data },
  };
};

const Gallery = ({ gallery }) => {
  const title = useRef(null);
  const subtitle = useRef(null);

  useEffect(() => {
    gsap.from(title.current, {
      duration: 0.5,
      autoAlpha: 0,
      x: -100,
      ease: "none",
    });
    gsap.from(subtitle.current, {
      duration: 0.5,
      autoAlpha: 0,
      x: 100,
      ease: "none",
      delay: 0.8,
    });
  }, [title, subtitle]);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 10,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="gallery">
      <div className="gallery__title">
        <h1 ref={title}>ArT & Design </h1>
        <p ref={subtitle}> API from Art Institute of Chicago</p>
      </div>

      <Slider {...settings} className="gallery__container">
        {gallery.map((art, idx) => {
          const slice = idx === imageIndex ? "activeSlide" : "slide";
          const imgPath = `https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`;
          return (
            art.image_id && (
              <Link
                href={"/gallery/" + art.id}
                key={art.id}
                updateActiveImage={(index) => setActiveImage(index + 1)}
              >
                <a className={slice}>
                  <img className={slice} src={imgPath}></img>
                </a>
              </Link>
            )
          );
        })}
      </Slider>
      <div />
    </div>
  );
};

export default Gallery;
