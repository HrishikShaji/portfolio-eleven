"use client";

import { data } from "../lib/data";

export const About = () => {
	return (
		<div className="px-10 w-full">
			<p className="text-2xl mix-blend-difference text-white ">
				{data.about.description}
			</p>
		</div>
	);
};
