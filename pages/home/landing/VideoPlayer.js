const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="over-color" />
      <video
        className="video"
        src="https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default VideoPlayer;
