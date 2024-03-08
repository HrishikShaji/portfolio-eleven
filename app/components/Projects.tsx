import Image from "next/image";
import { data } from "../lib/data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const yValues = [
    -100, -50, -30, -300, -220, -120, -280, -160, -240, -10, -110, -240,
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(projectRefs.current, { y: (i) => yValues[i] }, 0);
    });

    return () => ctx.revert();
  }, []);

  const coordinates = [
    { top: "0px", left: "0px" },
    { top: "0px", left: "500px" },
    { top: "0px", left: "1000px" },
    { top: "500px", left: "0px" },
    { top: "500px", left: "500px" },
    { top: "500px", left: "1000px" },
    { top: "1000px", left: "0px" },
    { top: "1000px", left: "500px" },
    { top: "1000px", left: "1000px" },
    { top: "1500px", left: "0px" },
    { top: "1500px", left: "500px" },
    { top: "1500px", left: "1000px" },
  ];

  return (
    <div className="px-10 text-white h-full relative w-full" ref={containerRef}>
      <h1 className="text-9xl sticky top-40 text-white">MY PROJECTS</h1>
      <div className="relative gap-20 w-full h-full">
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
