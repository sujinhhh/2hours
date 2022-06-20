import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  const [videoSetup, setVideoSetup] = useState(true);

  const windowResize = () => {
    if (window.innerWidth <= 425) {
      setVideoSetup(false);
    } else {
      setVideoSetup(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    windowResize();
  }, []);

  return (
    <div className="video-container">
      <div className="over-color" />
      {videoSetup && (
        <motion.video
          className="video"
          src="https://player.vimeo.com/external/454825064.hd.mp4?s=1592bf3ecf1847fa831986b637abd651661fc97c&profile_id=174"
          autoPlay
          loop
          muted
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
