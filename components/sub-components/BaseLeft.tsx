"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "next/image";

// On Testing need something to enable Back to take user back to home page
// On Results need something to enable Back to take user back to testing page
// On Select need something to enable Back to take user back to results page
// on Summary need something to enable Back to take user back to select page

export default function BaseLeft() {
    const router=useRouter()
  const pathname = usePathname();
  const backRoutes: Record<string, string> = {
    "/results": "/",
    "/select": "/results",
    "/summary": "/select",
  };
  const fallbackHref = backRoutes[pathname] || "/";

  const handleBack=()=>{
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }


  return (
    <>
      <button className="inset-0 cursor-pointer" aria-label="Back" onClick={handleBack}>
        <div className="group hidden sm:flex flex-row relative justify-center items-center">
          <BackArrow
            className="scale-[0.85] group-hover:scale-[0.92] ease duration-300"
            src="/assets/arrow-back.svg"
            alt="Back Arrow"
            width={44}
            height={44}
          />

          <span className="text-sm font-semibold hidden sm:block ml-5 ">
            BACK
          </span>
        </div>
      </button>
    </>
  );
}
