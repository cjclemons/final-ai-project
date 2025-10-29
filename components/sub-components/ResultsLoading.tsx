"use client";
import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";

export default function ResultsLoading() {
  return (
    <>
      <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-11">
        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
        <DiamondLarge
          src="/assets/diamond-large.svg"
          alt="Diamond Large"
          width={484}
          height={484}
          loading="lazy"
          className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-load rotate-205"
          style={{ color: "transparent" }}
        />
        <DiamondMedium
          src="/assets/diamond-medium.svg"
          alt="Diamond Medium"
          width={448}
          height={448}
          loading="lazy"
          className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-loader rotate-195"
          style={{ color: "transparent" }}
        />

        <DiamondSmall
          src="/assets/diamond-small.svg"
          alt="Diamond Small"
          width={408}
          height={408}
          loading="lazy"
          className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-loadest"
          style={{ color: "transparent" }}
        />

        <div className="absolute bg-white p-4 space-y-0">
          <p className="text-base font-semibold leading-6 tracking-tight">
            PREPARING YOUR ANALYSIS...
          </p>
          <div>
            <div className="flex items-center justify-center space-x-4 py-8">
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_0ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
