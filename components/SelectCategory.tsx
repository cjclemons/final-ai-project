"use client";
import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import { useState } from "react";

export default function SelectCategory() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>
      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`absolute transition-all duration-400 ${
                hovered
                  ? "opacity-100 w-[602px] h-[602px]"
                  : "opacity-0 w-[400px] h-[400px]"
              }`}
            >
              <DiamondSmall
                src="/assets/diamond-small.svg"
                alt="Diamond Small"
                width={408}
                height={408}
                loading="lazy"
                sizes="100vw"
                className="object-contain"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <DiamondMedium
                src="/assets/diamond-medium.svg"
                alt="Diamond Medium"
                width={448}
                height={448}
                loading="lazy"
                sizes="100vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <DiamondLarge
                src="/assets/diamond-large.svg"
                alt="Diamond Large"
                width={484}
                height={484}
                loading="lazy"
                sizes="100vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
            <div className="flex items-center justify-center col-start-2">
              <a href="/summary">
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-105 transition-transform duration-300 hover--demo"
                >
                  <span className="transform -rotate-45">Demographics</span>
                </button>
              </a>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Cosmetic Concerns</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Skin Type Details</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Weather</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
