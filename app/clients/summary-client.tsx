'use client'
import Header from "@/components/Header";
import Base from "../../components/Base";
import Demographics from "../../components/Demographics";

export default function SummaryClient() {
  return (
    <>
      <Header />
      <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
        <div className=" md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
          <Demographics />
          <div className="relative mt-auto pt-4 md:pt-[37px] pb-6 bg-white md:static md:bottom-0 mb-8 md:mb-16">
            <div className="fixed bottom-0 left-0 w-full bg-white py-4 shadow-md z-50">
              <Base />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
