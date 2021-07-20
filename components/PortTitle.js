import { useRef, useEffect } from "react";

const Title = ({ title, index, setRotation, setIndex }) => {
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
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
