'use client'
import SelectedRadioButton from "next/image";
import RadioButton from "next/image";
import { usePictureData } from "@/app/context/PictureDataContext";

export default function AiStatBar() {
    const {pictureData}=usePictureData()
  return (
    <>
      <div className="bg-gray-100 pt-4 pb-4 md:border-t">
        <div className="space-y-0">
          <div className="flex justify-between px-4">
            <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
              SEX
            </h4>
            <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
              A.I. CONFIDENCE
            </h4>
          </div>
          {/* race unselected */}

          <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
            <div className="flex items-center gap-1">
              <img
                alt="radio button"
                loading="lazy"
                width="12"
                height="12"
                decoding="async"
                data-nimg="1"
                className="w-[12px] h-[12px] mr-2"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
              />
              {/* style="color: transparent;" */}
              <span className="font-normal text-base leading-6 tracking-tight">
                White
              </span>
            </div>
            <span className="font-normal text-base leading-6 tracking-tight">
              62%
            </span>
          </div>
          {/* race selected */}

          <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black">
            <div className="flex items-center gap-1">
              <img
                alt="radio button"
                loading="lazy"
                width="12"
                height="12"
                decoding="async"
                data-nimg="1"
                className="w-[12px] h-[12px] mr-2"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=32&amp;q=75"
              />
              {/* style="color: transparent;" */}
              <span className="font-normal text-base leading-6 tracking-tight">
                East asian
              </span>
            </div>
            <span className="font-normal text-base leading-6 tracking-tight">
              15%
            </span>
          </div>
          {/* gender selected */}
          <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black">
            <div className="flex items-center gap-1">
              <SelectedRadioButton
                src="/assets/selected-radio-button.svg"
                alt="Selected Radio Button"
                width={12}
                height={12}
                className="w-[12px] h-[12px] mr-2"
                style={{ color: "transparent" }}
              />

              <span className="font-normal text-base leading-6 tracking-tight">
                MALE
              </span>
            </div>
            <span className="font-normal text-base leading-6 tracking-tight">
              58%
            </span>
          </div>
          <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
            <div className="flex items-center gap-1">
              <RadioButton
                src="/assets/radio-button.svg"
                alt="Radio Button"
                width={12}
                height={12}
                className="w-[12px] h-[12px] mr-2"
                style={{ color: "transparent" }}
              />

              <span className="font-normal text-base leading-6 tracking-tight">
                FEMALE
              </span>
            </div>
            <span className="font-normal text-base leading-6 tracking-tight">
              41%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
