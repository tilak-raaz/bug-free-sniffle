'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { plusIcon, faqItems, XIcons } from '@/config/faq';
import { motion, AnimatePresence } from 'framer-motion';

const PlusIcon = ({ className }: { className?: string }) => (
  <Image
    src={plusIcon}
    alt="Plus Icon"
    width={24}
    height={24}
    className={className}
  />
);

const XIcon = ({ className }: { className?: string }) => (
  <Image
    src={XIcons}
    alt="Close Icon"
    width={32}
    height={32}
    className={className}
  />
);

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const currentScrollY = window.scrollY;
    const elementTop =
      (containerRef.current?.getBoundingClientRect().top ?? 0) + currentScrollY;

    onToggle();

    requestAnimationFrame(() => {
      const newElementTop =
        (containerRef.current?.getBoundingClientRect().top ?? 0) +
        window.scrollY;
      const scrollDiff = newElementTop - elementTop;

      if (Math.abs(scrollDiff) > 5) {
        window.scrollTo({
          top: currentScrollY + scrollDiff,
          behavior: 'instant',
        });
      }
    });
  };

  return (
    <motion.div
      ref={containerRef}
      className="faq-item relative"
      initial={{ y: 40, x: -40 }}
      animate={{ zIndex: isOpen ? 20 : 1 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`bg-background border-2 border-black transition-all duration-300 ease-in-out md:py-1 lg:py-2 ${
          isOpen
            ? 'shadow-[2px_2px_0px_rgba(0,0,0,0.9)]'
            : 'shadow-[2px_2px_0px_rgba(0,0,0,0.8)]'
        } `}
      >
        <button
          className={`flex w-full items-center justify-between px-[3vw] py-2 text-left transition-all duration-300 ease-in-out`}
          onClick={handleToggle}
        >
          <span className="font-canopee text-secondary pr-2 text-sm leading-tight font-semibold sm:pr-3 sm:text-xl lg:text-3xl">
            {question}
          </span>
          <motion.div
            animate={{
              rotate: isOpen ? 90 : 0,
              scale: isOpen ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <XIcon className="text-foreground h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            ) : (
              <PlusIcon className="text-foreground h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            )}
          </motion.div>
        </button>{' '}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
              style={{ willChange: 'height' }}
            >
              <div className="px-[3vw] pb-2">
                <motion.p
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="font-archivo ssm:text-[2.5vw] text-[2.75vw] leading-[120%] font-extrabold tracking-[0.15px] text-[#232323] sm:text-[2vw] md:text-[1.75vw] lg:text-[1.75vw] xl:text-[1.5vw]"
                >
                  {answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newState = { ...prev };
      if (newState[index]) {
        delete newState[index];
      } else {
        Object.keys(newState).forEach((key) => delete newState[Number(key)]);
        newState[index] = true;
      }
      return newState;
    });
  };

  return (
    <div className="relative my-2 w-full" id="faqs">
      <section className="bg-background] relative w-full lg:py-20">
        <h1 className="text-center font-[Canopee] text-[16vw] leading-none font-normal text-[#2A5266] underline decoration-solid [text-shadow:1.5px_1.5px_0_#5A2D1D] [text-underline-position:from-font] sm:text-[14vw] md:text-[12vw] lg:[text-shadow:4px_4px_0_#1a0e05]">
          FAQS
        </h1>
        <div className="ssm:top-[11rem] absolute top-[10rem] -left-5 sm:top-[14rem] lg:top-[20rem]">
          <Image
            src="/leftcd.svg"
            alt="Left CD"
            width={500}
            height={500}
            className="ssm:w-[32vw] w-[40vw] sm:w-[30vw] md:w-[30vw] xl:w-[28vw]"
          />
        </div>

        {/* Right CD */}
        <div className="ssm:top-[11rem] absolute top-[10rem] -right-5 sm:top-[14rem] lg:top-[20rem]">
          <Image
            src="/rightdisc.svg"
            alt="Right CD"
            width={500}
            height={500}
            className="ssm:w-[32vw] w-[40vw] sm:w-[30vw] md:w-[30vw] xl:w-[28vw]"
          />
        </div>

        <div className="container mx-auto my-[3rem] flex w-[76vw] flex-col gap-y-2.5 px-4 pb-4 sm:my-[4rem] sm:px-6 sm:pb-6 md:gap-4 lg:my-[6rem] lg:px-8 lg:pb-8">
          {faqItems.map((item, index) =>
            item ? (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index]}
                onToggle={() => toggleItem(index)}
              />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
}

export default FaqSection;
