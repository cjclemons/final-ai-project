"use client";
import CameraOption from "./sub-components/CameraOption";
import GalleryOption from "./sub-components/GalleryOption";
import { useImage } from "@/app/context/ImageContext";

export default function Results() {
  const { preview, clickedCamera } = useImage();
  return (
    <>
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
          <CameraOption />
        </div>

        <div
          className={`relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300${
            clickedCamera ? " opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <GalleryOption />
        </div>
        <div
          className={`absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 ${
            clickedCamera ? " opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <p className="text-xs text-gray-400">No image</p>
            )}
          </div>
        </div>
        <input accept="image/*" className="hidden" type="file" />
      </div>
    </>
  );
}
