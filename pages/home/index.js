import Hero from "./hero";
import LeftContainer from "./landing/LeftContainer";
import RightContainer from "./landing/RightContainer";

const Main = () => {
  return (
    <div className="home">
      <div className="hover-left">
        <div className="hover-right">
          <LeftContainer />
          <RightContainer />
          <h1 className="center-text">Stories</h1>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Main;
