import { useFormContext } from "../../hooks/useFormContext.js";

export default function AddOns() {
  const { addOns, handleToggleAddOn, isYearly } = useFormContext();
  return (
    <section className="flex w-full flex-col gap-1 p-1 pb-6">
      <h1 className="text-Blue-950 text-[1.5rem] leading-8 font-[700]">
        Pick add-ons
      </h1>

      <p className="text-Grey-500 text-[0.95rem] font-[400]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-4">
        <fieldset className="flex w-full flex-col justify-center gap-4">
          <label
            htmlFor="onlineService"
            className="outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/6 hover:bg-Purple-600/8 focus:bg-Purple-600/8 flex w-full flex-row items-center justify-between gap-4 rounded-[0.4rem] border-0 p-3 py-4 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          >
            <input
              checked={addOns.includes("Online service")}
              onChange={() => handleToggleAddOn("Online service")}
              type="checkbox"
              name="addOns"
              id="onlineService"
              className="peer hidden"
            />

            <div className="peer-checked:border-Purple-600 peer-checked:bg-Purple-600 border-Grey-500/50 flex h-4 w-5 items-center justify-center rounded-[0.2rem] border-1">
              <img
                src="/images/icon-checkmark.svg"
                alt="Checkmark"
                className="h-auto w-2.5"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-1">
              <h2 className="text-Blue-950 text-[0.9rem] leading-4 font-[500]">
                Online service
              </h2>
              <p className="text-Grey-500/80 text-[0.75rem] leading-3 font-[500]">
                Access to multiplayer games
              </p>
            </div>

            <p className="text-Purple-600 text-[0.76rem] font-[500]">
              {" "}
              {isYearly() ? "+$10/yr" : "+$1/mo"}
            </p>
          </label>

          <label
            htmlFor="largerStorage"
            className="outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/6 hover:bg-Purple-600/8 focus:bg-Purple-600/8 flex w-full flex-row items-center justify-between gap-4 rounded-[0.4rem] border-0 p-3 py-4 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          >
            <input
              checked={addOns.includes("Larger storage")}
              onChange={() => handleToggleAddOn("Larger storage")}
              type="checkbox"
              name="addOns"
              id="largerStorage"
              className="peer hidden"
            />

            <div className="peer-checked:border-Purple-600 peer-checked:bg-Purple-600 border-Grey-500/50 flex h-4 w-5 items-center justify-center rounded-[0.2rem] border-1">
              <img
                src="/images/icon-checkmark.svg"
                alt="Checkmark"
                className="h-auto w-2.5"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-1">
              <h2 className="text-Blue-950 text-[0.9rem] leading-4 font-[500]">
                Larger storage
              </h2>
              <p className="text-Grey-500/80 text-[0.75rem] leading-3 font-[500]">
                Extra 1TB of cloud save
              </p>
            </div>

            <p className="text-Purple-600 text-[0.76rem] font-[500]">
              {" "}
              {isYearly() ? "+$20/yr" : "+$2/mo"}
            </p>
          </label>

          <label
            htmlFor="customizableProfile"
            className="outline-Grey-500/90 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 active:bg-Purple-600/6 hover:bg-Purple-600/8 focus:bg-Purple-600/8 flex w-full flex-row items-center justify-between gap-4 rounded-[0.4rem] border-0 p-3 py-4 outline-1 hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          >
            <input
              checked={addOns.includes("Customizable Profile")}
              onChange={() => handleToggleAddOn("Customizable Profile")}
              type="checkbox"
              name="addOns"
              id="customizableProfile"
              className="peer hidden"
            />

            <div className="peer-checked:border-Purple-600 peer-checked:bg-Purple-600 border-Grey-500/50 flex h-4 w-5 items-center justify-center rounded-[0.2rem] border-1">
              <img
                src="/images/icon-checkmark.svg"
                alt="Checkmark"
                className="h-auto w-2.5"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-1">
              <h2 className="text-Blue-950 text-[0.9rem] leading-4 font-[500]">
                Customizable Profile
              </h2>
              <p className="text-Grey-500/80 text-[0.75rem] leading-3 font-[500]">
                Custom theme on your profile
              </p>
            </div>

            <p className="text-Purple-600 text-[0.76rem] font-[500]">
              {" "}
              {isYearly() ? "+$20/yr" : "+$2/mo"}
            </p>
          </label>
        </fieldset>
      </div>
    </section>
  );
}
