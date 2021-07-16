import { useState } from "react";
import cn from "classnames";
import ImagePlayer from "./ImagePlayer";
import VideoPlayer from "./VideoPlayer";
import { useDispatch, useSelector } from "react-redux";

const CommonContainer = ({ position }) => {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.changeImage.image);
  const first = imageData[1];
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
      <div position="left" title="Photo" className="container container-left">
        <div className="container container-left">
          <ImagePlayer src={activeMedia.mediaUrl} />
        </div>
      </div>
      <div position="right" title="Film" className="container container-right">
        <div className="container ">
          <VideoPlayer />
        </div>
      </div>
    </>
  );
};

export default CommonContainer;
