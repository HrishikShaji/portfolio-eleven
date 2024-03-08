"use client";

import Image from "next/image";
import { data } from "../lib/data";
import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const yValues = [
    -250, -500, -350, -500, -700, -620, -580, -900, -640, -700, -900, -740,
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

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

  return (
    <div
      className="px-10 pt-40 relative text-white  h-[1700px]  w-full"
      ref={containerRef}
    >
      <h1 className="text-9xl  text-white" ref={titleRef}>
        MY PROJECTS
      </h1>
      <div className=" bg-teal-500 gap-20 w-full ">
        {data.projects.data.map((project, i) => (
          <div
            ref={(el) => (projectRefs.current[i] = el)}
            key={i}
            className="absolute h-[300px] w-[300px] overflow-hidden"
            style={{ top: coordinates[i].top, left: coordinates[i].left }}
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
