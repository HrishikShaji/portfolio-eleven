"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";

interface AnimatedLinkProps {
	href: string;
	label: string;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, label }) => {
	const refOne = useRef<HTMLHeadingElement>(null);
	const refTwo = useRef<HTMLHeadingElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(refOne.current, { yPercent: -100 });
		});

		return () => ctx.revert();
	}, []);

	const onEnter = () => {
		gsap.to(refOne.current, { yPercent: 0 });
		gsap.to(refTwo.current, { yPercent: 100 });
	};
	const onLeave = () => {
		gsap.to(refOne.current, { yPercent: -100 });
		gsap.to(refTwo.current, { yPercent: 0 });
	};

	return (
		<Link
			href={href}
			className="overflow-hidden relative"
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
		>
			<h1 className="inner-two absolute" ref={refOne}>
				{label}
			</h1>
			<h1 className="inner" ref={refTwo}>
				{label}
			</h1>
		</Link>
	);
};
