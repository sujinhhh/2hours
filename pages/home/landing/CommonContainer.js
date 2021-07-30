import { useState } from "react";
import cn from "classnames";
import ImagePlayer from "./ImagePlayer";
import VideoPlayer from "./VideoPlayer";

const CommonContainer = ({ position }) => {
  const imageData = [
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      title: "SMILE",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "JS/REACT",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxzdW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "HAPPY",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      title: "CSS/HTML",
    },
  ];
  const first = imageData[1];
  const [activeMedia, setActiveMedia] = useState(first);

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
