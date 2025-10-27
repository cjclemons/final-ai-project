import DiamondLarge from "next/image";
import DiamondMedium from "next/image";
import DiamondSmall from "next/image";
import CameraIcon from "next/image";
import GalleryIcon from "next/image";
import ScanLine from "next/image";
import GalleryLine from "next/image";

export default function Results() {
  return (
    <>
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>
      <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
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
            className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190"
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

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <CameraIcon
              src="/assets/camera-icon.svg"
              alt="Camera Icon"
              width={136}
              height={136}
              loading="lazy"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
              style={{ color: "transparent" }}
            />

            <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
              <p className="text-xs md:text-sm font-normal mt-1 leading-[24px]">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
              <ScanLine
                src="/assets/scan-line.svg"
                alt="Scan Line"
                width={66}
                height={59}
                loading="lazy"
                className="absolute hidden md:block md:right-[143px] md:top-[20px]"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
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
            className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spinSlowest"
            style={{ color: "transparent", }}
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
        </div>
        <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 opacity-100">
          <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
        </div>
        <input accept="image/*" className="hidden" type="file" />
      </div>
    </>
  );
}
