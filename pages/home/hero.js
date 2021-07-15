import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="card">
          <div className="info">
            <h1 className="title">Welcome</h1>
            <h2>If you can dream it, you can do it!</h2>
            <h3>
              “In some ways, programming is like painting. You start with a
              blank canvas and certain basic raw materials. You use a
              combination of science, art, and craft to determine what to do
              with them.”{" "}
            </h3>

            <div className="menu">
              {/* <Link to="/about"> */}
              <button>me</button>
              {/* </Link>
              <Link to="/work"> */}
              <button>work</button>
              {/* </Link>
              <Link to="/blog"> */}
              <button>Blog</button>
              {/* </Link> */}
            </div>
            <div className="shop">
              {/* <Link to="/work"> */}
              <button>Personal Projects</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
