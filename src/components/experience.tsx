"use client";
import SectionTitle from "./ui/sectiontitle";
import { useState } from "react";
import { experience } from "../utils/data";
import Company from "./ui/company";

const Experience = () => {
  const [active, setActive] = useState(1);

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-12 px-4 scroll-m-14"
    >
        <SectionTitle title="Where I have Worked" number="02" />

        <div className="w-full mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Sidebar with Companies */}
          <ul className="md:w-48 flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-2 md:gap-0">
            {experience.map((exp) => (
              <li
                key={exp.id}
                onClick={() => setActive(exp.id)}
                className={`px-4 py-2 text-lg font-medium border-l-4 md:border-l-2 cursor-pointer duration-300 rounded-md md:rounded-r-md
                  ${
                    active === exp.id
                      ? "border-textGreen bg-[#112240] text-textGreen"
                      : "border-transparent text-textDark hover:bg-[#172c51] hover:text-textGreen hover:border-textGreen"
                  }`}
              >
                {exp.company}
              </li>
            ))}
          </ul>

          {/* Details Section */}
          <div className="flex-1">
            {experience.map(
              (exp) =>
                active === exp.id && (
                  <Company
                    key={exp.id}
                    name={exp.name}
                    company={exp.company}
                    duration={exp.duration}
                    points={exp.points}
                  />
                )
            )}
          </div>
        </div>
      
    </section>
  );
};

export default Experience;
