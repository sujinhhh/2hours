const VideoPlayer = () => {
  return (
    <iframe
      title={src}
      src=""
      width="640"
      height="360"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      allow="autoplay; fullscreen"
      frameborder="0"
      controls="0"
    ></iframe>
  );
};

export default VideoPlayer;
