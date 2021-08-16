import HeroHeader from "./HeroHeader";
import HeroCollege from "./HeroCollege";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";

const HeroSecond = () => {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollege />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
    </div>
  );
};

export default HeroSecond;
