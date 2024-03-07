"use client";

import Marquee from "./Marquee";

const data = [
  "RESPONSIVE DESIGN",
  "USER-FRIENDLY INTERFACE",
  "SCALABILITY",
  "PERFORMANCE",
  "CROSS-BROWSER COMBATIBILITY",
  "SEARCH ENGINE OPTIMIZTION(SEO)",
];
export const Features = () => {
  return (
    <div className="py-40 relative w-full  text-white flex justify-center  overflow-hidden items-center">
      <div className=" w-screen top-0 flex flex-col gap-2 ">
        <div className="w-fit">
          <Marquee
            word={`${data[0]}#${data[1]}#`}
            size="100px"
            initialDirection={1}
            scroll={true}
            speed={0.09}
          />
        </div>
        <div className="w-fit">
          <Marquee
            word={`${data[2]}#${data[3]}#${data[2]}#${data[3]}#`}
            size="100px"
            initialDirection={1}
            scroll={true}
            speed={0.1}
          />
        </div>
        <div className="w-fit">
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
