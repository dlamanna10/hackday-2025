'use client';

import {useState} from 'react';
import Image from "next/image";
import {Menu, X } from "lucide-react";

export default function Home() {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <div className="scrollbar-hide bg-gradient-to-t from-neutral-900 via-blue-900 to-pink-800 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-purple-950 via-blue-900 to-purple-950 px-[15px] text-center fancy-shadow md:h-16">
        <div className="flex items-center justify-between h-full px-5 md:px-20">
          <div className="flex items-center">
            <Image src="/Logo.svg" alt="Main Logo" width={33} height={37} priority />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-24 justify-center w-full">
            {["Home", "Apply", "The Founder's Arena", "Schedule", "About Us", "FAQ", "Contact"].map((item) => (
              <a key={item} href="#" className="font-franklinGothic text-xl font-normal hover:text-purple-300 transition">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          <div
            className={`absolute top-full left-0 w-full bg-purple-950 flex flex-col items-center space-y-4 py-4 transition-all ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {["Home", "Apply", "The Founder's Arena", "Schedule", "About Us", "FAQ", "Contact"].map((item) => (
              <a key={item} href="#" className="font-franklinGothic text-xl font-normal hover:text-gray-300 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Scrollable Content Wrapper */}
      <div className="position-relative w-[100vw] min-h-[200vh] flex justify-center items-start" />
      {/* Logo Container (Moves Together) */}
      {/* Logos - Ensure They Appear on Top */}
      <div className="absolute w-full top-[-10%] sm:top-[25%] md:top-[20%] lg:top-[25%] left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <Image
          src="/Logo.svg"
          alt="Main Logo"
          className="absolute bottom-[-400px] w-[60%] max-w-[300px] md:max-w-[400px]  h-auto z-50 logo-filter"
          width={402}
          height={439}
        />
        <Image
          src="/HackDayLogo.svg"
          alt="Hack Day Logo"
          className="absolute bottom-[-460px] md:bottom-[-520px] w-[60%] max-w-[300px] md:max-w-[400px] h-auto z-50 hackday-logo-filter"
          width={418}
          height={113}
        />
      </div>

      {/* Buildings + Glow (Moves Together) */}
      <div className="absolute w-full bottom-0 left-0 flex justify-center items-end">
        <div className="relative w-full h-auto">
          <Image
            src="/BuildingGlow.svg"
            alt="Building Glow"
            className="absolute bottom-[-480px] w-full h-auto z-10 building-glow-mask"
            width={1438}
            height={730}
          />
          <Image
            src="/Buildings.svg"
            alt="Buildings"
            className="absolute bottom-[-480px] w-full h-auto z-20 building-mask"
            width={1440}
            height={761}
          />
        </div>
      </div>

      {/* Information Section */}
      <div className="font-franklinCondensed text-white text-center w-[100vw] mx-auto p-[40px] mt-[-150px]">
        <section className="mx-auto p-[50px]">
          <h2 className="text-5xl font-bold">ARE YOU READY TO GO BEYOND?</h2>
          <p className="text-2xl mt-4">APPLY</p>
        </section>
        <section className="mx-auto p-[50px]">
          <h2 className="text-5xl font-bold">THE FOUNDER'S ARENA</h2>
          <p className="text-2xl mt-4 leading-relaxed">
            The Founders Arena is a unique and first-of-its-kind "go-to-market"
            Accelerator specifically for WealthTech companies looking to scale
            across the global WealthTech market. With a team of Executive
            Ambassadors, industry experts can guide and drive our start-ups to
            quicker growth...
          </p>
        </section>
        <section className="mx-auto p-[50px]">
          <h2 className="text-5xl font-bold">Meet the Team</h2>
          <p className="text-2xl mt-4">HackUTA Team Information</p>
        </section>
      </div>

    </div>
  );
}
