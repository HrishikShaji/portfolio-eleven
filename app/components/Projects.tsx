"use client";

import Image from "next/image";
import { data } from "../lib/data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const yValues = [
    -250, -500, -800, -500, -700, -1020, -580, -900, -640, -700, -900, -740,
  ];

  const coordinates = [
    { top: "500px", left: "50px" },
    { top: "500px", left: "570px" },
    { top: "500px", left: "1100px" },
    { top: "1000px", left: "90px" },
    { top: "1000px", left: "500px" },
    { top: "1000px", left: "1050px" },
    { top: "1500px", left: "150px" },
    { top: "1500px", left: "700px" },
    { top: "1500px", left: "1130px" },
    { top: "2000px", left: "70px" },
    { top: "2000px", left: "500px" },
    { top: "2000px", left: "1000px" },
  ];
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:800px)", () => {
      gsap.set(projectRefs.current, {
        top: (i) => coordinates[i].top,
        left: (i) => coordinates[i].left,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(projectRefs.current, { y: (i) => yValues[i] }, 0);
      const height = containerRef.current?.getBoundingClientRect().height;
      if (height) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          pin: titleRef.current,
          start: "top top",
          end: `bottom bottom`,
          scrub: true,
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      id="projects"
      className="p-10 pt-40  relative text-white h-full sm:h-[1700px]  w-full"
      ref={containerRef}
    >
      <h1
        className="text-6xl sm:text-9xl font-righteous text-white"
        ref={titleRef}
      >
        MY PROJECTS
      </h1>
      <div className="mt-20 sm:mt-0  gap-20 grid grid-cols-2 w-full ">
        {data.projects.data.map((project, i) => (
          <div
            ref={(el) => (projectRefs.current[i] = el)}
            key={i}
            className="sm:absolute h-[100px] w-[100px] sm:h-[300px] sm:w-[300px] overflow-hidden"
          >
            <Image
              src={project.img}
              height={1000}
              width={1000}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
