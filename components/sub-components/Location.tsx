"use client";
import { useNameAndLocate } from "@/app/context/NameAndLocateContext";
import { useState } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import { PhaseOneDataHandling } from "@/app/data-handling/PhaseOneDataHandling";
import TestLoading from "./TestLoading";
import ThankYou from "./ThankYou";
import { useThankYou } from "@/app/context/ThankYouContext";

export default function Location() {
  const { setEnteredLocation, enteredLocation, enteredName } =
    useNameAndLocate();
  const [tempLocation, setTempLocation] = useState("");
  const { isLoading, setIsLoading } = useLoading();
  const [isComplete, setIsComplete] = useState(false);
  const {setThankYouShown}=useThankYou()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempLocation(e.target.value);
  };
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tempLocation.trim() !== "") {
        try {
          setIsLoading(true);
          setEnteredLocation(tempLocation); // ✅ only update context when Enter is pressed
          await PhaseOneDataHandling(enteredName, tempLocation);
          setIsComplete(true);
          setThankYouShown(true)
        } catch (error) {
          console.error("Error sending data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };
  if (isLoading) {
    return <TestLoading />;
  }
  if (isComplete) {
    return <ThankYou />;
  }
  return (
    <>
      <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
        CLICK TO TYPE
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="relative z-10">
        <div className="flex flex-col items-center"></div>
        <input
          className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          placeholder="Enter Location"
          autoComplete="off"
          type="text"
          name="name"
          value={tempLocation}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
    </>
  );
}
