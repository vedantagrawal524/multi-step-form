export default function ThankYou() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-4 self-center justify-self-center pb-6">
      <img
        src="/images/icon-thank-you.svg"
        alt="Thank You"
        className="h-auto w-15"
      />

      <h1 className="text-Blue-950 mt-3 text-[1.5rem] leading-4 font-[700]">
        Thank you!
      </h1>

      <p className="text-Grey-500 text-center text-[0.95rem] font-[400]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}
