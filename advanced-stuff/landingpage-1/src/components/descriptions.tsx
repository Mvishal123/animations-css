"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const phrases = [
  "Los Flamencos National Reserve",
  "is a nature reserve located",
  "in the commune of San Pedro de Atacama",
  "The reserve covers a total area",
  "of 740 square kilometres (290 sq mi)",
];
const Descriptions = () => {
  return (
    <div className="mt-[600px]">
      <div>
        {phrases.map((phrase) => {
          return <AnimatedText text={phrase} />;
        })}
      </div>
    </div>
  );
};

export default Descriptions;

const AnimatedText = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 1,
      left: 150,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <p
      ref={textRef}
      className="text-4xl font-medium opacity-0 my-4 -left-[200px] relative"
    >
      {text}
    </p>
  );
};
