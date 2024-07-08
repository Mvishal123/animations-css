"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Salar de Atacama",

    src: "salar_de_atacama.jpg",
  },

  {
    title: "Valle de la luna",

    src: "valle_de_la_muerte.jpeg",
  },

  {
    title: "Miscanti Lake",

    src: "miscani_lake.jpeg",
  },

  {
    title: "Miniques Lagoons",

    src: "miniques_lagoon.jpg",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imgRef.current,
      pin: true,
      start: "0px top+=200",
      end: document.body.offsetHeight - window.innerHeight,
    });
  }, []);
  return (
    <div className="relative mx-[80px] mt-[200px]">
      <div className="flex gap-[20px] justify-between">
        <div className="h-[80vh] w-[40%] flex-shrink-0 relative">
          <img
            ref={imgRef}
            src={`/${currentProject.src}`}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex text-[1.2vw] gap-20">
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
          <p className="flex items-end text-[.9vw]">
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div>
          {projects.map((project) => (
            <p
              className="text-right text-[4vw] m-0 border-t mt-10 last-of-type:border-b last-of-type:mt-10 last-of-type:h-[130px]"
              onMouseOver={() => setCurrentProject(project)}
            >
              {project.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
