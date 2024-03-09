import { useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../lib/data";
import gsap from "gsap";

export const Skills = () => {
	const barRefs = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const nameRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	const yValues = [
		-100, -200, -300, -100, -200, -300, -100, -200, -300, -100, -200, -300,
		-100, -200, -300, -100,
	];

	const scaleValues = [
		1.2, 1.5, 1.8, 2.5, 2, 1.5, 1, 1.7, 1.5, 2.5, 2.6, 1, 0.7, 1.9, 2.3, 2,
	];

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			const barTween = gsap.from(barRefs.current, {
				paused: true,
				yPercent: 120,
				stagger: 0.05,
			});
			function playBar() {
				barTween.play();
			}

			tl.from(nameRefs.current, {
				y: (i) => yValues[i],
				scale: (i) => scaleValues[i],
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top center",
					end: "top 30%",
					scrub: true,
				},
				onComplete: playBar,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div
			className="px-10 text-white h-full  w-full overflow-y-hidden"
			ref={containerRef}
		>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between w-full ">
					{data.skills.data.map((skill, i) => (
						<div
							key={i}
							className="text-white flex flex-col gap-2  items-center justify-end"
						>
							<div
								ref={(el) => (barRefs.current[i] = el)}
								style={{ height: `${(skill.level / 10) * 300}px` }}
								className="w-full rounded-t-md bg-white "
							/>
							<h1
								ref={(el) => (nameRefs.current[i] = el)}
								className="flex-shrink-0 text-red-500"
							>
								{skill.name}
							</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
