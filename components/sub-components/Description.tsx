import Link from "next/link";

export default function Description() {
  return (
    <>
      <div className="z-10 mt-4 lg:hidden">
        <Link href="/testing">
          <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
            <span className="text-[12px] font-bold cursor-pointer">
              ENTER EXPERIENCE
            </span>
            <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>
            <span className="absolute left-[129px] scale-[0.5] hover:scale-60 duration-300">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current text-black"
              >
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width&gt;=1920px)]:left-[calc(-33vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
        <p>
          Skinstric developed an A.I. that creates a
          <br />
          highly-personalized routine tailored to
          <br />
          what your skin needs.
        </p>
      </div>
    </>
  );
}
