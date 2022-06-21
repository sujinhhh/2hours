import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function OneNav() {
  return (
    <div className="one-nav-container">
      <ul className="one-menu">
        <a href="./bmo.pdf" target="_blank">
          <li> Resume</li>
        </a>
        {/* <li> Cover letter</li> */}
        <li>
          <a
            href="https://github.com/sujinhhh"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/sujin-lee-26694820b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size="30px"
              color="#0b65c2"
              style={{ marginLeft: 10 }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OneNav;
