import Info from "../1_info/Info";
import Plan from "../2_plan/Plan";
import AddOns from "../3_add-ons/AddOns";
import Summary from "../4_summary/Summary";
import ThankYou from "../5_thank-you/ThankYou";
import NavButtons from "./NavButtons";

import { useFormContext } from "../../hooks/useFormContext";

export default function FormInputs() {
  const { step } = useFormContext();

  const currentFormStep = () => {
    switch (step) {
      case 1:
        return <Info />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <section className="xs:px-6 xs:py-6 flex h-full w-full flex-col justify-between md:px-14">
      {currentFormStep()}
      <NavButtons />
    </section>
  );
}
