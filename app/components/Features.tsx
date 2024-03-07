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
		<div className="h-screen relative w-full  text-white flex justify-center items-center">
			<div className="absolute top-0 ">
				<Marquee
					word={`${data[0]}#${data[1]}#`}
					size="100px"
					initialDirection={1}
					scroll={true}
					speed={0.09}
				/>
			</div>
		</div>
	);
};
