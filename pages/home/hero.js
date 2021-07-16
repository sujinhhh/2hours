import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { differentImage } from "../../redux/reducers/changeImage";

const Hero = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.changeImage.image);

  console.log(count);

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="card">
          <div className="info">
            <h1 className="title">해보지머</h1>
            <p>
              “In some ways, programming is like painting. You start with a
              blank canvas and certain basic raw materials. You use a
              combination of science, art, and craft to determine what to do
              with them.”{" "}
            </p>

            <div className="menu">
              <button>me</button>
              <button>work</button>
              <button>Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
