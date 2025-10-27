function TestLoading() {
  return (
    <>
      <div className="relative z-10">
        <p className="text-lg text-gray-500 mb-2">Processing submission</p>
        <div className="flex items-center justify-center space-x-4 py-8">
          <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_0ms] opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
        </div>
      </div>
    </>
  );
}
export default TestLoading;