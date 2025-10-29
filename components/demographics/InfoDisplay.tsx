export default function InfoDisplay() {
  return (
    <>
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
                stroke-width="1.7"
                fill-opacity="0"
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
                stroke-width="1.7"
                fill-opacity="0"
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
    </>
  );
}
