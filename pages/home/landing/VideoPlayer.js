import { useState, useEffect } from "react";

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
        <video
          className="video"
          src="https://player.vimeo.com/external/530034795.sd.mp4?s=79c335ccd72eb0ad14660d20752a656ed3bc08ed&profile_id=164&oauth2_token_id=57447761"
          autoPlay
          loop
          muted
        />
      )}
    </div>
  );
};

export default VideoPlayer;
