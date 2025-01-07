"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsMenuOpen(false); // Close the menu after scrolling
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f2755] z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl text-white font-bold tracking-wide cursor-pointer transition-transform transform hover:scale-105"
          aria-label="Portfolio"
        >
          Portfolio
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none transition-transform transform hover:rotate-180"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex text-lg items-center gap-7">
            {["Home", "About", "Projects", "Contact"].map(
              (item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleScroll}
                  className="nav-link mt-2 text-textDark hover:text-[#64ffdb] font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.1 }}
                  >
                    <span className="text-[#64ffdb]">{`0${index + 1}.`}</span>
                    <span className="inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                      {item}
                      <span className="absolute w-full h-[1px] bg-[#64ffdb] left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                  </motion.li>
                </Link>
              )
            )}
          </ul>
        </nav>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1xiromShrJtj2iSqsyitHhyNIsC6iQo-M/view?usp=sharing"
          target="_blank"
          className="hidden lg:inline-block"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-[#64ffdb] px-4 py-2 rounded-md font-medium text-sm border-[1.3px] border-[#64ffdb] hover:bg-[#0f2755] hover:bg-opacity-40 transition duration-300 ease-in-out"
          >
            Resume
          </motion.button>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#0f2755] flex flex-col items-center justify-center space-y-6 text-lg text-white font-medium transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["Home", "About", "Projects", "Contact"].map(
          (item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleScroll}
              className="nav-link hover:text-[#64ffdb] transition duration-300 ease-in-out"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#64ffdb]">{`0${index + 1}.`}</span>
                {item}
              </motion.div>
            </Link>
          )
        )}
        <a
          href="https://drive.google.com/file/d/1xiromShrJtj2iSqsyitHhyNIsC6iQo-M/view?usp=sharing"
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-[#64ffdb] px-4 py-2 rounded-md font-medium text-sm border-[1.3px] border-[#64ffdb] hover:bg-[#0f2755] hover:bg-opacity-40 transition duration-300 ease-in-out"
          >
            Resume
          </motion.button>
        </a>
      </div>
    </header>
  );
}
