"use client";

import Animation1 from "@/components/animation1";
import Descriptions from "@/components/descriptions";
import Projects from "@/components/projects";
import LocomotiveScroll from "locomotive-scroll";

const Page = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-hidden pb-20">
      <Animation1 />
      <Descriptions />
      <Projects />
      {/* <div className="h-[400vh]"></div> */}
    </div>
  );
};

export default Page;
