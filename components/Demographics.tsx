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
          <InfoDisplay/>
          
          {/* the ai stat bar */}
          <AiStatBar/>
          
        </div>
      
    </>
  );
}
