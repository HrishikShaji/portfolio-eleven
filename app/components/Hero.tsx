"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Hero = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	const yValues = [700, 50];

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			});
			tl.from(headingRefs.current, { y: (i) => yValues[i] }, 0);
		});

		return () => ctx.revert();
	}, []);
	return (
		<div
			ref={containerRef}
			className="h-screen w-full relative flex justify-center items-center"
		>
			<div className=" absolute top-40 left-10 flex flex-col gap-2">
				<h1
					ref={(el) => (headingRefs.current[0] = el)}
					className="text-6xl font-righteous text-white smooth"
				>
					ANAKIN SKYWALKER.
				</h1>
				<h1
					className="text-6xl text-white smooth"
					ref={(el) => (headingRefs.current[1] = el)}
				>
					FREELANCE WEB DEVELOPER.
				</h1>
			</div>
		</div>
	);
};
