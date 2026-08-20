'use client';
import Image from 'next/image';
import { useState } from 'react';
import { timelineConfig, type TimelineEvent } from '@/config';

type DayKey = 1 | 2;

type TimelineDayButtonProps = {
  day: DayKey;
  activeDay: DayKey;
  onSelect: (day: DayKey) => void;
};

type TimelineEventRowProps = {
  event: TimelineEvent;
};

function TimelineBadge({ activeDay, day, onSelect }: TimelineDayButtonProps) {
  const isActive = activeDay === day;

  return (
    <button
      onClick={() => onSelect(day)}
      className={`flex cursor-pointer items-center justify-center border-2 border-[#1A0E05] px-[4vw] shadow-[1px_1px_0px_#1A0E05] transition-all duration-300 ${
        isActive ? 'bg-[#F4E4B8]' : 'bg-[#E3442E]'
      }`}
    >
      <span
        className={`font-canopee text-[4vw] sm:text-[4vw] ${
          isActive ? 'text-[#E3442E]' : 'text-[#F4E4B8]'
        }`}
      >
        {day === 1 ? 'DAY-1' : 'DAY-2'}
      </span>
    </button>
  );
}

function TimelineEventRow({ event }: TimelineEventRowProps) {
  const isEmphasizedTime = event.color === '#A83320';

  return (
    <div className="flex flex-3 items-center border-[1.1px] border-[2px] border-[#1A0E05] bg-[#F4E4B8] shadow-[1.4px_1.4px_0px_#1A0E05] md:border-[3px] md:shadow-[2px_2px_0px_#1A0E05]">
      <div
        className="flex w-[16vw] items-center justify-center self-stretch border-r-[2px] border-[#1A0E05] md:border-r-[4px] lg:w-[14vw]"
        style={{ backgroundColor: event.color }}
      >
        <span
          style={{
            fontFamily: isEmphasizedTime ? '"PP Editorial New"' : 'Canopee',
          }}
          className={`whitespace-nowrap text-[#F4E4B8] ${
            isEmphasizedTime
              ? 'text-[2vw] font-extrabold'
              : 'text-[2vw] font-normal'
          }`}
        >
          {event.time}
        </span>
      </div>

      <div className="w-[55vw] px-2 text-center">
        <span
          className="font-canopee text-[3vw] tracking-[1px] uppercase md:tracking-[2px]"
          style={{
            color: event.color,
            WebkitTextStroke: `0.27px ${event.color}`,
          }}
        >
          {event.title}
        </span>
      </div>

      <div className="w-[6vw]">
        <span
          className="block text-center text-[8px] leading-[24px] md:hidden"
          style={{
            color: event.color,
            WebkitTextStroke: `1.5px ${event.color}`,
          }}
        >
          {event.tag}
        </span>

        <span
          className="hidden text-[17px] leading-[24px] md:block"
          style={{
            color: event.color,
            WebkitTextStroke: `0.27px ${event.color}`,
          }}
        >
          {event.tag}
        </span>
      </div>
    </div>
  );
}

export default function Timeline() {
  const [activeDay, setActiveDay] = useState<DayKey>(1);
  const events =
    activeDay === 1 ? timelineConfig.day1Events : timelineConfig.day2Events;

  return (
    <section
      id="timeline"
      className="relative mb-2 scroll-mt-24 bg-[#E3442E] p-[3vw] pb-[3rem]"
    >
      <div className="flex flex-3 items-center justify-between p-2">
        <div className="w-1/4">
          <Image
            src={timelineConfig.leftIconSrc}
            alt="Music Icon"
            width={300}
            height={400}
            className="w-[16vw]"
          />
        </div>
        <h1 className="font-canopee w-2/4 text-center text-[14vw] leading-none font-normal whitespace-nowrap text-[#1A0E05] underline decoration-[#1A0E05] [text-shadow:2px_2px_0px_#F4E4B8] sm:text-[12vw] lg:text-[10vw]">
          {timelineConfig.heading}
        </h1>

        <div className="flex w-1/4 items-center justify-end">
          <Image
            src={timelineConfig.rightIconSrc}
            alt="Music Icon"
            width={0}
            height={0}
            className="w-[16vw]"
          />
        </div>
      </div>

      {/* Left CD */}
      <div className="ssm:top-[11rem] absolute top-[10rem] left-0 sm:top-[18rem] md:top-[20rem] lg:top-[26rem]">
        <Image
          src="/leftcd.svg"
          alt="Left CD"
          width={500}
          height={500}
          className="ssm:w-[32vw] w-[35vw] sm:w-[28vw] md:w-[26vw] lg:w-[24vw] xl:w-[22vw]"
        />
      </div>

      {/* Right CD */}
      <div className="ssm:top-[11rem] absolute top-[10rem] right-0 sm:top-[18rem] md:top-[20rem] lg:top-[26rem]">
        <Image
          src="/rightdisc.svg"
          alt="Right CD"
          width={500}
          height={500}
          className="ssm:w-[32vw] w-[35vw] sm:w-[28vw] md:w-[26vw] lg:w-[24vw] xl:w-[22vw]"
        />
      </div>
      <div className="absolute -bottom-0.5 left-0 w-full lg:-bottom-1">
        <Image
          src={timelineConfig.timelinebottomTapeSrc}
          alt="Bottom Tape"
          width={0}
          height={0}
          className="w-full"
        />
      </div>

      <div className="relative z-10 mx-[7vw] my-[1rem] bg-[#F4E4B8] px-[1vw] py-[1rem] shadow-[7px_7px_0px_#1A0E05] sm:my-[3rem] sm:mb-[5rem] sm:px-[2vw] sm:py-[2rem] lg:mb-[8rem]">
        <div className="relative flex flex-3 flex-row sm:my-[2rem]">
          <div className="flex w-1/4 items-center justify-start">
            <Image
              src={timelineConfig.iconSrc}
              alt="music"
              width={500}
              height={500}
              className="w-[16vw]"
            />
          </div>

          <div className="flex w-2/4 flex-col items-center">
            <div className="flex md:shadow-[2px_2px_0px_#1A0E05]">
              <TimelineBadge
                day={1}
                activeDay={activeDay}
                onSelect={setActiveDay}
              />
              <TimelineBadge
                day={2}
                activeDay={activeDay}
                onSelect={setActiveDay}
              />
            </div>

            <div className="font-canopee mt-[3vw] flex w-full items-center justify-center border-2 border-[#1A0E05] bg-[#2A5266] px-[2vw] text-center text-[4vw] font-normal text-[#F4E4B8] shadow-[2px_2px_0px_#1A0E05]">
              {timelineConfig.dateLabel}
            </div>
          </div>

          <div className="flex w-1/4 items-center justify-end">
            <Image
              src={timelineConfig.iconSrc}
              alt="music"
              width={500}
              height={500}
              className="w-[16vw]"
            />
          </div>
        </div>

        <div className="my-[1rem]">
          <div className="flex flex-col gap-2 md:gap-4">
            {events.map((event, index) => (
              <TimelineEventRow
                key={`${event.time}-${event.title}-${index}`}
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
