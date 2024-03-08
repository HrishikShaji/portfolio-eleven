"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { data } from "./lib/data";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	return (
		<main>
			<Image
				className="w-screen fixed top-0 -z-10 left-0 h-screen object-cover"
				src={data.personal.img}
				alt="image"
				height={1000}
				width={1000}
			/>
			<Hero />
			<About />
			<Features />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
