import SideBarItem from "./StepBarItem";

export default function SideBarDesktop() {
  return (
    <section className="xs:rounded-[0.5rem] xs:flex hidden h-full w-[45%] flex-col gap-6 bg-[url('/images/bg-sidebar-desktop.svg')] bg-bottom bg-no-repeat p-6">
      <SideBarItem stepId={1} stepName="your info" />
      <SideBarItem stepId={2} stepName="select plan" />
      <SideBarItem stepId={3} stepName="add-ons" />
      <SideBarItem stepId={4} stepName="summary" />
    </section>
  );
}
