import Image from "next/image";

export default function Home() {
  return (
    <div className="scrollbar-hide bg-gradient-to-t from-neutral-900 via-blue-900 to-pink-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-purple-950 via-blue-900 to-purple-950 px-[15px] text-center fancy-shadow md:h-16">
        <div className="grid grid-cols-8 grid-rows-1 gap-4 px-20 h-full pr-32">
          <div className="col-span-1 flex flex-row-reverse align-middle content-center pr-5">
            <Image
              src="/Logo.svg"
              alt="Main Logo"
              className="items-center justify-center content-center"
              width={33}
              height={37}
            />
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">Home</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">Apply</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">The Founder's Arena</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">Schedule</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">About Us</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">FAQ</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#" className="font-franklinGothic text-lg font-semibold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Scrollable Content Wrapper */}
      <div className="position-relative w-[100vw] min-h-[200vh] flex justify-center items-start" />
      {/* Logo Container (Moves Together) */}
      {/* Logos - Ensure They Appear on Top */}
      <div className="absolute w-[100vw] top-[20%] left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <Image
          src="/Logo.svg"
          alt="Main Logo"
          className="absolute bottom-[-400px] h-auto z-50 logo-filter"
          width={402}
          height={439}
        />
        <Image
          src="/HackDayLogo.svg"
          alt="Hack Day Logo"
          className="absolute bottom-[-520px] h-auto z-50 hackday-logo-filter"
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
        <section className="mx-auto p-[50px] info-bg border-r-[10px] info-shadow">
          <h2 className="text-5xl font-bold">ARE YOU READY TO GO BEYOND?</h2>
          <p className="text-2xl mt-4">APPLY</p>
        </section>
        <section className="mx-auto p-[50px] info-bg border-r-[10px] info-shadow">
          <h2 className="text-5xl font-bold">THE FOUNDER'S ARENA</h2>
          <p className="text-2xl mt-4 leading-relaxed">
            The Founders Arena is a unique and first-of-its-kind "go-to-market"
            Accelerator specifically for WealthTech companies looking to scale
            across the global WealthTech market. With a team of Executive
            Ambassadors, industry experts can guide and drive our start-ups to
            quicker growth...
          </p>
        </section>
        <section className="mx-auto p-[50px] info-bg border-r-[10px] info-shadow">
          <h2 className="text-5xl font-bold">Meet the Team</h2>
          <p className="text-2xl mt-4">HackUTA Team Information</p>
        </section>
      </div>

    </div>
  );
}
