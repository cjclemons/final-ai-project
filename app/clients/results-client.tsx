import Header from "@/components/Header";
import Base from "../../components/Base";
import Results from "@/components/Results";
import ResultsLoading from "@/components/sub-components/ResultsLoading";

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

// have the ReultsLoading component show until the integration has completely loaded
// into the summary.
// Have the intro change to analysis and show that on the Select page, 
// and maybe have it local storage.
