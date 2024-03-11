"use client";

import Link from "next/link";
import { AnimatedLink } from "./AnimatedLink";

export const Navbar = () => {
	return (
		<div className="w-full p-10 text-white flex z-50 justify-between mix-blend-difference bg-black fixed top-0">
			<Link href="#home">
				<h1 className="text-3xl font-semibold font-righteous">HRISHIK </h1>
			</Link>
			<div className="flex flex-col bg-white text-black rounded-md font-poppins font-semibold  p-2">
				<AnimatedLink href="#about" label="ABOUT" />
				<AnimatedLink href="#projects" label="PROJECTS" />
				<AnimatedLink href="#contact" label="CONTACT" />
			</div>
		</div>
	);
};
