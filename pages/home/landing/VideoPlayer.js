const VideoPlayer = (src) => {
  console.log(src);

  return (
    // <iframe
    //   // title={src}
    //   // src="https://sujinhhh.github.io/video/cloebak.mp4"
    //   width="1000"
    //   height="500"
    //   className={`resp-iframe`}
    //   webkitallowfullscreen="true"
    //   mozallowfullscreen="true"
    //   allowFullScreen
    //   allow="autoplay; fullscreen"
    //   frameBorder="0"
    //   controls="0"
    // ></iframe>
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
