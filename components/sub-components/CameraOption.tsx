"use client";
import { useEffect, useRef, useState } from "react";
import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import CameraIcon from "next/image";
import ScanLine from "next/image";
import Link from "next/link";

import { PhaseTwoDataHandling } from "@/app/data-handling/PhaseTwoDataHandling";
import { useImage } from "@/app/context/ImageContext";
import { usePictureData } from "@/app/context/PictureDataContext";

export default function CameraOption() {
  const { clickedCamera, setClickedCamera } = useImage();
  
  return (
    <>
      <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>

      <DiamondLarge
        src="/assets/diamond-large.svg"
        alt="Diamond Large"
        width={482}
        height={482}
        loading="lazy"
        className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200"
        style={{ color: "transparent" }}
      />

      <DiamondMedium
        src="/assets/diamond-medium.svg"
        alt="Diamond Medium"
        width={444.34}
        height={444.34}
        loading="lazy"
        className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190"
        style={{ color: "transparent" }}
      />
      <DiamondSmall
        src="/assets/diamond-small.svg"
        alt="Diamond Small"
        width={405.18}
        height={405.18}
        loading="lazy"
        className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
        style={{ color: "transparent" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <CameraIcon
          src="/assets/camera-icon.svg"
          alt="Camera Icon"
          width={136}
          height={136}
          loading="lazy"
          className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
          style={{ color: "transparent" }}
          onClick={() => setClickedCamera(true)}
        />

        <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
          <p className="text-xs md:text-sm font-normal mt-1 leading-[24px]">
            ALLOW A.I.
            <br />
            TO SCAN YOUR FACE
          </p>
          <ScanLine
            src="/assets/scan-line.svg"
            alt="Scan Line"
            width={66}
            height={59}
            loading="lazy"
            className="absolute hidden md:block md:right-[143px] md:top-[20px]"
            style={{ color: "transparent" }}
          />
        </div>
      </div>

      {clickedCamera ? (
        <div className="absolute md:top-[43%] md:left-[360px] w-[352px] z-100">
          <div className="bg-[#1A1B1C] pt-4 pb-2">
            <h2 className="text-[#FCFCFC] text-base font-semibold mb-12 leading-[24px] pl-4">
              ALLOW A.I. TO ACCESS YOUR CAMERA
            </h2>
            <div className="flex mt-4 border-t border-[#FCFCFC] pt-2">
              <button
                className="px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500"
                onClick={() => setClickedCamera(false)}
              >
                DENY
              </button>
              <Link href={"/camera"}>
                <button
                  className="px-5 md:translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300"
                  onClick={() => setClickedCamera(false)}
                >
                  ALLOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
