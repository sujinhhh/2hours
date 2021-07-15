import CommonContainer from "./CommonContainer";
import ImagePlayer from "./ImagePlayer";

const LeftContainer = () => {
  const imageData = [
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1601979689063-cb474664e70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1614481327033-68e5df399653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=951&q=80",
      title: "Ohahah",
    },
  ];

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
