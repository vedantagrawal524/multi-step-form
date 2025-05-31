import { useFormContext } from "../../hooks/useFormContext.js";

export default function Plan() {
  const { plan, setPlan, duration, handleDurationChange, isYearly } =
    useFormContext();
  return (
    <section className="flex w-full flex-col gap-1 p-1 pb-6">
      <h1 className="text-Blue-950 text-[1.5rem] leading-8 font-[700]">
        Select your plan
      </h1>

      <p className="text-Grey-500 text-[0.95rem] font-[400]">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-6 flex flex-col justify-center gap-4">
        <fieldset className="xs:flex-row flex w-full flex-col justify-between gap-4">
          <div
            onClick={() => setPlan("Arcade")}
            className={`outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/6 xs:flex-col xs:w-[30%] xs:justify-between xs:items-start xs:h-[9.5rem] focus:bg-Purple-600/8 active:outline-2" flex w-full flex-row items-center gap-4 rounded-[0.4rem] border-0 p-3 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 ${plan === "Arcade" ? "bg-Purple-600/8 outline-Purple-600 outline-2" : ""}`}
          >
            <img
              src="/images/icon-arcade.svg"
              alt="Arcade"
              className="h-auto w-9"
            />

            <div className="flex flex-col justify-center gap-0">
              <h2 className="text-Blue-950 text-[0.95rem] leading-4 font-[500]">
                Arcade
              </h2>
              <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
                {" "}
                {isYearly() ? "$90/yr" : "$9/mo"}
              </p>

              {isYearly() && (
                <p className="text-Blue-950 text-[0.7rem] font-[500]">
                  2 months free
                </p>
              )}
            </div>
          </div>

          <div
            onClick={() => setPlan("Advanced")}
            className={`outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/6 xs:flex-col xs:w-[30%] xs:justify-between xs:items-start xs:h-[9.5rem] focus:bg-Purple-600/8 active:outline-2" flex w-full flex-row items-center gap-4 rounded-[0.4rem] border-0 p-3 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 ${plan === "Advanced" ? "bg-Purple-600/8 outline-Purple-600 outline-2" : ""}`}
          >
            <img
              src="/images/icon-advanced.svg"
              alt="Advanced"
              className="h-auto w-9"
            />

            <div className="flex flex-col justify-center gap-0">
              <h2 className="text-Blue-950 text-[0.95rem] leading-4 font-[500]">
                Advanced
              </h2>
              <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
                {isYearly() ? "$120/yr" : "$12/mo"}
              </p>
              {isYearly() && (
                <p className="text-Blue-950 text-[0.7rem] font-[500]">
                  2 months free
                </p>
              )}
            </div>
          </div>

          <div
            onClick={() => setPlan("Pro")}
            className={`outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/8 xs:flex-col xs:w-[30%] xs:justify-between xs:items-start xs:h-[9.5rem] focus:bg-Purple-600/8 active:outline-2" flex w-full flex-row items-center gap-4 rounded-[0.4rem] border-0 p-3 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 ${plan == "Pro" ? "bg-Purple-600/8 outline-Purple-600 outline-2" : ""}`}
          >
            <img src="/images/icon-pro.svg" alt="Pro" className="h-auto w-9" />

            <div className="flex flex-col justify-center gap-0">
              <h2 className="text-Blue-950 text-[0.95rem] leading-4 font-[500]">
                Pro
              </h2>
              <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
                {isYearly() ? "$150/yr" : "$15/mo"}
              </p>
              {isYearly() && (
                <p className="text-Blue-950 text-[0.7rem] font-[500]">
                  2 months free
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-3 flex w-full items-center justify-center gap-4 rounded-[0.4rem] bg-blue-50 p-2">
          <span
            className={`text-[0.8rem] font-[600] ${isYearly() ? "text-Grey-500" : "text-blue-950"}`}
          >
            Monthly
          </span>

          <label
            htmlFor="planDuration"
            className="flex cursor-pointer flex-row items-center"
          >
            <div className="relative h-5 w-9 rounded-full bg-blue-950">
              <input
                onClick={handleDurationChange}
                id="planDuration"
                name="planDuration"
                type="checkbox"
                className="peer sr-only"
              />
              <div className="absolute top-1 right-1 left-1 h-3 w-3 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-[17px]"></div>
            </div>
          </label>

          <span
            className={`text-[0.8rem] font-[600] ${!isYearly() ? "text-Grey-500" : "text-blue-950"}`}
          >
            Yearly
          </span>
        </fieldset>
      </div>
    </section>
  );
}
