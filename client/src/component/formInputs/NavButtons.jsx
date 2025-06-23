import { useFormContext } from "../../hooks/useFormContext.js";

export default function NavButtons() {
  const { step, prevStep, nextStep } = useFormContext();
  return (
    <div
      className={`bg-White xs:static xs:p-0 fixed bottom-0 left-0 z-30 flex w-full flex-row items-center p-4 ${step == 1 ? "justify-end" : "justify-between"}`}
    >
      {step != 1 && step != 5 ? (
        <button
          type="button"
          onClick={prevStep}
          className="text-Grey-500 hover:text-Blue-950 rounded-[0.4rem] text-[0.9rem] font-[500] hover:cursor-pointer"
        >
          {" "}
          Go Back
        </button>
      ) : (
        ""
      )}

      {step != 5 ? (
        <button
          type="button"
          onClick={nextStep}
          className={`bg-Blue-950 text-Blue-100 rounded-[0.4rem] px-4 py-2 text-[0.9rem] font-[400] hover:cursor-pointer hover:opacity-80 ${step == 4 ? "bg-Purple-600" : "bg-Blue-950"}`}
        >
          {step == 4 ? "Confirm" : "Next Step"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
