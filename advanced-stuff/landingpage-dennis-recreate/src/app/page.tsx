"use client";

import Description from "@/components/description";
import Hero from "@/components/hero";
import ProjectSlider from "@/components/project-slider";
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
      <Description />
      <Projects />
      <ProjectSlider />
    </div>
  );
};

export default Page;
