"use client";
import { useEffect } from "react";
import { useChosenStat } from "@/app/context/ChosenStatContext";
import { usePictureData } from "@/app/context/PictureDataContext";

export default function LeftSideBar() {
  const { aiStatTitle, setAiStatTitle } = useChosenStat();
  const {pictureData}=usePictureData()

  useEffect(() => {
    setAiStatTitle("RACE");
    console.log(pictureData)
  }, [pictureData]);

  function handleRace() {
    setAiStatTitle("RACE");
  }
  function handleAge() {
    setAiStatTitle("AGE");
  }
  function handleSex() {
    setAiStatTitle("GENDER");
  }

  

  return (
    <>
      <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
        <div
          className={`p-3 cursor-pointer flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t ${
            aiStatTitle === "RACE" ? "bg-[#1A1B1C] text-[#fff]" : "bg-[#F3F3F4]"
          } `}
          onClick={() => handleRace()}
        >
          <p className="text-base font-semibold">Black</p>
          <h4 className="text-base font-semibold mb-1">RACE</h4>
        </div>
        <div
          className={`p-3 cursor-pointer flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t ${
            aiStatTitle === "AGE" ? "bg-[#1A1B1C] text-[#fff]" : "bg-[#F3F3F4]"
          } `}
          onClick={() => handleAge()}
        >
          <p className="text-base font-semibold">3-9</p>
          <h4 className="text-base font-semibold mb-1">AGE</h4>
        </div>
        <div
          className={`p-3 cursor-pointer flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t ${
            aiStatTitle === "GENDER" ? "bg-[#1A1B1C] text-[#fff]" : "bg-[#F3F3F4]"
          } `}
          onClick={() => handleSex()}
        >
          <p className="text-base font-semibold">MALE</p>
          <h4 className="text-base font-semibold mb-1">SEX</h4>
        </div>
      </div>
    </>
  );
}
