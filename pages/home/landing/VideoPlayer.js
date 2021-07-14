const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="over-color" />
      <video
        className="video"
        src="https://sujinhhh.github.io/video/cloebak.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default VideoPlayer;
