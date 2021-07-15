import CommonContainer from "./CommonContainer";
import VideoPlayer from "./VideoPlayer";

const RightContainer = () => {
  return (
    <CommonContainer
      position="right"
      title="Film"
      arender={(media) => (
        <div className="container container-right">
          <VideoPlayer src={media.videoUrl} />
          {/* <h1 className="container-big-title">{media.title}</h1> */}
        </div>
      )}
    />
  );
};

export default RightContainer;
