"use client";
import { useEffect, useState } from "react";
import { useChosenStat } from "@/app/context/ChosenStatContext";
import { usePictureData } from "@/app/context/PictureDataContext";
import { useSpecifiedData } from "@/app/context/SpecifiedDataContext";
import { useLabelChange } from "@/app/context/LabelChangeContext";

export default function LeftSideBar() {
  const { aiStatTitle, setAiStatTitle } = useChosenStat();
  const { pictureData } = usePictureData();
  const { setSpecifiedData } = useSpecifiedData();
  const { labelChange, setLabelChange } = useLabelChange();

  const [topLabels, setTopLabels] = useState<{
    RACE?: string;
    AGE?: string;
    GENDER?: string;
  }>({});

  const formatLabel = (label: string) =>
    label.replace(/\b\w/g, (char) => char.toUpperCase());

  // 🔹 When pictureData changes (i.e., new image uploaded)
  useEffect(() => {
    if (!pictureData) return;

    const newTopLabels: Record<string, string> = {};

    Object.keys(pictureData).forEach((key) => {
      const section = pictureData[key];
      if (section && typeof section === "object") {
        const sorted = Object.entries(section)
          .map(([label, confidence]) => ({
            label,
            confidence: Number(confidence),
          }))
          .sort((a, b) => Number(b.confidence) - Number(a.confidence));

        const topLabel = sorted[0]?.label;
        if (topLabel) {
          const upperKey = key.toUpperCase();
          newTopLabels[upperKey] = topLabel;

          // Only set default if user hasn't changed it yet
          setLabelChange((prev: any) => ({
            ...prev,
            [upperKey]: prev?.[upperKey] || topLabel,
          }));

          // If current section matches, update displayed data
          if (aiStatTitle?.toLowerCase() === key.toLowerCase()) {
            setSpecifiedData(sorted);
          }
        }
      }
    });

    setTopLabels(newTopLabels);

    // default to RACE section if nothing selected
    if (!aiStatTitle) setAiStatTitle("RACE");
  }, [pictureData]);

  // 🔹 Update AiStatBar data when user switches sidebar tabs
  useEffect(() => {
    if (!pictureData || !aiStatTitle) return;
    const section = pictureData[aiStatTitle.toLowerCase()];
    if (section && typeof section === "object") {
      const sorted = Object.entries(section)
        .map(([label, confidence]) => ({
          label,
          confidence: Number(confidence),
        }))
        .sort((a, b) => Number(b.confidence) - Number(a.confidence));

      setSpecifiedData(sorted);
    }
  }, [aiStatTitle]);

  // --- Click handlers ---
  const handleRace = () => setAiStatTitle("RACE");
  const handleAge = () => setAiStatTitle("AGE");
  const handleSex = () => setAiStatTitle("GENDER");

  return (
    <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
      {/* --- RACE --- */}
      <div
        className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t hover:bg-[#E1E1E2] ${
          aiStatTitle === "RACE" ? "bg-[#1A1B1C] text-white" : "bg-[#F3F3F4]"
        }`}
        onClick={handleRace}
      >
        <p className="text-base font-semibold">
          {formatLabel(labelChange.RACE || topLabels.RACE || "")}
        </p>
        <h4 className="text-base font-semibold mb-1">RACE</h4>
      </div>

      {/* --- AGE --- */}
      <div
        className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t hover:bg-[#E1E1E2] ${
          aiStatTitle === "AGE" ? "bg-[#1A1B1C] text-white" : "bg-[#F3F3F4]"
        }`}
        onClick={handleAge}
      >
        <p className="text-base font-semibold">
          {formatLabel(labelChange.AGE || topLabels.AGE || "")}
        </p>
        <h4 className="text-base font-semibold mb-1">AGE</h4>
      </div>

      {/* --- GENDER --- */}
      <div
        className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t hover:bg-[#E1E1E2] ${
          aiStatTitle === "GENDER" ? "bg-[#1A1B1C] text-white" : "bg-[#F3F3F4]"
        }`}
        onClick={handleSex}
      >
        <p className="text-base font-semibold">
          {formatLabel(labelChange.GENDER || topLabels.GENDER || "")}
        </p>
        <h4 className="text-base font-semibold mb-1">SEX</h4>
      </div>
    </div>
  );
}
