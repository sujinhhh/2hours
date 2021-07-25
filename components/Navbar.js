import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  }, []);
  return (
    <nav>
      <div className="burger" onClick={() => setSidebar(!sidebar)}>
        <Link href="#">
          <img src={sidebar ? "./close.png" : "./open.png"} alt="" />
        </Link>
      </div>
      <div
        className={sidebar ? "menu-mobile" : "menu-desktop"}
        onClick={() => setSidebar(false)}
      >
        <div />
        {/* <div className={sidebar ? "menu-mobile" : "menu-desktop"}>
          <FaIcons.FaHome />
        </div> */}
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/gallery">
          <a>Art Gallery</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
