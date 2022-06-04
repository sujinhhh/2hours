import { useState } from "react";
import cn from "classnames";
import ImagePlayer from "./ImagePlayer";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";

const CommonContainer = ({ position }) => {
  const imageData = [
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1616745036869-7c11a4e7450c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0NHx8cGFzdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      title: "REACT",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1623157379785-31c18178547c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxwYXN0ZWwlMjBwdXJwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      title: "JavaScript",
    },

    {
      mediaUrl:
        "https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5NXx8cGFzdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      title: "CSS",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxwYXN0ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      title: "HTML",
    },
  ];
  const first = imageData[1];
  const [activeMedia, setActiveMedia] = useState(first);

  return (
    <>
      <div>
        <ul className={`navigation ${position}`}>
          {imageData.map((media, index) => (
            <motion.li
              key={index}
              className={cn({
                active: media.mediaUrl === activeMedia.mediaUrl,
              })}
              onMouseEnter={() => setActiveMedia(media)}
              onMouseLeave={() => {}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {media.title}
            </motion.li>
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
