"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/data"; // Adjust this path as needed
import SectionTitle from "./ui/sectiontitle";




export default function About() {
  const [fieldType, setFieldType] = useState("languages");
  let d = 0;
   
  return (
    <section className="max-w-containerSmall px-2 sml:px-8 md:px-0 mx-auto py-10 lgl:py-12 scroll-m-14">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Content - About Me */}
        <div className="flex-1 space-y-8 md:space-y-10">
          {/* Section Number and Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-mono "
          >
            <SectionTitle title="About Me" number="01"/>
         
          </motion.div>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg leading-relaxed max-w-3xl"
          >
            Hi! I&apos;m <span className="text-[#64ffda]">Happy Raj</span>, a B.Tech student at IIIT Ranchi specializing in Electronics and Communication Engineering. I&apos;m passionate about coding and web development, with a focus on modern technologies like Next.js, TypeScript, MongoDB, and Tailwind CSS.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-lg leading-relaxed max-w-3xl"
          >
            I&apos;ve worked on projects such as <span className="text-[#64ffda]">NoteTrade</span> and <span className="text-[#64ffda]">Expiry Notifier</span>, and I&apos;m always looking to collaborate and learn new tech. I also qualified for the Google Solution Challenge 2023-24 Bootcamp, showcasing my leadership and teamwork skills.
          </motion.p>
        </div>

        {/* Profile Image - Right Side of "About Me" */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64"
        >
          <div className="rounded-full bg-gradient-to-r from-[#2b2d42] via-[#4c5c96] to-[#8d99ae] p-[4px]">
            <Image
              src="/happy1.jpg"
              alt="Profile Picture"
              className="rounded-full object-cover"
              layout="intrinsic"
              width={256}
              height={256}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12"
      >
        <h3 className="text-xl font-bold text-[#64ffda] mb-6 text-center">Skills</h3>
        {/* Field Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <motion.button
            onClick={() => setFieldType("languages")}
            whileHover={{ scale: 1.05 }}
            className={`${
              fieldType === "languages"
                ? "bg-[#64ffda] text-black scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-[#64ffda] hover:text-black"
            } px-6 py-3 rounded-lg shadow-md transition-all duration-300`}
          >
            Languages
          </motion.button>

          <motion.button
            onClick={() => setFieldType("frameworks")}
            whileHover={{ scale: 1.05 }}
            className={`${
              fieldType === "frameworks"
                ? "bg-[#64ffda] text-black scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-[#64ffda] hover:text-black"
            } px-6 py-3 rounded-lg shadow-md transition-all duration-300`}
          >
            Frameworks/Libraries
          </motion.button>

          <motion.button
            onClick={() => setFieldType("others")}
            whileHover={{ scale: 1.05 }}
            className={`${
              fieldType === "others"
                ? "bg-[#64ffda] text-black scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-[#64ffda] hover:text-black"
            } px-6 py-3 rounded-lg shadow-md transition-all duration-300`}
          >
            Other Technologies
          </motion.button>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map(
            (s, id) =>
              fieldType === s.field && (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (d += 0.05), type: "spring", stiffness: 120 }}
                  className="flex flex-col items-center justify-center bg-gradient-to-t from-[#1c2b3a] to-[#243b4e] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={s.image.src}
                    alt={s.name}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain shadow-lg"
                  />
                  <h1 className="text-center text-sm md:text-base text-gray-300 mt-3">
                    {s.name}
                  </h1>
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
