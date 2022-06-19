import { useState } from "react";
import cn from "classnames";
import ImagePlayer from "./ImagePlayer";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";

const CommonContainer = ({ position }) => {
  const imageData = [
    {
      mediaUrl:
        "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
      title: ":)",
    },

    {
      mediaUrl: "./react.svg",
      title: "REACT",
    },

    {
      mediaUrl:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3NzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "JavaScript",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1623157379785-31c18178547c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxwYXN0ZWwlMjBwdXJwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      title: "CSS/SCSS",
    },
    {
      mediaUrl: "./html2.png",
      title: "HTML",
    },
  ];
  const first = imageData[0];
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
