export default function Summary() {
  return (
    <section className="flex w-full flex-col gap-1 p-1 pb-6">
      <h1 className="text-Blue-950 text-[1.5rem] leading-8 font-[700]">
        Finishing up
      </h1>

      <p className="text-Grey-500 text-[0.95rem] font-[400]">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-Blue-50 mt-6 flex flex-col justify-center gap-4 p-4">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <p className="text-Blue-950 text-[0.9rem] font-[500]">
              Arcade (Monthly)
            </p>
            <button
              type="button"
              className="text-Grey-500/80 hover:text-Purple-600 text-[0.75rem] font-[500] underline hover:cursor-pointer"
            >
              Change
            </button>
          </div>

          <p className="text-Blue-950 text-[0.92rem] font-[600]">$9/mo</p>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex flex-col justify-center gap-3">
          <div className="flex w-full flex-row items-center justify-between">
            <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
              Online Service
            </p>
            <p className="text-Blue-950 text-[0.75rem] font-[500]">+$1/mo</p>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
              Online Service
            </p>
            <p className="text-Blue-950 text-[0.75rem] font-[500]">+$1/mo</p>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
              Online Service
            </p>
            <p className="text-Blue-950 text-[0.75rem] font-[500]">+$1/mo</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex w-full flex-row items-center justify-between px-5">
        <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
          Total (per Month)
        </p>
        <p className="text-Purple-600 text-[0.95rem] font-[600]">+$12/mo</p>
      </div>
    </section>
  );
}
