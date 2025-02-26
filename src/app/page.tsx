import Image from "next/image";

export default function Home() {
  return (
    <div className="scrollbar-hide bg-gradient-to-t from-neutral-900 via-blue-900 to-pink-800">
      {/* Navbar */}
      <nav className="position-fixed top-0 left-0 w-full z-100 bg-gradient-to-r from-purple-950 via-blue-900 to-purple-950 padding-x-[15px] text-align-center fancy-shadow md:h-16">
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
            <a href="#">Home</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">Apply</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">The Founder's Arena</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">Schedule</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">About Us</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">FAQ</a>
          </div>
          <div className="flex align-middle justify-center items-center content-center">
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
      {/* Scrollable Content Wrapper */}
      <div className="position-relative w-[100vw] min-h-[200vh] flex justify-center items-start" />
      {/* Logo Container (Moves Together) */}
      <div className="position-absolute w-[100vw] top-[20%] left-1/2 logo-transform z-4 flex flex-col items-center">
        <Image
          src="/Logo.svg"
          alt="Main Logo"
          className="h-auto z-4 logo-filter"
          width={402}
          height={439}
        />
        <Image
          src="/HackDayLogo.svg"
          alt="Hack Day Logo"
          className="h-auto z-4 hackday-logo-filter"
          width={418}
          height={113}
        />
      </div>
      {/* Buildings + Glow (Moves Together) */}
      <div className="position-absolute w-[100vw] bottom-0 left-0 z-2 will-change-transform">
        <Image
          src="/BuildingGlow.svg"
          alt="Building Glow"
          className="position-absolute w-[100vw] h-auto bottom-[-500px] left-0 z-1 building-glow-filter building-glow-mask"
          width={1438}
          height={730}
        />
        <Image
          src="/Buildings.svg"
          alt="Buildings"
          className="position-absolute w-[100vw] h-auto bottom-[-500px] left-0 z-2 building-mask"
          width={1440}
          height={761}
        />
      </div>
      {/* Information Section */}
      <div className="text-white text-center max-w-[900px] my-auto p-[40px] mt-[-150px]">
        <section className="mx-[60px] p-[50px] info-bg border-r-[10px] info-shadow">
          <h2>ARE YOU READY TO GO BEYOND?</h2>
          <p>APPLY</p>
        </section>
        <section className="mx-[60px] p-[50px] info-bg border-r-[10px] info-shadow">
          <h2>THE FOUNDER'S ARENA</h2>
          <p>
            The Founders Arena is a unique and first-of-its-kind "go-to-market"
            Accelerator specifically for WealthTech companies looking to scale
            across the global WealthTech market. With a team of Executive
            Ambassadors, industry experts can guide and drive our start-ups to
            quicker growth. Our focus is on fostering collaboration, innovation,
            and entrepreneurship, and we are committed to creating a supportive
            and inclusive community for all our participants.
          </p>
        </section>
        <section className="mx-[60px] p-[50px] info-bg border-r-[10px] info-shadow">
          <h2>Meet the Team</h2>
          <p>HackUTA Team Information</p>
        </section>
      </div>
    </div>
  );
}
