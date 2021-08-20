import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const windowResize = () => {
    if (window.innerWidth >= 425) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    windowResize();
  }, []);

  return (
    <nav>
      <div className="burger" onClick={() => setSidebar(!sidebar)}>
        <Link href="#">
          <img src={sidebar ? "./close.png" : "./open.png"} alt="" />
        </Link>
      </div>
      <div
        className={sidebar ? "menu-mobile active" : "menu-desktop"}
        onClick={() => setSidebar(false)}
      >
        {/* <div className={sidebar ? "menu-mobile" : "menu-desktop"}>
          <FaIcons.FaHome />
        </div> */}
        <Link href="/">
          <a className="navItem">Home</a>
        </Link>
        <Link href="/about">
          <a className="navItem">About</a>
        </Link>
        <Link href="/">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
        <Link href="/portfolio">
          <a className="navItem">Portfolio</a>
        </Link>
        <Link href="/gallery">
          <a className="navItem">Art Gallery</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
