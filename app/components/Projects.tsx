import Image from "next/image";
import { data } from "../lib/data";

export const Projects = () => {
  const coordinates = [
    { top: "100px", left: "100px" },
    { top: "500px", left: "500px" },
    { top: "300px", left: "300px" },
    { top: "700px", left: "700px" },
    { top: "1200px", left: "1200px" },
    { top: "100px", left: "100px" },
    { top: "500px", left: "500px" },
    { top: "300px", left: "300px" },
    { top: "700px", left: "700px" },
    { top: "1200px", left: "1200px" },
    { top: "300px", left: "300px" },
    { top: "700px", left: "700px" },
    { top: "1200px", left: "1200px" },
  ];

  return (
    <div className="px-10 text-white h-full  w-full">
      <div className="relative w-full h-full">
        {data.projects.data.map((project, i) => (
          <div
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
