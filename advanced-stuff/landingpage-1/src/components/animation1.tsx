"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const Animation1 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerImgRef = useRef<HTMLImageElement | null>(null);
  const introImgRef = useRef<HTMLImageElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsLoaded(true);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500",
        scrub: true,
      },
    });

    tl.fromTo(
      containerImgRef.current,
      { clipPath: "inset(15%)" },
      { clipPath: "inset(0%)" }
    );

    tl.to(introImgRef.current, { height: "100px" }, 0);
  }, []);

  return (
    <div className="">
      <div
        className="h-[140vh] brightness-75 absolute w-full top-0 z-[0] "
        ref={containerImgRef}
      >
        <img src="/background.jpeg" alt="" className="mx-auto object-cover" />
      </div>

      <div className="flex justify-center mt-[35vh]">
        <img
          src="/intro.png"
          alt=""
          className="h-[350px] w-[280px] z-[2] brightness-[80%] absolute object-cover object-top"
          data-scroll
          data-scroll-speed=".3"
          ref={introImgRef}
        />
        <h1
          className="z-[3] text-[7rem] text-white uppercase font-bold"
          data-scroll
          data-scroll-speed=".5"
        >
          smooth scroll
        </h1>
      </div>
    </div>
  );
};

export default Animation1;
