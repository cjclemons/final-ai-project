"use client";
import Image from "next/image";
import { useSpecifiedData } from "@/app/context/SpecifiedDataContext";
import { useLabelChange } from "@/app/context/LabelChangeContext";
import { useChosenStat } from "@/app/context/ChosenStatContext";
import { useEffect } from "react";

export default function AiStatBar() {
  const { specifiedData } = useSpecifiedData();
  const { labelChange, setLabelChange } = useLabelChange();
  const { aiStatTitle } = useChosenStat();

  const formatLabel = (label: string) =>
    label.replace(/\b\w/g, (char) => char.toUpperCase());

  useEffect(() => {
    if (!specifiedData || specifiedData.length === 0 || !aiStatTitle) return;

    const topLabel = specifiedData[0].label;
    setLabelChange((prev: any) => {
      // Don’t overwrite user’s choice for this section
      if (prev?.[aiStatTitle]) return prev;
      return { ...prev, [aiStatTitle]: topLabel };
    });
  }, [specifiedData, aiStatTitle]);

  function selectLabel(label: string) {
    setLabelChange((prev: any) => ({
      ...prev,
      [aiStatTitle]: label,
    }));
  }

  return (
    <div className="bg-gray-100 pt-4 pb-4 md:border-t">
      <div className="space-y-0">
        <div className="flex justify-between px-4">
          <h4 className="text-base font-medium mb-2">{aiStatTitle}&nbsp; </h4>
          <h4 className="text-base font-medium mb-2"> A.I. CONFIDENCE</h4>
        </div>

        {specifiedData?.map(({ label, confidence }) => (
          <div
            key={label}
            className={`flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ${
              labelChange[aiStatTitle ?? ""] === label
                ? "bg-[#1A1B1C] text-white hover:bg-black"
                : ""
            }`}
            onClick={() => selectLabel(label)}
          >
            <div className="flex items-center gap-1">
              <Image
                src={
                  labelChange[aiStatTitle ?? ""] === label
                    ? "/assets/selected-radio-button.svg"
                    : "/assets/radio-button.svg"
                }
                alt="Radio Button"
                width={12}
                height={12}
                className="w-[12px] h-[12px] mr-2"
              />
              <span className="font-normal text-base">
                {formatLabel(label)}
              </span>
            </div>
            <span className="font-normal text-base">
              {(confidence * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
