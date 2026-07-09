'use client';
import React, { useState } from 'react';
import { faqData, FAQItem } from './faqData';
import Image from 'next/image';

const CLOUDINARY_ASSETS = {
  topCheckers:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/f_auto,q_auto/v1780927948/top-checkers_u5u5xk.png',
  vinylRight:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/f_auto,q_auto/v1780928113/cd-right_mlkjxa.png',
  vinylLeft:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/v1781588989/Vector_xqocov.png',
  bottomrail:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/v1781275139/Group_1321317612_vbgydq.png',
};

const FAQAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="relative w-full px-2 py-8 pb-16 font-sans select-none md:min-h-screen md:px-4 md:py-12 md:pb-12">
      <div className="">
        <div
          className="absolute top-0 right-0 left-0 z-10 h-6 md:h-8"
          style={{
            backgroundImage: `url('${CLOUDINARY_ASSETS.topCheckers}')`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="pointer-events-none absolute top-2/3 -left-16 w-[60%] -translate-y-70 opacity-100 mix-blend-multiply md:left-0 md:w-[7%] md:w-[28%] md:max-w-none md:-translate-y-125">
          <Image
            src={CLOUDINARY_ASSETS.vinylLeft}
            alt="Retro Vinyl Left"
            width={320}
            height={320}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="pointer-events-none absolute top-2/3 -right-20 w-[60%] -translate-y-70 opacity-100 mix-blend-multiply md:right-0 md:w-[7%] md:w-[28%] md:max-w-none md:-translate-y-125">
          <Image
            src={CLOUDINARY_ASSETS.vinylRight}
            alt="Retro Vinyl Right"
            width={320}
            height={320}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-6xl">
          <div className="relative mt-16 mb-10 flex flex-col items-center select-none md:mt-10 md:mb-20">
            <div className="relative inline-block">
              <h1 className="font-canopee pb-3 text-center text-6xl leading-none font-normal tracking-wide text-[#2A5266] [text-shadow:1px_2px_0px_#461A0E] md:pb-5 md:text-9xl md:leading-[0.8] md:tracking-tight md:[text-shadow:4px_4px_0px_#461A0E]">
                FAQS
              </h1>
              {/* Custom single underline matching the design */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-0">
                <div className="h-[5px] w-full border-[2px] border-[#1A0E05] bg-[#2A5266] shadow-[1px_1px_0px_#461A0E] md:h-[7px] md:shadow-[2.5px_2.5px_0px_#461A0E]"></div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[320px] max-w-[90vw] space-y-4 md:w-full md:max-w-4xl md:space-y-5">
            {faqData.map((item: FAQItem) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="max-h-2xl overflow-hidden rounded-sm border border-[#1A0E05] bg-[#F4E4B8] shadow-[1.25px_1.25px_0px_#1A0E05] transition-all duration-200 hover:-translate-x-[0.5px] hover:-translate-y-[0.5px] hover:shadow-[1.75px_1.75px_0px_#1A0E05] active:translate-x-0 active:translate-y-0 active:shadow-[1.25px_1.25px_0px_#1A0E05] md:border-4 md:shadow-[5px_5px_0px_#1A0E05] md:hover:-translate-x-[2px] md:hover:-translate-y-[2px] md:hover:shadow-[7px_7px_0px_#1A0E05] md:active:shadow-[5px_5px_0px_#1A0E05]"
                >
                  <div
                    className={`transition-all duration-200 ${isOpen ? 'p-4 md:p-8' : 'px-4 py-3 md:px-8 md:py-[22px]'}`}
                  >
                    {/* Clickable Header */}
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="flex w-full items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-canopee text-xl leading-none font-bold tracking-wider text-[#2A5266] md:text-[32px]">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <svg
                          className="h-5 w-5 shrink-0 text-[#1A0E05] md:h-6 md:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 shrink-0 text-[#1A0E05] md:h-6 md:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </button>
                    {/* Collapsible Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'mt-4 max-h-[300px] md:mt-[18px]' : 'max-h-0'
                      }`}
                    >
                      <p className="font-sans text-[13px] leading-relaxed font-semibold text-[#1A0E05] md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 -bottom-6 left-0 z-100 translate-y-4 overflow-hidden md:translate-y-[350px]">
        <Image
          src={CLOUDINARY_ASSETS.bottomrail}
          alt="Bottom Rails"
          width={1920}
          height={12}
          className="absolute left-1/2 h-auto w-[180%] max-w-none -translate-x-1/2 object-contain md:left-0 md:w-full md:translate-x-0"
        />
        <Image
          src={CLOUDINARY_ASSETS.bottomrail}
          alt="Bottom Rails"
          width={1920}
          height={12}
          className="relative left-1/2 h-auto w-[180%] max-w-none -translate-x-1/2 rotate-6 object-contain md:left-0 md:w-full md:translate-x-0"
        />
      </div>
    </div>
  );
};

export default FAQAccordion;
