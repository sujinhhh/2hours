import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const card = useRef(null);
  const title = useRef(null);

  const onButton = (e) => {
    e.target.className = "active";
  };

  const offButton = (e) => {
    e.target.className = "";
  };

  const mouseOn = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const mouseEnter = (e) => {
    card.current.style.transition = "none";
    console.log(title.current);
  };

  const mouseOff = (e) => {
    card.current.style.transition = "all 0.5s ease";
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.current.style.transform = "translateZ(0px)";
  };

  return (
    <div className="hero">
      <div
        onMouseMove={mouseOn}
        onMouseLeave={mouseOff}
        onMouseEnter={mouseEnter}
        className="hero__container"
        ref={card}
      >
        <div className="card" ref={card}>
          <div className="info">
            <h1 className="title" ref={title}>
              Welcome
            </h1>
            <h2>If you can dream it, you can do it!</h2>
            <h3>
              “In some ways, programming is like painting. You start with a
              blank canvas and certain basic raw materials. You use a
              combination of science, art, and craft to determine what to do
              with them.”{" "}
            </h3>

            <div className="menu">
              {/* <Link to="/about"> */}
              <button
                onMouseOver={(e) => onButton(e)}
                onMouseLeave={(e) => offButton(e)}
              >
                me
              </button>
              {/* </Link>
              <Link to="/work"> */}
              <button
                onMouseOver={(e) => onButton(e)}
                onMouseLeave={(e) => offButton(e)}
              >
                work
              </button>
              {/* </Link>
              <Link to="/blog"> */}
              <button
                onMouseOver={(e) => onButton(e)}
                onMouseLeave={(e) => offButton(e)}
              >
                Blog
              </button>
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
