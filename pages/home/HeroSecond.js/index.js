import HeroHeader from "./HeroHeader";
import HeroCollege from "./HeroCollege";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";
import HeroFooter from "./HeroFooter";

const HeroSecond = () => {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollege />
        <HeroPhoneBlock />
      </div>
      {/* <HeroUsedBy /> */}
      <HeroFooter />
    </div>
  );
};

export default HeroSecond;
