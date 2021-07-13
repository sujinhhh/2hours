import { useState } from "react";

const CommonContainer = (props) => {
  const [first] = props.mediaData;
  const [activeMedia, setActiveMedia] = useState(first);
  return (
    <>
      <div>
        <h2>{props.mediaData}</h2>
        <ul className="">
          {props.mediaData.map((media, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveMedia(media)}
              onMouseLeave={() => {}}
            >
              {media.title}
            </li>
          ))}
        </ul>
      </div>
      {props.render(activeMedia)}
    </>
  );
};

export default CommonContainer;
