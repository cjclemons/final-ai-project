"use client";
import Link from "next/link";
import BackArrow from "next/image";
import { usePathname } from "next/navigation";
import { useImage } from "@/app/context/ImageContext";
import { useNameAndLocate } from "@/app/context/NameAndLocateContext";
import { useCategory } from "@/app/context/CategoryContext";
import { useThankYou } from "@/app/context/ThankYouContext";

export default function BaseRight() {
  const pathname = usePathname();
  const { enteredLocation } = useNameAndLocate();
  // this will lead to the results if a truthy
  const { preview } = useImage();
  // this will lead to select if a truthy
  const { chosenCategory } = useCategory();
  const { thankYouShown } = useThankYou();

  // --- Logic for dynamic visibility + destination ---
  let showProceed = false;
  let proceedHref = "/";

  if (pathname === "/testing" && thankYouShown) {
    // showProceed=thankYouShown
    // will have PROCEED
    showProceed = true;
    proceedHref = "results";
  }

  if (pathname === "/results" && preview) {
    // WILL HAVE PROCEED

    showProceed = true;
    proceedHref = "/select";
  }

 

  if (pathname === "/select" && chosenCategory) {
    // Show GET SUMMARY
    // category clicked
    showProceed = true;
    proceedHref = "/summary";
  }

  if (pathname === "/summary") {
    // Show Reset and confirm buttons
    // on the selected category page
    showProceed = true;
    proceedHref = "/";
  }

  // this will lead to select if a truthy
  // const{seeCategory}=useCategory()
  // this will lead to summary if a truthy based on one of the categories being clicked.
  // const{seeDemo}=useDemo()
  // the Reset would lead back to the home page.
  // The Confirm will document the info of the user and either
  // lead to a thank you for using the AI app, or just back to the home page.

  if (pathname === "/select" && chosenCategory) {
    return (
      <>
        {" "}
        {showProceed ? (
          <Link className="inset-0" aria-label="To Summary" href={proceedHref}>
            <div className="scale-[1.75] sm:hidden">
              <BackArrow
                className="scale-[0.85] rotate-180 group-hover:scale-[0.92] ease duration-300"
                src="/assets/arrow-back.svg"
                alt="Back Arrow"
                width={44}
                height={44}
              />
            </div>
            <div className="group hidden sm:flex flex-row relative justify-center items-center">
              <span className="text-sm font-semibold hidden sm:block mr-5 ">
                GET SUMMARY
              </span>
              <BackArrow
                className="scale-[0.85] rotate-180 group-hover:scale-[0.92] ease duration-300"
                src="/assets/arrow-back.svg"
                alt="Back Arrow"
                width={44}
                height={44}
              />
            </div>
          </Link>
        ) : null}
      </>
    );
  }

  if (pathname === "/summary") {
    return (
      <>
        {showProceed ? (
          <div className="flex items-center justify-between">
            <Link className="inset-0" aria-label="Reset App" href={proceedHref}>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#1A1B1C] text-[10px] bg-[#ffff] leading-[16px] ">
                RESET
              </button>
            </Link>
            <Link
              className="inset-0"
              aria-label="Confirm Info"
              href={proceedHref}
            >
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px] ">
                CONFIRM
              </button>
            </Link>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <>
      {showProceed ? (
        <Link className="inset-0" aria-label="Proceed" href={proceedHref}>
          <div className="scale-[1.75] sm:hidden">
            <BackArrow
              className="scale-[0.85] rotate-180 group-hover:scale-[0.92] ease duration-300"
              src="/assets/arrow-back.svg"
              alt="Back Arrow"
              width={44}
              height={44}
            />
          </div>
          <div className="group hidden sm:flex flex-row relative justify-center items-center">
            <span className="text-sm font-semibold hidden sm:block mr-5 ">
              PROCEED
            </span>
            <BackArrow
              className="scale-[0.85] rotate-180 group-hover:scale-[0.92] ease duration-300"
              src="/assets/arrow-back.svg"
              alt="Back Arrow"
              width={44}
              height={44}
            />
          </div>
        </Link>
      ) : null}
    </>
  );
}
