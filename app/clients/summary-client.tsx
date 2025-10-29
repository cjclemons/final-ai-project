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
          <div className="relative pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
            <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">

            <Base />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
