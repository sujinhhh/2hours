import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import OnOff from "./parts/onOff";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

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
