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
    <main className="pb-[100vh]">
      <div
        style={{ backgroundImage: `url(${data.personal.img})` }}
        className="z-10 bg-black bg-fixed bg-cover"
      >
        <div className="z-20 ">
          <Hero />
          <About />
          <Features />
          <Skills />
          <Projects />
        </div>
      </div>
      <div className="-z-10 fixed bottom-0 bg-white left-0 h-full w-full">
        <Contact />
      </div>
    </main>
  );
}
