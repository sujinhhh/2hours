import CommonContainer from "./CommonContainer";
import { videoData } from "../../../components/landingData";
import VideoPlayer from "./VideoPlayer";

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
