import { useRef, useEffect } from "react";
import Link from "next/link";

const Title = ({ website, title, index, setRotation, setIndex }) => {
  const titleRef = useRef(null);
  useEffect((e) => {
    titleRef.current.style.transform = "translateZ(150px)";
  });
  return (
    <div
      ref={titleRef}
      className="title-item"
      onMouseEnter={() => setRotation(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <Link href={website}>
        <a className="h1" target="_blank">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default Title;
