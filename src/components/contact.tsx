

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32"
    >
      <div
        className="flex flex-col gap-4 items-center justify-center scroll-m-10"
      >
        <p className="font-sans text-lg text-textGreen font-semibold flex items-center tracking-wide">
          04. What&apos;s Next?
        </p>
        <h2 className="font-sans text-3xl md:text-5xl text-center font-semibold">
          Get In Touch
        </h2>
        <p className="max-w-[600px] text-center font-body text-textDark">
          I&apos;m currently looking for internship opportunities to enhance and
          explore my technical knowledge, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get
          back to you!
        </p>
        <a href="mailto:happyraj9939@gmail.com" className="w-fit mt-10">
          <button className="py-2 px-4 sm:py-3 sm:px-6 xl:py-4 xl:px-10 text-xs sm:text-sm font-sans border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
            Shoot me an Email
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact