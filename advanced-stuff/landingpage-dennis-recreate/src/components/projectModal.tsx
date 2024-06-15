"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectModalProps {
  active: boolean;
  index: number;
  projects: any;
}

const ProjectModal = ({ active, index, projects }: ProjectModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const leftHandler = (e: MouseEvent) => {
      const { pageX, pageY } = e;

      ref.current?.animate(
        {
          top: `${pageY - 350/ 2}px`,
          left: `${pageX - 400/ 2}px`,
        },
        { duration: 800, fill: "both" }
      );

      mouseRef.current?.animate(
        {
          top: `${pageY -  40}px`,
          left: `${pageX - 40}px`,
        },
        { duration: 400, fill: "both" }
      );
    };

    window.addEventListener("mousemove", leftHandler);

    return () => {
      window.removeEventListener("mousemove", leftHandler);
    };
  });
  if (active || !active) {
    return (
      <>
        <div
          ref={ref}
          className="flex items-center justify-center overflow-hidden absolute h-[350px] w-[400px] left-0 top-0 pointer-events-none"
          style={{
            scale: active ? 1 : 0,
            transition: "scale .3s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          <div className="flex flex-col h-full w-full relative ">
            {projects.map((project: any) => (
              <div
                className="h-[350px] w-[400px] flex items-center justify-center relative"
                style={{
                  top: `${index * -100}%`,
                  backgroundColor: project.color,
                  transition: "top 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
                }}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="object-contain object-center h-[350px] w-[350px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-[80px] w-[80px] bg-blue-700 rounded-full absolute pointer-events-none grid place-items-center"
          ref={mouseRef}
          style={{
            scale: active ? 1 : 0,
            transition: "scale .3s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
            <p>View</p>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ProjectModal;
