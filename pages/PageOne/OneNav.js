import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function OneNav() {
  return (
    <div className="one-nav-container">
      <ul className="one-menu">
        <li> Resume</li>
        <li> Cover letter</li>
        <li>
          <AiFillGithub size="30px" />
          <AiFillLinkedin
            size="30px"
            color="#0b65c2"
            style={{ marginLeft: 10 }}
          />
        </li>
      </ul>
    </div>
  );
}

export default OneNav;
