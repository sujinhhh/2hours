import { useState } from "react";
import cn from "classnames";
import ImagePlayer from "./ImagePlayer";
import VideoPlayer from "./VideoPlayer";


const CommonContainer = (props) => {
  console.log(props);

  const [first] = props.mediaData;

  const [activeMedia, setActiveMedia] = useState(first);
  console.log(activeMedia);

  return (
    <>
      <div>
        <ul className={`navigation ${position}`}>
          {imageData.map((media, index) => (
            <li
              key={index}
              className={cn({
                active: media.mediaUrl === activeMedia.mediaUrl,
              })}
              onMouseEnter={() => setActiveMedia(media)}
              onMouseLeave={() => {}}
            >
              {media.title}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="hover-left" />
      <div className="hover-right" /> */}
      <div position="left" title="Photo">
        <div className="container container-left">
          <ImagePlayer src={activeMedia.mediaUrl} />
        </div>
      </div>
      <div position="right" title="Film">
        <div className="container container-right">
          <VideoPlayer />
        </div>
      </div>
    </>
  );
};

export default CommonContainer;
