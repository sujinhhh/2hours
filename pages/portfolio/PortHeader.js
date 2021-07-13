import { useRef, useState } from "react";

const PortHeader = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="port-header">
      <h2>
        I Do ...
        <div className="mask">
          <span className={active ? "active" : "up"}>a theater.</span>
          <span>a gym.</span>
          <span>a concert hall.</span>
          <span>an arcade.</span>
        </div>
      </h2>
    </div>
  );
};

export default PortHeader;
