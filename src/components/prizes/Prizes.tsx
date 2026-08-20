import Image from 'next/image';
import Radio from './radio';
import PrizesCard from './Card';
import { ScrollingTape } from '../scrollingTape/ScrollingTape';

function Prizes() {
  return (
    <div
      id="prizes"
      className="ssm:mb-40 relative mt-2 mb-32 scroll-mt-24 sm:mb-48 md:mb-[12vw]"
    >
      <div className="absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden">
        <Image
          src="/prizegrid.svg"
          alt="image"
          fill
          className="object-cover lg:object-cover"
        />
      </div>

      {/* Content */}
      <div className="ssm:pb-10 relative px-[3vw] py-2 pb-8 sm:pb-12 md:px-[8vw] md:py-4 lg:py-8">
        <h2 className="text-center font-[Canopee] text-[16vw] leading-normal font-normal text-[#2A5266] underline decoration-solid [text-shadow:1.5px_1.5px_0_#5A2D1D] [text-underline-position:from-font] sm:text-[14vw] md:text-[12vw] lg:[text-shadow:5px_5px_0_#5A2D1D]">
          Prizes
        </h2>
        <PrizesCard />
        <div className="my-8 hidden flex-row items-center justify-around gap-5 py-12 md:flex">
          <Radio name="OPENERS" char="A" color="#A83320" rotate="355" />
          <Radio name="REMIX" char="B" color="#5E7A3D" rotate="5" />
          <Radio name="ENCORE" char="A" color="#D4A017" rotate="355" />
        </div>
      </div>
      <ScrollingTape />
    </div>
  );
}

export default Prizes;
