'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { heroConfig } from '@/config';

import { HeroMainContent } from './HeroMainContent';

function Hero() {
  const [isHamburg, setIsHamburg] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isHamburg ? 'hidden' : '';

    return () => {
      document.body.style.overflowY = '';
    };
  }, [isHamburg]);

  return (
    <div
      id="home"
      className="relative mx-0 flex w-full max-w-full scroll-mt-24 flex-col overflow-x-clip bg-[#F4E4B8] px-0 pt-17.5"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-100">
        <Image
          src={heroConfig.assets.pattern}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <HeroMainContent />
    </div>
  );
}

export default Hero;
