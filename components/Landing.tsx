"use client";
import { useState } from "react";
import Link from "next/link";
import Description from "./sub-components/Description";
import RightDiamond from "next/image";
import LeftDiamond from "next/image";
import LeftArrow from "next/image";
import RightArrow from "next/image";
import { useGlobalUI } from "@/app/context/GlobalUIContext";

export default function Landing() {
  const { setHideEnterCode } = useGlobalUI();
  const [hoveredButton, setHoveredButton] = useState<
    "take-test" | "discover" | null
  >(null);

  return (
    <>
      <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
        <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="absolute inset-0 flex items-center justify-center lg:hidden">
            <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center lg:hidden">
            <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
          </div>
          <div
            id="main-heading"
            className={`relative z-10 text-center transition-transform duration-700 ease-in-out ${
              hoveredButton === "take-test"
                ? "-translate-x-[60%]"
                : hoveredButton === "discover"
                ? "translate-x-[60%]"
                : "translate-x-0"
            }`}
          >
            <h1
              className="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none opacity-0"
              style={{
                opacity: 1,
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Sophisticated
              <br />
              <span
                className="block text-[#1A1B1C]"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(10px, 0px)",
                }}
              >
                skincare
              </span>
            </h1>
          </div>
          <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground text-[#1a1b1c83]">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>
          <Description/>
          <div
            className="hidden lg:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[602px] h-[602px] transition-opacity duration-500 ease-in-out opacity-100"
            id="left-section"
            style={{ opacity: 1 }}
          >
            <div
              className={`relative w-full h-full ${
                hoveredButton === "take-test" ? "opacity-0 transition-opacity duration-500 ease-in-out " : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <figure className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out">
                <LeftDiamond
                  src="/assets/diamond-left.svg"
                  alt="Left Diamond"
                  width={700}
                  height={602}
                />
              </figure>
              <button
                id="discover-button"
                onMouseEnter={() => setHoveredButton("discover")}
                onMouseLeave={() => setHoveredButton(null)}
                className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 right-[100px] -translate-y-1/2 translate-x-1/5 xl:translate-x-1/6 [@media(width&gt;=1920px)]:translate-x-1/20 px-3 py-1"
              >
                <div className="relative w-[45px] h-[45px] rotate-45 group-hover:scale-110 duration-300">
                  <figure className="absolute rotate-315 scale-[0.9] cursor-pointer group-hover:scale-105 duration-300">
                    <LeftArrow
                      src="/assets/arrow-left.svg"
                      alt="Left Arrow"
                      width={44}
                      height={44}
                    />
                  </figure>
                </div>
                <span>DISCOVER A.I.</span>
              </button>
            </div>
          </div>
          <div
            id="right-section"
            className="hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-[602px] h-[602px] transition-opacity duration-500 ease-in-out opacity-100"
            style={{ opacity: 1 }}
          >
            <div
              className={`relative w-full h-full ${
                hoveredButton === "discover" ? "opacity-0 transition-opacity duration-500 ease-in-out " : "opacity-100 transition-opacity duration-500 ease-in-out "
              }`}
            >
              <figure className="absolute inset-0 flex items-center justify-center">
                <RightDiamond
                  src="/assets/diamond-right.svg"
                  alt="Right Diamond"
                  width={700}
                  height={602}
                />
              </figure>
              <Link href="/testing">
                <button
                  id="take-test-button"
                  onMouseEnter={() => setHoveredButton("take-test")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => setHideEnterCode(true)}

                  className="absolute group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 left-[100px] -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 [@media(width&gt;=1920px)]:-translate-x-1/20 px-3 py-1"
                >
                  TAKE TEST
                  <div className="relative w-[45px] h-[45px] rotate-45 group-hover:scale-110 duration-300">
                    <figure className="absolute rotate-315 scale-[0.9] cursor-pointer group-hover:scale-105 duration-300">
                      <RightArrow
                        src="/assets/arrow-right.svg"
                        alt="Right Arrow"
                        width={44}
                        height={44}
                      />
                    </figure>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
