import { data } from "../lib/data";

export const Skills = () => {
  return (
    <div className="px-10 text-white h-full  w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-full ">
          {data.skills.data.map((skill, i) => (
            <div
              key={i}
              className="text-white flex flex-col gap-2 items-center justify-end"
            >
              <div
                style={{ height: `${(skill.level / 10) * 300}px` }}
                className="w-full rounded-t-md bg-white "
              />
              <h1 className="flex-shrink-0">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
