"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Preloader = () => {
	const refOne = useRef<HTMLDivElement>(null);
	const refTwo = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.to(refTwo.current, {
				yPercent: -100,
				duration: 0.75,
			}).to(
				refOne.current,
				{
					yPercent: -100,
					duration: 0.75,
				},
				0.75,
			);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className="h-screen w-full bg-white fixed top-0 z-[100]" ref={refOne}>
			<div className="h-full w-full bg-black" ref={refTwo}></div>
		</div>
	);
};
