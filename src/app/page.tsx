import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
import WhatAndStatistics from '@/components/whatAndStatistics/WhatAndStatistics';
import Prizes from '@/components/prizes/Prizes';
import Teams from '@/components/teams/Teams';
import Sponsors from '@/components/sponsors/Sponsors';
import FaqSection from '@/components/faq/Faq';

export default function Home() {
  return (
    <div className="m-0 p-0">
      <Hero />
      <WhatAndStatistics />
      <Timeline />
      <Prizes />
      <Teams />
      <Sponsors />
      <FaqSection />
    </div>
  );
}
