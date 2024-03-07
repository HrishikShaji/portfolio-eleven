"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { data } from "./lib/data";
import { Eyes } from "./components/Eyes";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Image
        className="w-screen fixed top-0 left-0 h-screen object-cover"
        src={data.personal.img}
        alt="image"
        height={1000}
        width={1000}
      />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
