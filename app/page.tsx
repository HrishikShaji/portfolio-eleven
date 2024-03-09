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
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);

	const imageRef = useRef<HTMLImageElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: containerRef.current,
				pin: imageRef.current,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				markers: true,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<main className="pb-[1000px]">
			<div className="z-10 bg-black ">
				<Hero />
				<About />
				<Features />
				<Skills />
				<Projects />
			</div>
			<div className="-z-10 fixed bottom-0 bg-white left-0 h-full w-full">
				<Contact />
			</div>
		</main>
	);
}
