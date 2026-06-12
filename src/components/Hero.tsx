'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
function Hero() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden bg-[#F4E4B8]">
      <img
        src="./Union2.png"
        alt=""
        className="pointer-events-none absolute z-0 h-full w-full opacity-30"
      />
      <nav className="border-foreground bg-primary relative z-20 flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 px-6">
        <img
          src="/hackodisha_white.png"
          alt="Logo"
          className="cmd:h-8 cmd:left-10 relative left-0 h-6 text-white"
        />
        <ul className="cmd:flex font-canopee hidden items-center gap-15 text-[28px] tracking-wide uppercase">
          <li>
            <a
              href="#"
              onClick={() => router.push('/home')}
              className="text-foreground hover:text-background cursor-pointer transition-colors duration-300 hover:scale-105"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => router.push('/about')}
              className="text-foreground hover:text-background cursor-pointer transition-colors duration-300 hover:scale-105"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => router.push('/contact')}
              className="text-foreground hover:text-background cursor-pointer transition-colors duration-300 hover:scale-105"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => router.push('/events')}
              className="text-foreground hover:text-background cursor-pointer transition-colors duration-300 hover:scale-105"
            >
              Events
            </a>
          </li>
        </ul>
        <div className="cmd:shadow-[5px_5px_0px_#000] cmd:h-10 cmd:w-30 relative flex h-8 w-26 cursor-pointer items-center justify-center gap-2 bg-[#2A5266] px-3 py-1 shadow-[4px_4px_0px_#000] transition-all duration-300 hover:scale-110">
          <img
            src="/Discord.png"
            alt="Discord"
            className="cmd:h-4 h-3 cursor-pointer transition-all duration-300 hover:scale-110"
          />

          <h1 className="cmd:text-2xl font-canopee text-xl tracking-tight text-[#E8DDB5]">
            DISCORD
          </h1>
        </div>
      </nav>

      {/* #main */}
      <div className="lmd:flex-row lmd:px-20 relative z-10 flex min-h-[82vh] w-full flex-col items-center justify-between overflow-hidden px-8 py-8">
        {' '}
        {/* Left Column: Info & CTAs */}
        <div className="lmd:w-[33%] lmd:items-start lmd:text-left flex w-full flex-col items-center gap-2 text-center">
          {' '}
          <img
            src="/hackodisha60logo.png"
            alt="HACKODISHA"
            className="cmd:w-[750px] h-auto w-full max-w-[750px] object-contain"
          />
          <div className="lmd:justify-start flex h-full w-full max-w-[550px] items-center justify-center gap-4">
            <img
              src="/60.png"
              alt="6.0"
              className="cmd:w-[350px] h-auto w-[250px] object-contain md:w-[220px]"
            />
            <img
              src="/blue_date.png"
              alt="05-06TH SEPTEMBER 2026"
              className="cmd:w-[350px] h-auto w-[250px] object-contain md:w-[800px]"
            />
          </div>
          <div className="lmd:justify-start mt-2 flex w-100 max-w-[550px] items-center justify-center gap-4">
            <div className="cmd:w-20 cmd:h-20 relative flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src="/Ellipse_2862.png"
                alt="Play Outer"
                className="h-full w-full object-contain"
              />
              <img
                src="/Polygon_1.png"
                alt="Play Inner"
                className="ssm:w-6 ssm:h-6 absolute top-[50%] left-[54%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
            <a
              href="#"
              className="ssm:h-12 ssm:px-8 flex h-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1A0E05] transition-colors transition-transform duration-300 hover:scale-105 hover:bg-[#2A5266]"
            >
              <img
                src="/Apply_with_devfolio.png"
                alt="APPLY WITH DEVFOLIO"
                className="ssm:h-5 h-12 w-130"
              />
            </a>
          </div>
        </div>
        {/* Right Column: Retro TV Monitor */}
        <div className="lmd:w-[60%] relative left-20 z-10 flex h-auto w-full items-center justify-center">
          <div className="lmd:max-w-[900px] relative top-10 bottom-2 w-full max-w-[850px]">
            <img
              src="/tvFrame.png"
              alt="Monitor Frame"
              className="pointer-events-none h-full w-full object-contain"
            />
            <img
              src="/tvScreen.png"
              alt="Monitor Screen"
              className="absolute rounded-[1%] object-cover"
              style={{
                left: '32.35%',
                top: '11.72%',
                width: '49.63%',
                height: '44.18%',
              }}
            />
          </div>
        </div>
      </div>

      {/* footer tape */}
      <div className="lmd:-mt-24 relative top-8 z-0 w-full">
        <img
          src="/footertape.png"
          alt="Film Tape"
          className="pointer-events-none relative h-auto w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
