import { useFormContext } from "../../hooks/useFormContext";

export default function Summary() {
  const { plan, duration, addOns, isYearly, handleDurationChange } =
    useFormContext();

  const planPrices = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 },
  };

  const addOnPrices = {
    "Online service": { Monthly: 1, Yearly: 10 },
    "Larger storage": { Monthly: 2, Yearly: 20 },
    "Customizable Profile": { Monthly: 2, Yearly: 20 },
  };

  const billingShort = isYearly() ? "yr" : "mo";
  const planPrice = planPrices[plan]?.[duration] || 0;

  const selectedAddOns =
    addOns && addOns.length > 0
      ? addOns.map((addOn) => ({
          name: addOn,
          price: addOnPrices[addOn]?.[duration] || 0,
        }))
      : [];

  const totalAddOnPrice = selectedAddOns.reduce(
    (sum, addOn) => sum + addOn.price,
    0,
  );

  const totalPrice = planPrice + totalAddOnPrice;

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
              {plan} ({duration})
            </p>
            <button
              onClick={handleDurationChange}
              type="button"
              className="text-Grey-500/80 hover:text-Purple-600 text-[0.75rem] font-[500] underline hover:cursor-pointer"
            >
              Change
            </button>
          </div>
          <p className="text-Blue-950 text-[0.92rem] font-[600]">
            ${planPrice}/{billingShort}
          </p>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="flex flex-col justify-center gap-3">
          {selectedAddOns.length > 0 ? (
            selectedAddOns.map((addOn) => (
              <div
                key={addOn.name}
                className="flex w-full flex-row items-center justify-between"
              >
                <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
                  {addOn.name}
                </p>
                <p className="text-Blue-950 text-[0.75rem] font-[500]">
                  +${addOn.price}/{billingShort}
                </p>
              </div>
            ))
          ) : (
            <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
              No add-ons selected
            </p>
          )}
        </div>
      </div>

      <div className="mt-2 flex w-full flex-row items-center justify-between px-5">
        <p className="text-Grey-500/80 text-[0.8rem] font-[500]">
          Total (per {duration})
        </p>
        <p className="text-Purple-600 text-[0.95rem] font-[600]">
          +${totalPrice}/{billingShort}
        </p>
      </div>
    </section>
  );
}
