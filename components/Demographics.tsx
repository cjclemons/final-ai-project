import LeftSideBar from "./demographics/LeftSideBar";
import InfoDisplay from "./demographics/InfoDisplay";
import AiStatBar from "./demographics/AiStatBar";

export default function Demographics() {
  return (
    <>
      
        <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
          <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
            A.I. ANALYSIS
          </h2>
          <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
            DEMOGRAPHICS
          </h3>
          <h4 className="text-sm mt-2 leading-[24px]">
            PREDICTED RACE &amp; AGE
          </h4>
        </div>
        {/* the demo components */}
        <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
          {/* The left side bar */}
         <LeftSideBar/>
          {/* the InfoDisplay */}
          <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
            <p className="hidden md:block md:absolute text-[40px] mb-2 left-7 top-4">
              MALE
            </p>
            <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
              <div>
                {/* style="width: 100%; height: 100%; max-height: 384px; position: relative; transform: scale(1); transform-origin: center center;" */}
                <svg
                  className="CircularProgressbar text-[#1A1B1C]"
                  viewBox="0 0 100 100"
                  data-test-id="CircularProgressbar"
                >
                  <path
                    className="CircularProgressbar-trail"
                    d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    "
                    strokeWidth="1.7"
                    fillOpacity="0"
                  >
                    {/* style="stroke-linecap: butt; stroke-dasharray: 308.819px, 308.819px; stroke-dashoffset: 0px;" */}
                  </path>
                  <path
                    className="CircularProgressbar-path"
                    d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    "
                    strokeWidth="1.7"
                    fillOpacity="0"
                  >
                    {/* style="stroke: rgb(26, 27, 28); stroke-linecap: butt; transition-duration: 0.8s; stroke-dasharray: 308.819px, 308.819px; stroke-dashoffset: 129.704px;" */}
                  </path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl md:text-[40px] font-normal">
                    58<span className="absolute text-xl md:text-3xl">%</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
              If A.I. estimate is wrong, select the correct one.
            </p>
          </div>
          {/* the ai stat bar */}
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
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=32&amp;q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=32&amp;q=75"
                  />
                  {/* style="color: transparent;" */}
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
                  <img
                    alt="radio button"
                    loading="lazy"
                    width="12"
                    height="12"
                    decoding="async"
                    data-nimg="1"
                    className="w-[12px] h-[12px] mr-2"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                  />
                  {/* style="color: transparent;" */}
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
        </div>
      
    </>
  );
}
