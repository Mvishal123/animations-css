import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Two = () => {
  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
      <motion.button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "red",
          border: "none",
          borderRadius: "10px",
          color: "whitesmoke",
          fontFamily: "monospace",
          cursor: "pointer",
          margin: "1rem 0"
        }}
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: "2.5deg" }}
      >
        Click me
      </motion.button>
      <motion.button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "green",
          border: "none",
          borderRadius: "10px",
          color: "whitesmoke",
          fontFamily: "monospace",
          cursor: "pointer",
        }}
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
      >
        Click me
      </motion.button>
    </MotionConfig>
  );
};

export default Two;
