"use client"
import Link from "next/link";
import BackArrow from "next/image";
import { useNameAndLocate } from "@/app/context/NameAndLocateContext";
export default function Base() {
  const { enteredLocation } = useNameAndLocate();
  return (
    <>
      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <div className="flex justify-between w-full">
            <Link className="inset-0" aria-label="Back" href="/">
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
            </Link>

            {enteredLocation ? (
              <Link className="inset-0" aria-label="Proceed" href="/results">

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
          </div>
        </div>
    </>
  );
}
