"use client";

import { useLayoutEffect, useRef } from "react";
import Marquee from "./Marquee";
import gsap from "gsap";

const data = [
  "RESPONSIVE DESIGN",
  "USER-FRIENDLY INTERFACE",
  "SCALABILITY",
  "PERFORMANCE",
  "CROSS-BROWSER COMBATIBILITY",
  "SEARCH ENGINE OPTIMIZTION(SEO)",
];
export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const yValues = [-100, 0, 100];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });
      tl.from(marqueeRefs.current, { y: (i) => yValues[i] }, 0);
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={containerRef}
      className="py-40 relative w-full  text-white flex justify-center  overflow-hidden items-center"
    >
      <div className=" w-screen top-0 flex flex-col gap-2 ">
        <div className="w-fit" ref={(el) => (marqueeRefs.current[0] = el)}>
          <Marquee
            word={`${data[0]}#${data[1]}#`}
            size="100px"
            initialDirection={1}
            scroll={true}
            speed={0.09}
          />
        </div>
        <div className="w-fit" ref={(el) => (marqueeRefs.current[1] = el)}>
          <Marquee
            word={`${data[2]}#${data[3]}#${data[2]}#${data[3]}#`}
            size="100px"
            initialDirection={1}
            scroll={true}
            speed={0.1}
          />
        </div>
        <div className="w-fit" ref={(el) => (marqueeRefs.current[2] = el)}>
          <Marquee
            word={`${data[4]}#${data[5]}#`}
            size="100px"
            initialDirection={1}
            scroll={true}
            speed={0.12}
          />
        </div>
      </div>
    </div>
  );
};
