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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
