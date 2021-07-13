import { useRef } from "react";

const Curtain = () => {
  const planeEl = useRef();
  const container = useRef();
  return (
    <div className="Canvas" ref={container}>
      <div className="plane-imgage" ref={planeEl}>
        <img src="./flower1.png" alt="flower" data-sampler="planeTexture" />
        <img src="./flower2.png" alt="flower" data-sampler="planeTexture" />
        <img src="./flower3.png" alt="flower" data-sampler="planeTexture" />
      </div>
    </div>
  );
};

export default Curtain;
