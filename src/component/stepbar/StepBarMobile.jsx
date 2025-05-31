import SideBarItem from "./StepBarItem";

export default function SideBarMobile() {
  return (
    <section className="xs:hidden fixed top-0 right-0 left-0 flex h-[10rem] w-full flex-row items-start justify-center gap-4 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat pt-[2rem]">
      <SideBarItem />
      <SideBarItem />
      <SideBarItem />
      <SideBarItem />
      <SideBarItem />
    </section>
  );
}
