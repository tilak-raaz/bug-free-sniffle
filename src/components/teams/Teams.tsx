'use client';
import Image from 'next/image';
import TeamMembersGrid from './TeamMember';

function Teams() {
  return (
    <div id="team" className="relative my-2 scroll-mt-24">
      <main className="relative p-[3vw] lg:p-[2.5vw]">
        <h1 className="text-center font-[Canopee] text-[16vw] leading-none font-normal text-[#2A5266] underline decoration-solid [text-shadow:1.5px_1.5px_0_#5A2D1D] [text-underline-position:from-font] sm:text-[14vw] md:text-[12vw] lg:[text-shadow:4px_4px_0_#1a0e05]">
          Our Team
        </h1>
        <TeamMembersGrid />
      </main>
      {/* <div className="w-full">
        <Image
          src="/teampixel.svg"
          alt="Red Tape Footer"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div> */}
    </div>
  );
}

export default Teams;
