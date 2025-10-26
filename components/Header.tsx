"use client";
import Link from "next/link";
import LeftBracket from "next/image";
import RightBracket from "next/image";
import { useState } from "react";
import { useGlobalUI } from "@/app/context/GlobalUiContext";

export default function Header() {
  const { hideEnterCode } = useGlobalUI();

  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
        <div className="flex flex-row pt-1 scale-75 justify-center items-center">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000"
            href="/"
          >
            SKINSTRIC
          </Link>
          <LeftBracket
            src="/assets/bracket-left.svg"
            alt="left bracket"
            width={4}
            height={17}
          />

          <p className="text-[#1a1b1c83] text-opacity-70  font-semibold text-sm ml-1.5 mr-1.5">
            INTRO
          </p>
          <RightBracket
            src="/assets/bracket-right.svg"
            alt="right bracket"
            width={4}
            height={17}
          />
        </div>
        {!hideEnterCode && (
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px] ">
            ENTER CODE
          </button>
        )}
      </div>
    </>
  );
}
