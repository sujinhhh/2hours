import CommonContainer from "./CommonContainer";
// import { videoData } from "../../../components/landingData";
import VideoPlayer from "./VideoPlayer";

const RightContainer = () => {
  const videoData = [
    {
      mediaUrl:
        "https://player.vimeo.com/external/380034348.sd.mp4?s=6cbf774477045e18bce4a4b3097199e75b84bc7c&profile_id=165&oauth2_token_id=57447761",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://player.vimeo.com/external/195912468.sd.mp4?s=4fdf320d5912bcfc67fcdb40d85a75ed38c2285a&profile_id=164&oauth2_token_id=57447761",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://player.vimeo.com/external/497762976.sd.mp4?s=f7f16e08de0711803f3053df4ba29ac88568eac7&profile_id=165&oauth2_token_id=57447761",
      title: "Ohahah",
    },
  ];
  return (
    <CommonContainer
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
