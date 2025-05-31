import Info from "../1_info/Info";
import Plan from "../2_plan/Plan";
import AddOns from "../3_add-ons/AddOns";
import Summary from "../4_summary/Summary";
import ThankYou from "../5_thank-you/ThankYou";
import NavButtons from "./NavButtons";

export default function FormInputs() {
  return (
    <section className="xs:px-6 xs:py-6 flex h-full w-full flex-col justify-between md:px-14">
      {/* <Info /> */}
      {/* <Plan /> */}
      {/* <AddOns /> */}
      {/* <Summary /> */}
      <ThankYou />

      {/* <NavButtons /> */}
    </section>
  );
}
