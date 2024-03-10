"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";

export const Navbar = () => {
	const ref = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(ref.current, { yPercent: -100 })
		})

		return () => ctx.revert()
	}, []);

	const onEnter = (e: MouseEvent) => {
		let q = gsap.utils.selector(e.currentTarget);
		gsap.to(ref.current, { yPercent: 0 })
		gsap.to(q(".inner"), { yPercent: 100 });
	};
	const onLeave = (e: MouseEvent) => {
		let q = gsap.utils.selector(e.currentTarget);
		gsap.to(ref.current, { yPercent: -100 })
		gsap.to(q(".inner"), { yPercent: 0 });
	};

	return (
		<div className="w-full p-10 text-white flex z-50 justify-between mix-blend-difference bg-black fixed top-0">
			<h1 className="text-3xl font-semibold font-righteous">HRISHIK </h1>
			<div className="flex flex-col bg-white text-black rounded-md font-poppins font-semibold  p-2">
				<Link
					href="#about"
					className="overflow-hidden relative"
					onMouseEnter={onEnter}
					onMouseLeave={onLeave}
				>
					<h1 className="inner-two absolute" ref={ref}>ABOUT</h1>
					<h1 className="inner">ABOUT</h1>
				</Link>
				<Link href="#projects">PROJECTS</Link>
				<Link href="#contact">CONTACT</Link>
			</div>
		</div>
	);
};
