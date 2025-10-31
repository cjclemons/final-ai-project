"use client";

import { useChosenStat } from "@/app/context/ChosenStatContext";
import { useLabelChange } from "@/app/context/LabelChangeContext";
import { useSpecifiedData } from "@/app/context/SpecifiedDataContext";
import { useMemo } from "react";

export default function InfoDisplay() {
  const { labelChange } = useLabelChange();
  const { aiStatTitle } = useChosenStat();
  const { specifiedData } = useSpecifiedData();

  // Find the confidence for the currently selected label
  const { label, confidence } = useMemo(() => {
    if (!specifiedData || specifiedData.length === 0 || !aiStatTitle)
      return { label: "", confidence: 0 };

    const selectedLabel = labelChange?.[aiStatTitle];
    const found = specifiedData.find((d) => d.label === selectedLabel);
    return found || { label: selectedLabel, confidence: 0 };
  }, [labelChange, aiStatTitle, specifiedData]);

  const percent = Math.round(confidence * 100);
  const radius = 49.15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const formatLabel = (label: string) =>
    label.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
        <p className="hidden md:block md:absolute text-[40px] sm:text-[24px] md:text-[32px] lg:text-[48px] mb-2 left-7 top-4">
          {formatLabel(label ?? "")}
        </p>
        <div className="relative flex items-center justify-center w-full h-full p-4">
          {/* Circle */}
          <div className=" md:absolute w-auto max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
            <svg
              className="CircularProgressbar text-[#1A1B1C] w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Trail (background ring) */}
              <circle
                className="CircularProgressbar-trail"
                cx="50"
                cy="50"
                r={radius}
                stroke="#E1E1E2"
                strokeWidth="1.7"
                fill="none"
              />

              {/* Path (animated progress ring) */}
              <circle
                className="CircularProgressbar-path"
                cx="50"
                cy="50"
                r={radius}
                stroke="#1A1B1C"
                strokeWidth="1.7"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="butt"
                transform="rotate(-90 50 50)" // <--- STARTS FROM TOP
                style={{
                  transition: "stroke-dashoffset 0.8s ease",
                }}
              />
            </svg>

            {/* Center Percent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-3xl md:text-[40px] font-normal relative">
                {percent}
                <span className="absolute text-xl md:text-3xl top-0 right-[-25px]">
                  %
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Hint Text */}
        <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
          If A.I. estimate is wrong, select the correct one.
        </p>
      </div>
    </>
  );
}
