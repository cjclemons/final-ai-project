"use client";
import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import CameraIcon from "next/image";

export default function CameraLoading() {
  return (
    <>
      <div className="md:h-[85vh] h-[65vh] bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-[70vh] overflow-auto">
          <div className="flex-0 flex flex-col md:flex-row items-center justify-center relative">
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
              className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
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

            <div className="absolute inset-0 flex flex-col items-center justify-center animate-pulse">
              <CameraIcon
                src="/assets/camera-icon.svg"
                alt="Camera Icon"
                width={136}
                height={136}
                loading="lazy"
                className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
                style={{ color: "transparent" }}
              />
              <p className="absolute font-semibold text-sm md:text-base leading-[24px] tracking-tight translate-y-22 animate-pulse">
                SETTING UP CAMERA ...
              </p>
            </div>
          </div>
          <div className="mt-0 text-center">
            <p className="text-xs md:text-sm mb-4 leading-6">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8">
              <p className="text-xs md:text-sm leading-6">
                ◇ NEUTRAL EXPRESSION
              </p>
              <p className="text-xs md:text-sm leading-6">◇ FRONTAL POSE</p>
              <p className="text-xs md:text-sm leading-6">
                ◇ ADEQUATE LIGHTING
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
