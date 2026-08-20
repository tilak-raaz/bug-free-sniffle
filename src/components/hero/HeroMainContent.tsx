'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { heroConfig } from '@/config';
import { ScrollingTape } from '@/components/scrollingTape/ScrollingTape'; // Adjust this path to match your folder structure

export function HeroMainContent() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-[9vw] flex flex-col items-center justify-center gap-4 p-2 md:flex-row md:gap-0">
      <div className="w-[100vw] px-[10vw] md:w-[60vw] md:px-[6vw] md:py-[8vw]">
        <Image
          src={heroConfig.assets.heroLogo}
          alt="HackOdisha 6.0"
          width={930}
          height={350}
          priority
        />

        <div className="mt-3 flex justify-start gap-2 space-x-2 md:gap-4">
          <Image
            src={heroConfig.assets.versionImage}
            alt="6.0"
            width={600}
            height={400}
            className="h-max max-w-[24vw] md:max-w-[14vw]"
          />

          <div className="relative z-10 flex w-full flex-1 items-center justify-center overflow-hidden rounded-[22px] border-t-[5px] border-l-[5px] border-dashed border-[#1A0E05] bg-[#2A5266] px-[3vw] py-[2vw]">
            <Image
              src={heroConfig.assets.datePattern}
              alt="Date Pattern"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 flex w-full flex-col gap-1 py-2">
              <p className="font-canopee text-shadow ssm:text-[7vw] lmd:text-[4vw] text-[6.5vw] leading-[100%] font-normal tracking-normal text-[#E8DDB5] md:text-[3.5vw]">
                {heroConfig.event.dayRange}
              </p>
              <h1 className="font-canopee text-shadow ssm:text-[7vw] lmd:text-[4vw] text-[6.5vw] leading-[100%] font-normal tracking-normal text-[#E8DDB5] md:text-[3.5vw]">
                {heroConfig.event.monthAndYear}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative w-max">
            {isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                aria-pressed="true"
                className=""
              >
                <Image
                  src={heroConfig.assets.pauseIcon}
                  alt="Pause"
                  width={700}
                  height={600}
                  className="w-24 md:h-28 md:w-max"
                />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-pressed="false"
                className=""
              >
                <Image
                  src={heroConfig.assets.playIcon}
                  alt="Play"
                  width={700}
                  height={600}
                  className="w-24 md:h-28 md:w-max"
                />
              </button>
            )}
          </div>
          <div className="h-full w-full rounded-[151px] bg-[#1A0E05] px-[7vw] py-3 text-center md:px-[2vw]">
            <Link href={heroConfig.event.applyHref}>
              <h1 className="font-canopee text-[5.5vw] leading-[100%] font-normal text-[#F4E4B8] md:text-[3.5vw]">
                {heroConfig.event.applyLabel}
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[40vw]">
        <div className="relative right-[70%] hidden w-[80vw] md:right-[35%] md:block md:w-[55vw]">
          <Image
            src={heroConfig.assets.tvDesktopFrame}
            alt="TV Frame Desktop"
            width={1380}
            height={1200}
            priority
            fetchPriority="high"
            className="block w-[80vw] md:w-[55vw]"
          />
        </div>
        <div className="relative right-[74%] block w-[100vw] md:right-[35%] md:hidden md:w-[55vw]">
          <Image
            src={heroConfig.assets.tvmobileFrame}
            alt="TV Frame Mobile"
            width={1380}
            height={1200}
            priority
            fetchPriority="high"
            className="block w-[100vw] md:w-[55vw]"
          />
        </div>
      </div>
      <div className="absolute -bottom-[15.75vw] left-0 z-50 h-[30vw] w-full md:-bottom-[24vw] lg:-bottom-[26.25vw] xl:-bottom-[26.5vw]">
        <ScrollingTape />
      </div>
    </div>
  );
}
