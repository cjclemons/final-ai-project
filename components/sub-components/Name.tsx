export default function Name() {
  return (
    <>
      <form
        action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        className="relative z-10"
      >
        <div className="flex flex-col items-center"></div>
        <input
          className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          placeholder="Introduce Yourself"
          autoComplete="off"
          type="text"
          name="name"
        />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
    </>
  );
}
