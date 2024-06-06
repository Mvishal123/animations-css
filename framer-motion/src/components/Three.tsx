import { motion, useAnimationControls } from "framer-motion";
import React from "react";

const Three = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const controls = useAnimationControls();
  const handleClick = () => {
    if (isFirst) {
      controls.start("flipFront");
      setIsFirst(false);
    } else {
      controls.start("flipBack");
      setIsFirst(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <motion.button
        onClick={handleClick}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "purple",
          fontSize: "1.5rem",
          border: "none",
          borderRadius: "10px",
          color: "whitesmoke",
          fontFamily: "monospace",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
      >
        Click me
      </motion.button>
      <motion.div
        style={{ height: 150, width: 150, backgroundColor: "black" }}
        variants={{
          flipFront: { rotate: "360deg", borderRadius: "100%" },
          flipBack: { rotate: "0deg", borderRadius: 0 },
        }}
        animate={controls}
        transition={{ duration: 1, ease: "backInOut" }}
      ></motion.div>
    </div>
  );
};

export default Three;
