import Header from "@/components/Header";
import Base from "../../components/Base";
import Results from "@/components/Results";

function ResultsClient() {
  return (
    <>
        <Header />
      <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
        <Results />
        <Base />
      </div>
    </>
  );
}
export default ResultsClient;
