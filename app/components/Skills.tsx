import { data } from "../lib/data";

export const Skills = () => {
	return (
		<div className="p-20 text-white h-full  w-full">
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-4 gap-2 w-full ">
					{data.skills.data.map((skill, i) => (
						<div
							key={i}
							className="text-white flex items-center justify-center"
						>
							<h1 className="flex-shrink-0">{skill.name}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
