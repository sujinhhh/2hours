const ImagePlayer = ({ src }) => {
  console.log(src);

  return (
    <div
      className="image-player"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};

export default ImagePlayer;
