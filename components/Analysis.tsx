"use client";
import Name from "./sub-components/Name";
import Location from "./sub-components/Location";

import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import SubHeader from "./sub-components/SubHeader";
import { useNameAndLocate } from "@/app/context/NameAndLocateContext";

export default function Analysis() {
  const { enteredName } = useNameAndLocate();

  return (
    <>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <SubHeader />
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          {enteredName ? <Location /> : <Name />}
          <DiamondLarge
            src="/assets/diamond-large.svg"
            alt="Diamond Large"
            width={762}
            height={762}
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
            style={{ color: "transparent" }}
          />

          <DiamondMedium
            src="/assets/diamond-medium.svg"
            alt="Diamond Medium"
            width={682}
            height={682}
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185"
            style={{ color: "transparent" }}
          />

          <DiamondSmall
            src="/assets/diamond-small.svg"
            alt="Diamond Small"
            width={602}
            height={602}
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </>
  );
}
