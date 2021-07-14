import Hero from "./hero";
import LeftContainer from "./landing/leftContainer";
import RightContainer from "./landing/rightContainer";

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
