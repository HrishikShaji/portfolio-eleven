"use client";

import { useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";

export default function Home() {
  const scrollbar = useRef<BaseScrollbar | null>(null);

  useEffect(() => {
    console.log(scrollbar.current);
  }, []);

  return (
    <div className="App">
      <Scrollbar
        ref={scrollbar}
        plugins={{
          overscroll: {
            effect: "bounce",
          } as const,
        }}
      >
        <Hero />
        <About />
        <Features />
      </Scrollbar>
    </div>
  );
}
