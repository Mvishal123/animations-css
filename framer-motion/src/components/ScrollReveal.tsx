import React from "react";
import Reveal from "./animations/reveal";

const ScrollReveal = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          height: "100vh",
          backgroundColor: "lightcyan",
        }}
      ></div>
      <div
        style={{
          height: "70vh",
          backgroundColor: "lightcyan",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Reveal>
          <div className="red-box"></div>
        </Reveal>
      </div>
      <div
        style={{
          height: "70vh",
          backgroundColor: "lightcyan",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Reveal>
          <div className="red-box"></div>
        </Reveal>
      </div>
      <div
        style={{
          height: "80vh",
          backgroundColor: "lightcyan",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Reveal>
          <div className="red-box"></div>
        </Reveal>
      </div>
    </div>
  );
};

export default ScrollReveal;
