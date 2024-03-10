"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const yValues = [300, 300];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: headingContainerRef.current,
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "bottom 80%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative flex p-10 items-center"
    >
      <div
        ref={headingContainerRef}
        className="  flex flex-col w-full gap-2 justify-end"
      >
        <h1
          ref={(el) => (headingRefs.current[0] = el)}
          className="text-6xl font-righteous text-white smooth"
        >
          HRISHIK SHAJI.
        </h1>
        <h1
          className="text-6xl flex-shrink-0 font-righteous text-white smooth"
          ref={(el) => (headingRefs.current[1] = el)}
        >
          WEB DEVELOPER.
        </h1>
      </div>
    </div>
  );
};
