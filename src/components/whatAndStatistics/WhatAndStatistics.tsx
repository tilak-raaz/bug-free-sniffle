'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'; // Import the new library
import Statistics from './Statistics';
import WhatIsHO from './WhatIsHO';
import { images, timelineConfig } from '@/config';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function WhatAndStatistics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const paragraphs = containerRef.current?.querySelectorAll(
        '.scroll-reveal-text'
      );

      if (paragraphs && paragraphs.length > 0) {
        paragraphs.forEach((p) => {
          // 1. Break the paragraph into individual lines
          const splitText = new SplitType(p as HTMLElement, { types: 'lines' });

          // 2. Animate the lines individually
          // We must ensure splitText.lines is not null before animating
          if (splitText.lines) {
            gsap.fromTo(
              splitText.lines,
              {
                opacity: 0.15,
                y: 15, // Start slightly lower
              },
              {
                opacity: 1,
                y: 0,
                stagger: 0.2, // THIS is the magic: adds a delay between each line animating
                ease: 'none',
                scrollTrigger: {
                  trigger: p,
                  start: 'top 85%',
                  end: 'bottom 60%', // Extends the animation time down the paragraph
                  scrub: 1,
                },
              }
            );
          }
        });
      }
    }, containerRef);

    // Cleanup: Revert GSAP animations to prevent memory leaks
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="about" className="relative flex scroll-mt-24">
      <div className="mt-[3vw] w-3/4 px-[4vw] pt-[7vw] sm:pt-[7vw] md:mt-[5vw] md:pt-[3vw] lg:mt-[6vw]">
        <div className="absolute top-40 left-0 z-[-1] h-full w-full">
          <Image
            src={images.background}
            alt="Background"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <WhatIsHO />

        <div className="absolute left-0 my-8 h-2 w-[50vw] bg-[linear-gradient(to_right,#1A0E05_0%,rgba(26,14,5,0)_100%)] md:my-20" />
        <Statistics />

        <div className="absolute bottom-[-3.25vw] left-0 -z-10 w-full md:bottom-[-3.5vw]">
          <Image
            src={timelineConfig.bottomTapeSrc}
            alt="Bottom Tape"
            width={0}
            height={0}
            className="w-screen"
          />
        </div>
      </div>

      <div className="relative w-1/4 self-stretch overflow-hidden">
        <Image
          src={images.rightImgAbout}
          alt=""
          fill
          sizes="25vw"
          className="object-cover object-top pt-[3.5vw] md:pt-[2vw] lg:pt-[3vw] xl:pt-[2.75vw]"
        />
      </div>
    </div>
  );
}

export default WhatAndStatistics;
