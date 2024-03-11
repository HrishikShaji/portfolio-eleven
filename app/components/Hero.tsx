"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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

      gsap.from(headingRefs.current, {
        delay: 1,
        duration: 1,
        stagger: 0.5,
        yPercent: 300,
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
        <div className="overflow-hidden">
          <h1
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-5xl sm:text-9xl font-righteous  text-white smooth"
          >
            HRISHIK SHAJI.
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className=" text-5xl sm:text-9xl flex-shrink-0 font-righteous text-white smooth"
            ref={(el) => (headingRefs.current[1] = el)}
          >
            WEB DEVELOPER.
          </h1>
        </div>
      </div>
      <div id="about" className="absolute bottom-[60%] "></div>
    </div>
  );
};
