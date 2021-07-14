import { useState } from "react";
import cn from "classnames";

const CommonContainer = (props) => {
  const [first] = props.mediaData;
  const [activeMedia, setActiveMedia] = useState(first);
  console.log(props.render(activeMedia));
  return (
    <>
      <div>
        {/* <h2>{props.mediaData}</h2> */}
        <ul className={`navigation ${props.position}`}>
          {props.mediaData.map((media, index) => {
            return (
              <li
                key={index}
                className={cn({
                  active: media.mediaUrl === activeMedia.mediaUrl,
                })}
                onMouseEnter={() => setActiveMedia(media)}
                onMouseLeave={() => console.log("hah")}
              >
                {media.title}
              </li>
            );
          })}
        </ul>
      </div>
      {props.render(activeMedia)}
    </>
  );
};

export default CommonContainer;
