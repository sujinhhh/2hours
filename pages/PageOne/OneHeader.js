import React, { useEffect } from "react";
import gsap from "gsap";

function OneHeader() {
  useEffect(() => {
    var text = document.querySelector("h1"),
      char = text.querySelectorAll("span"),
      replaceChar = text.querySelectorAll('span:not([data-char="."])');

    var tl = gsap.timeline();

    tl.set(char, {
      yPercent: -110,
    });
    tl.set(text, {
      autoAlpha: 1,
    });
    tl.to(char, {
      duration: 1,
      yPercent: 0,
      stagger: 0.05,
      ease: "expo.inOut",
    }).to(replaceChar, {
      duration: 1,
      yPercent: 110,
      ease: "expo.inOut",
      repeat: 0,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="one-container">
      <h1>
        <span data-char="S">S</span>
        <span data-char="U">U</span>
        <span data-char="J">J</span>
        <span data-char="I">I</span>
        <span data-char="N">N</span>
        <span data-char=".">.</span>
        <span data-char="L">L</span>
        <span data-char="E">E</span>
        <span data-char="E">E</span>
      </h1>
      <h2>
        Hi, My name Sujin Lee. Thank you for visiting my website. On this
        website, I would like to let you know who am I, what I like about, what
        can I do and why you should work with me : &#41;. This website build
        with Next JS, SCSS, GSAP
      </h2>
    </section>
  );
}

export default OneHeader;
