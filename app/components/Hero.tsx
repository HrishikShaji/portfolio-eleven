"use client";

import Image from "next/image";
import { data } from "../lib/data";

export const Hero = () => {
	return (
		<div className="h-screen w-full bg-neutral-700 relative flex justify-center items-center">
			<div className="sticky top-0 w-full h-full">
				<Image
					className="w-full h-full object-cover"
					src={data.personal.img}
					alt="image"
					height={1000}
					width={1000}
				/>
			</div>
			<div className=" absolute mix-blend-difference top-40 left-10 flex flex-col gap-2">
				<h1 className="text-6xl text-white ">ANAKIN SKYWALKER.</h1>
				<h1 className="text-6xl text-white ">FREELANCE WEB DEVELOPER.</h1>
			</div>
		</div>
	);
};
