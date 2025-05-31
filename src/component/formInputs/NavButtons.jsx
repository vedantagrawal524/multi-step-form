export default function NavButtons() {
  return (
    <div className="bg-White xs:static xs:p-0 fixed bottom-0 left-0 z-30 flex w-full flex-row items-center justify-between p-4">
      <button
        type="button"
        className="text-Grey-500 hover:text-Blue-950 rounded-[0.4rem] text-[0.9rem] font-[500] hover:cursor-pointer"
      >
        {" "}
        Go Back
      </button>
      <button
        type="button"
        className="bg-Blue-950 text-Blue-100 hover:bg-Blue-950/80 rounded-[0.4rem] px-4 py-2 text-[0.9rem] font-[400] hover:cursor-pointer"
      >
        Next Step
      </button>
    </div>
  );
}
