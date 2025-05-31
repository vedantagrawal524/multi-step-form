import SideBarMobile from "./stepbar/StepBarMobile";
import SideBarDesktop from "./stepbar/StepBarDesktop";
import FormInputs from "./formInputs/FormInputs";

export default function Form() {
  return (
    <>
      <SideBarMobile />
      <section className="bg-White xs:h-[31rem] xs:self-center xs:mt-0 z-20 mt-20 flex h-[25rem] w-full max-w-[50rem] flex-row gap-2 self-start overflow-y-auto rounded-[0.5rem] p-5">
        <SideBarDesktop />
        <FormInputs />
      </section>
    </>
  );
}
