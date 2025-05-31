export default function Info() {
  return (
    <section className="flex w-full flex-col gap-1 p-1 pb-6">
      <h1 className="text-Blue-950 text-[1.5rem] leading-8 font-[700]">
        Personal info
      </h1>

      <p className="text-Grey-500 text-[0.95rem] font-[400]">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-4 flex flex-col justify-center gap-4">
        <fieldset className="relative flex flex-col justify-center gap-0.5">
          <label
            htmlFor="name"
            className="text-Blue-950 text-[0.8rem] font-[400]"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="outline-Grey-500/90 text-Blue-950 placeholder:text-Grey-500/70 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 inputField w-full rounded-[0.3rem] border-0 p-1.5 px-2 text-[0.95rem] font-[500] outline-1 placeholder:text-[0.9rem] hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          />

          <p className="text-Red-500 errorMsg absolute top-0 right-0 hidden text-[0.8rem] font-[700]">
            Enter your name
          </p>
        </fieldset>

        <fieldset className="relative flex flex-col justify-center gap-0.5">
          <label
            htmlFor="emailAddress"
            className="text-Blue-950 text-[0.8rem] font-[400]"
          >
            Email Address
          </label>
          <input
            type="text"
            name="emailAddress"
            id="emailAddress"
            placeholder="e.g. stephenking@lorem.com"
            className="outline-Grey-500/90 text-Blue-950 placeholder:text-Grey-500/70 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 inputField w-full rounded-[0.3rem] border-0 p-1.5 px-2 text-[0.95rem] font-[500] outline-1 placeholder:text-[0.9rem] hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          />

          <p className="text-Red-500 errorMsg absolute top-0 right-0 hidden text-[0.8rem] font-[700]">
            Enter a valid email
          </p>
        </fieldset>

        <fieldset className="relative flex flex-col justify-center gap-0.5">
          <label
            htmlFor="phoneNumber"
            className="text-Blue-950 text-[0.8rem] font-[400]"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            className="outline-Grey-500/90 text-Blue-950 placeholder:text-Grey-500/70 hover:outline-Purple-600 active:outline-Purple-600 focus:outline-Purple-600 inputField w-full rounded-[0.3rem] border-0 p-1.5 px-2 text-[0.95rem] font-[500] outline-1 placeholder:text-[0.9rem] hover:cursor-pointer hover:outline-2 focus:outline-2 active:outline-2"
          />

          <p className="text-Red-500 errorMsg absolute top-0 right-0 hidden text-[0.8rem] font-[700]">
            Enter a valid number
          </p>
        </fieldset>
      </div>
    </section>
  );
}
