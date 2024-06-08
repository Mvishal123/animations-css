import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Reveal = ({ children, ...props }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.30, once: true});

  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    } else {
      animate.start("hidden");
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      style={props.style}
      variants={{
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
        hidden: {
          scale: 0.5,
          opacity: 0,
          y: 75,
        },
      }}
      initial="hidden"
      animate={animate}
      transition={{
        ease: "easeInOut",
        bounce: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
