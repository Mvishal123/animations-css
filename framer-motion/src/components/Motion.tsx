import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Motion = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.button
        layout
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Open/Close
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "red",
              borderRadius: "10%",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              y: [0, 0, -150, -150, 0],
            }}
            exit={{
              scale: 0,
              opacity: 0,
              rotate: 0,
            }}
            transition={{
              bounce: true,
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Motion;
