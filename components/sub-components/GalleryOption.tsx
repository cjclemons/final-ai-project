"use client";
import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import GalleryIcon from "next/image";
import GalleryLine from "next/image";
import { useEffect, useRef } from "react";
import { PhaseTwoDataHandling } from "@/app/data-handling/PhaseTwoDataHandling";
import { useImage } from "@/app/context/ImageContext";
import { usePictureData } from "../../app/context/PictureDataContext";

export default function GalleryOption() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setPreview, clickedCamera } = useImage();
  const { pictureData, setPictureData } = usePictureData();

  // Trigger the file picker
  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  // When user picks an image
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      console.log("✅ Base64 Image:", base64String);
      setPreview(base64String); // 🧠 shared globally
      const response = await PhaseTwoDataHandling(base64String);
      const data=response.data

      console.log(data.age);
      setPictureData(data)
      
    };
    reader.readAsDataURL(file); // convert file → Base64
  };

  useEffect(() => {
  console.log("📸 pictureData updated:", pictureData);
}, [pictureData]);

  return (
    <>
      <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
      <DiamondLarge
        src="/assets/diamond-large.svg"
        alt="Diamond Large"
        width={484}
        height={484}
        loading="lazy"
        className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205"
        style={{ color: "transparent" }}
      />
      <DiamondMedium
        src="/assets/diamond-medium.svg"
        alt="Diamond Medium"
        width={448}
        height={448}
        loading="lazy"
        className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195"
        style={{ color: "transparent" }}
      />

      <DiamondSmall
        src="/assets/diamond-small.svg"
        alt="Diamond Small"
        width={408}
        height={408}
        loading="lazy"
        className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
        style={{ color: "transparent" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <GalleryIcon
          src="/assets/gallery-icon.svg"
          alt="Photo Upload Icon"
          width={136}
          height={136}
          loading="lazy"
          className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
          style={{ color: "transparent" }}
          onClick={handleGalleryClick}
        />

        <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
          <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">
            ALLOW A.I.
            <br />
            ACCESS GALLERY
          </p>
          <GalleryLine
            src="/assets/gallery-line.svg"
            alt="Gallery Line"
            width={66.33}
            height={59.37}
            loading="lazy"
            className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}
