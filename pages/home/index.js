import Hero from "./hero";
import CommonContainer from "./landing/CommonContainer";
import HeroSecond from "./HeroSecond.js";

const Homepage = () => {
  return (
    <div>
      <div className="home">
        <div className="hover-left" />
        <div className="hover-right" />
        <CommonContainer />
        <Hero />
      </div>
      <HeroSecond />
    </div>
  );
  å;
};

export default Homepage;
