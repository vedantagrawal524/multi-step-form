export default function SideBarItem() {
  return (
    <section className="flex flex-row items-center gap-3">
      <div className="border-Blue-300 hover:bg-Blue-200 text-Blue-100 hover:text-Blue-950 flex h-7 w-7 flex-row items-center justify-center rounded-full border-[1.5px] text-[0.9rem] font-[500]">
        1
      </div>

      <div className="xs:flex hidden flex-col justify-center gap-0 uppercase">
        <p className="text-[0.65rem] font-[400] text-gray-300 opacity-75">
          step 1
        </p>
        <p className="text-Blue-100 text-[0.8rem] font-[500] tracking-wide">
          your info
        </p>
      </div>
    </section>
  );
}
