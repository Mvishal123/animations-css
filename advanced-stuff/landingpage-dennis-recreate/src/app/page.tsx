"use client";

import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
};

export default Page;
