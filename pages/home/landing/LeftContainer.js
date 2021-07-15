import CommonContainer from "./CommonContainer";
import ImagePlayer from "./ImagePlayer";

const LeftContainer = () => {
  return (
    <CommonContainer
      position="left"
      title="Photo"
      arender={(media) => (
        <div className="container container-left">
          <ImagePlayer src={media.mediaUrl} />
          {/* <h1 className="container-big-title">{media.title}</h1> */}
        </div>
      )}
    />
  );
};

export default LeftContainer;
