import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const InView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: .9 });

  return (
    <div
      style={{
        backgroundColor: inView ? "lightyellow" : "lightcyan",
        transition: ".5s background",
      }}
    >
      <div
        style={{
          border: "1px solid gray",
          height: "100vh",
        }}
      />
      <div ref={ref} style={{ border: "1px solid gray", height: "100vh" }} />
    </div>
  );
};

export default InView;
