import CommonContainer from "./CommonContainer";
import imageData from "./imageData";
import ImagePlayer from "./ImagePlayer";

const LeftContainer = () => {
  return (
    <CommonContainer
      mediaData={imageData}
      position="left"
      title="Photo"
      render={(media) => (
        <div className="container container-left">
          <ImagePlayer src={media.mediaUrl} />
          {/* <h1 className="container-big-title">{media.title}</h1> */}
        </div>
      )}
    />
  );
};

export default LeftContainer;
