import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="w-full p-10 text-white flex z-50 justify-between mix-blend-difference bg-black fixed top-0">
			<h1 className="text-3xl font-semibold ">HRISHIK SHAJI.</h1>
			<div className="flex flex-col bg-white text-black rounded-md   p-2">
				<Link href="#about">ABOUT</Link>
				<Link href="#projects">PROJECTS</Link>
				<Link href="#contact">CONTACT</Link>
			</div>
		</div>
	);
};
