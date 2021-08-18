const imgSrc =
  "https://images.unsplash.com/photo-1527443060795-0402a18106c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80";

const videoUrl = "https://sujinhhh.github.io/img/letters.mp4";

const HeroPhoneBlock = () => {
  return (
    <div className="hero-phone-block">
      <div
        className="hero-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className="collage-element"
          playsInline=""
          autoPlay
          webkit-playsinline=""
          loop
          src={videoUrl}
        ></video>
      </div>
    </div>
  );
};

export default HeroPhoneBlock;
