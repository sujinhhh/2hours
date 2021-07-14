import { useState } from "react";
import cn from "classnames";

const CommonContainer = (props) => {
  const [first] = props.mediaData;
  const [activeMedia, setActiveMedia] = useState(first);

  return (
    <>
      <div>
        {/* <h2>{props.mediaData}</h2> */}
        {/* <ul className={`navigation ${props.position}`}>
          {props.mediaData.map((media, index) => (
            <li
              key={index}
              className={cn({
                active: media.mediaUrl === activeMedia.mediaUrl,
              })}
              onMouseEnter={() => setActiveMedia(media)}
            >
              {media.title}
            </li>
          ))}
        </ul> */}
      </div>
      {props.render(activeMedia)}
    </>
  );
};

export default CommonContainer;
