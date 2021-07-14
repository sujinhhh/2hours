import Hero from "./hero";
import RightContainer from "./landing/RightContainer";
import LeftContainer from "./landing/LeftContainer";

const Main = () => {
  return (
    <div className="home">
      <div className="hover-left" />
      <div className="hover-right" />
      <LeftContainer />
      <RightContainer />
      <h1 className="center-text">해보지머</h1>
      <Hero />
    </div>
  );
  å;
};

export default Main;
