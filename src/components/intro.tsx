"use client";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      id="home"
      className="flex mx-auto py-10 mdl:px-10 xl:px-16 scroll-m-24 "
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <h3 className="text-lg font-serif tracking-wide text-textGreen">
          Hi, my name is
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Happy Raj.{" "}
          <span className="block mt-3 text-blue-400">
            <TypeAnimation
              sequence={[
                "PROBLEM-SOLVER... ",
                2000,
                "INNOVATOR... ",
                2000,
                "DEVELOPER... ",
                2000,
                "TECH ENTHUSIAST... ",
                2000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-base md:max-w-[650px] font-medium leading-relaxed">
        I am a passionate Full Stack Web Developer dedicated to crafting scalable and impactful digital solutions, proficient in modern frameworks like React, Next.js, and Node.js, and committed to turning innovative ideas into seamless user experiences.{" "}
          <a href="#about">
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-hidden group ml-2">
              Learn More
              <span className="absolute w-full h-[1px] bg-blue-400 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </p>
        <a
          href="https://github.com/happyraj011" 
          target="_blank"
          className="w-fit"
        >
          <button className="py-3 px-6 text-sm font-semibold border-2 border-blue-400 rounded-md text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300">
            Check out my Projects!
          </button>
        </a>
      </div>
    </section>
  );
};

export default Banner;
