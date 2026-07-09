'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Events', href: '/events' },
  ];
  const [isHamburg, setIsHamburg] = useState(false);

  // Prevent horizontal scroll page shift globally on all devices
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  // Prevent background page vertical scrolling when the full-screen mobile menu is open
  useEffect(() => {
    if (isHamburg) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [isHamburg]);

  return (
    <div className="relative mx-0 flex w-full max-w-full flex-col overflow-x-clip bg-[#F4E4B8] px-0">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <Image
          src="/Union2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <nav className="border-foreground bg-primary relative z-20 flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 px-6">
        <Image
          src="/hackodisha_white.png"
          alt="Logo"
          width={198}
          height={29}
          priority
          className="ssm:w-[198px] h-auto w-[140px]"
        />
        <ul className="font-canopee cmd:flex cmd:gap-4 mmd:gap-8 lmd:gap-15 hidden items-center uppercase">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-foreground hover:text-background cmd:text-[18px] mmd:text-[22px] lmd:text-[24px] text-[18px] transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setIsHamburg(true);
          }}
          className="cmd:hidden text-3xl text-[#E8DDB5] transition-transform duration-150 hover:scale-110 active:scale-90"
        >
          <Menu />
        </button>
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="cmd:flex cmd:h-10 cmd:px-4 cmd:shadow-[5px_5px_0px_#000] relative hidden h-8 cursor-pointer items-center justify-center gap-2 bg-[#2A5266] px-3 shadow-[4px_4px_0px_#000] transition-all duration-300 hover:scale-110"
        >
          <Image
            src="/Discord.png"
            alt="Discord"
            width={20}
            height={20}
            className="h-auto w-auto"
          />
          <h1 className="cmd:text-2xl font-canopee text-xl tracking-tight text-[#E8DDB5]">
            DISCORD
          </h1>
        </a>
      </nav>

      {/* Full-screen Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isHamburg && (
          <>
            {/* Semi-transparent backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHamburg(false)}
              className="cmd:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="cmd:hidden text-foreground fixed inset-0 z-50 flex h-screen w-screen flex-col bg-[#F4E4B8]"
            >
              {/* Header inside Sidebar matching original nav bar layout */}
              <div className="bg-primary flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 border-[#1A0E05] px-6">
                <Image
                  src="/hackodisha_white.png"
                  alt="Logo"
                  width={198}
                  height={29}
                  priority
                  className="ssm:w-[198px] h-auto w-[140px]"
                />
                <button
                  onClick={() => setIsHamburg(false)}
                  className="relative flex h-11 w-11 items-center justify-center border-4 border-[#1A0E05] bg-[#2A5266] shadow-[3px_3px_0px_#1A0E05] transition-all hover:scale-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-[#E8DDB5]" />
                </button>
              </div>

              {/* Sidebar Links & Actions */}
              <div className="relative flex flex-grow flex-col items-center justify-start gap-6 overflow-y-auto bg-[linear-gradient(rgba(26,14,5,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,14,5,0.04)_1px,transparent_1px)] bg-[size:20px_20px] px-8 py-10">
                {/* Background Pattern overlay inside sidebar */}
                <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
                  <Image
                    src="/Union2.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nav items list */}
                <ul className="font-canopee relative z-10 flex w-full max-w-sm flex-col gap-4 text-center">
                  {navItems.map((item, idx) => {
                    // Unique color theme and rotation for each card
                    const colors = [
                      {
                        bg: 'bg-[#E3442E]',
                        text: 'text-[#E8DDB5]',
                        rotate: '-rotate-1',
                      },
                      {
                        bg: 'bg-[#2A5266]',
                        text: 'text-[#E8DDB5]',
                        rotate: 'rotate-1',
                      },
                      {
                        bg: 'bg-[#F4E4B8]',
                        text: 'text-[#1A0E05]',
                        rotate: '-rotate-1',
                      },
                      {
                        bg: 'bg-[#E3442E]',
                        text: 'text-[#E8DDB5]',
                        rotate: 'rotate-1',
                      },
                    ];
                    const design = colors[idx % colors.length];

                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="w-full"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsHamburg(false)}
                          className={`block w-full border-4 border-[#1A0E05] py-3.5 text-center text-3xl tracking-wider uppercase shadow-[5px_5px_0px_#1A0E05] transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0px_#1A0E05] ${design.bg} ${design.text} ${design.rotate} hover:rotate-0`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Dates Badge inside sidebar */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center py-4 rounded-[16px] border-4 border-dashed border-[#1A0E05] bg-[#2A5266] text-[#E8DDB5] shadow-[4px_4px_0px_#1A0E05] rotate-1"
                >
                  <span className="font-canopee text-3xl leading-none">05-06TH SEPT 2026</span>
                  <span className="font-editorial text-sm tracking-widest uppercase mt-1 opacity-80">Bhubaneswar, Odisha</span>
                </motion.div> */}

                {/* Discord Button inside sidebar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                  className="relative z-10 mt-2 flex w-full justify-center"
                >
                  <a
                    href="https://discord.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsHamburg(false)}
                    className="font-canopee flex h-14 w-full max-w-sm cursor-pointer items-center justify-center gap-3 border-4 border-[#1A0E05] bg-[#2A5266] px-6 text-[#E8DDB5] shadow-[5px_5px_0px_#1A0E05] transition-all duration-300 hover:scale-105 hover:bg-[#1A0E05] active:scale-95"
                  >
                    <Image
                      src="/Discord.png"
                      alt="Discord"
                      width={24}
                      height={24}
                      className="h-auto w-auto"
                    />
                    <span className="text-2xl tracking-tight">
                      JOIN DISCORD
                    </span>
                  </a>
                </motion.div>

                {/* Footer info inside sidebar */}
                <div className="relative z-10 mt-auto pt-6 text-center font-sans text-xs tracking-widest text-[#1A0E05]/60 uppercase">
                  © {new Date().getFullYear()} HACK ODISHA • ALL RIGHTS RESERVED
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* #main */}
      <div className="cmd:px-8 lmd:flex-row lmd:gap-8 lmd:pl-20 lmd:pr-0 lmd:min-h-[82vh] relative z-10 flex w-full flex-col items-center gap-4 pt-2 pb-0">
        {' '}
        {/* Left Column: Info & CTAs */}
        <div className="lmd:w-[42%] lmd:items-start lmd:text-left flex w-fit flex-col items-center gap-2 text-center">
          {' '}
          <Image
            src="/hackodisha60logo.png"
            alt="HackOdisha 6.0"
            width={930}
            height={350}
            priority
            className="ssm:max-w-[380px] cmd:max-w-[550px] lmd:max-w-[850px] h-auto w-full max-w-[300px] object-contain"
          />
          <div className="cmd:gap-4 lmd:justify-start flex w-full items-center justify-center gap-2">
            {' '}
            <Image
              src="/60.png"
              alt="6.0"
              width={350}
              height={500}
              className="ssm:w-[130px] cmd:w-[220px] lmd:w-[260px] h-auto w-[100px] object-contain"
            />
            <div className="ssm:w-[220px] ssm:h-[120px] cmd:w-[320px] cmd:h-[160px] lmd:w-[420px] lmd:h-[180px] relative flex h-[100px] w-[180px] flex-col items-center justify-center rounded-[20px] border-[4px] border-dashed border-[#1A0E05] bg-[#2A5266] text-[#E8DDB5]">
              <Image
                src={'/Union.png'}
                width={180}
                height={100}
                alt=""
                className="absolute h-full w-full opacity-50"
              />

              <p className="font-canopee ssm:text-[32px] cmd:text-[36px] lmd:text-[56px] relative flex justify-items-start text-[28px] leading-none md:right-7">
                05-06TH
              </p>

              <p className="font-canopee ssm:text-[20px] cmd:text-[24px] lmd:text-[42px] text-[24px] uppercase">
                September 2026
              </p>
            </div>
          </div>
          <div className="lmd:justify-start ssm:gap-4 mt-4 flex w-full items-center justify-center gap-2">
            {' '}
            <div className="cmd:w-20 cmd:h-20 relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110">
              <div className="cmd:h-16 cmd:w-16 relative h-12 w-12">
                <Image
                  src="/Ellipse_2862.png"
                  alt=""
                  width={260}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/Polygon_1.png" alt="" width={20} height={20} />
              </div>
            </div>
            <Link
              href="#"
              className="ssm:h-[56px] ssm:px-8 cmd:h-[72px] cmd:px-10 lmd:h-[84px] lmd:px-12 flex h-12 items-center justify-center rounded-full bg-[#1A0E05] px-6 transition-all duration-300 hover:scale-105 hover:bg-[#2A5266]"
            >
              <span className="font-canopee ssm:text-[24px] cmd:text-[32px] lmd:text-[48px] text-[18px] leading-none whitespace-nowrap text-[#E8DDB5]">
                APPLY WITH DEVFOLIO
              </span>
            </Link>
          </div>
        </div>
        {/* Right Column: Retro TV Monitor */}
        <div className="lmd:px-0 ssm:max-w-[440px] cmd:max-w-[760px] lmd:max-w-[1200px] lmd:w-[58%] lmd:mr-0 lmd:ml-auto lmd:self-end relative mx-0 my-0 flex w-full max-w-[550px] flex-col py-0 sm:mx-auto">
          {/* Desktop TV Monitor (shown on desktop) */}
          <div className="lmd:block relative hidden w-full">
            <Image
              src="/tvFrame.png"
              alt="TV Frame Desktop"
              width={1380}
              height={1200}
              priority
              className="block h-auto w-full"
            />
            <Image
              src="/tvScreen.png"
              alt="TV Screen Desktop"
              width={536}
              height={425}
              className="absolute w-full object-cover"
              style={{
                left: '32.35%',
                top: '11.72%',
                width: '49.63%',
                height: '44.18%',
              }}
            />
          </div>

          {/* Mobile TV Monitor (shown on mobile/tablet) */}
          <div className="lmd:hidden relative block w-full">
            <Image
              src="/tvfraameMobile.png"
              alt="TV Frame Mobile"
              width={400}
              height={508}
              priority
              className="mx-[-4px] h-auto w-full px-0"
            />
            <Image
              src="/tvScreen.png"
              alt="TV Screen Mobile"
              width={536}
              height={425}
              className="absolute"
              style={{
                left: '25%',
                top: '10%',
                width: '44%',
                height: '40%',
              }}
            />
          </div>
        </div>
      </div>

      {/* footer tape */}
      <div className="ssm:-mt-[11vw] cmd:-mt-[8vw] lmd:-mt-[5.3vw] relative z-20 -mt-[13vw] w-full">
        <Image
          src="/footertape.png"
          alt="Film Tape"
          width={1920}
          height={180}
          priority
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
