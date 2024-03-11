"use client";

import { useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });
      tl.to(paraRef.current, { y: -200 }, 0);
    });

    return () => mm.revert();
  }, []);
  return (
    <div ref={containerRef} className="px-10 w-full">
      <p
        ref={paraRef}
        className="smooth font-poppins text-center sm:text-left sm:text-2xl text-white "
      >
        {data.about.description}
      </p>
    </div>
  );
};
