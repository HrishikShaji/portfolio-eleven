import { useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";

export const Skills = () => {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.from(barRefs.current, {
        yPercent: 120,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top center",
          markers: true,
        },
      });
      gsap.from(nameRefs.current, {
        delay: 1,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top center",
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-10 text-white h-full  w-full" ref={containerRef}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-full ">
          {data.skills.data.map((skill, i) => (
            <div
              key={i}
              className="text-white flex flex-col gap-2 overflow-hidden items-center justify-end"
            >
              <div
                ref={(el) => (barRefs.current[i] = el)}
                style={{ height: `${(skill.level / 10) * 300}px` }}
                className="w-full rounded-t-md bg-white "
              />
              <h1
                ref={(el) => (nameRefs.current[i] = el)}
                className="flex-shrink-0"
              >
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
