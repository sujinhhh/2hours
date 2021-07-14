import CommonContainer from "./CommonContainer";
import VideoPlayer from "./videoPlayer";
import videoData from "./videoData";

const RightContainer = () => {
  return (
    <CommonContainer
      mediaData={videoData}
      position="right"
      title="Film"
      render={(media) => (
        <div className="container container-right">
          <VideoPlayer src={media.videoUrl} />
          {/* <h1 className="container-big-title">{media.title}</h1> */}
        </div>
      )}
    />
  );
};

export default RightContainer;
