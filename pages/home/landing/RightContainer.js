import CommonContainer from "./CommonContainer";
import VideoPlayer from "./VideoPlayer";
import { videoData } from "./landingData";

const RightContainer = () => {
  return (
    <CommonContainer
      mediaData={videoData}
      position="right"
      title="Film"
      render={(media) => (
        <div className="container container-right">
          <VideoPlayer src={media.mediaUrl} />
          {/* <h1 className="container-big-title">{media.title}</h1> */}
        </div>
      )}
    />
  );
};

export default RightContainer;
