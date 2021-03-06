import Title from "../../components/PortTitle";
import { useState } from "react";
import { portfolioData } from "../../components/portfolioData";
import PortImage from "../../components/PortImage";
import { useRef } from "react";
import { useEffect } from "react";

const Portfolio01 = () => {
  const [rotationPosition, setRotation] = useState(
    new Array(portfolioData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const newRotation = Math.random() * 20 * (Math.round(Math.random) ? 1 : -1);
    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <div>
      <div className="main-container" id="main-container">
        <div className="title-container">
          {portfolioData.map(({ website, title }, index) => {
            return (
              <Title
                key={index}
                title={title}
                index={index}
                setRotation={handleSetRotation}
                setIndex={setActiveIndex}
                website={website}
              />
            );
          })}
        </div>
        <div className="image-container">
          {portfolioData.map(
            ({ url, title, description, subTitle, tools }, index) => {
              return (
                <PortImage
                  key={index}
                  url={url}
                  title={title}
                  active={activeIndex === index}
                  rotationPosition={rotationPosition[index]}
                  description={description}
                  subTitle={subTitle}
                  tools={tools}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio01;
