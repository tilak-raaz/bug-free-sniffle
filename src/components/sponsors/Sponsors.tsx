import { sponsorTiers } from '@/config/sponsor';

function SponsorCard({
  sponsor,
}: {
  sponsor: (typeof sponsorTiers)[number]['sponsors'][number];
}) {
  return (
    <article className="group relative mx-auto flex min-h-44 w-full max-w-[320px] items-center justify-center overflow-hidden rounded-3xl border-2 border-[#1A0E05] bg-[#FFF7E6] p-4 shadow-[4px_4px_0px_#1A0E05] transition-transform duration-300 hover:-translate-y-1 sm:min-h-48">
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${sponsor.accent}`}
      />
      <div className="absolute -top-8 -left-8 h-20 w-20 rounded-full bg-[#E3442E]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-[#1A0E05]/5 blur-2xl" />

      <div className="relative z-10 flex w-full flex-col items-center gap-4 text-center">
        <div className="flex aspect-[1.15/1] w-18 items-center justify-center rounded-2xl border-2 border-[#1A0E05] bg-white shadow-[2px_2px_0px_#1A0E05] sm:w-20">
          <span className={sponsor.markClassName}>{sponsor.mark}</span>
        </div>

        <div className="space-y-1">
          <h3 className="font-canopee text-[clamp(1.1rem,1.95vw,1.75rem)] leading-none font-normal text-[#1A0E05]">
            {sponsor.label}
          </h3>
          <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#A14731] uppercase">
            {sponsor.name}
          </p>
        </div>
      </div>
    </article>
  );
}

function SponsorTier({
  tier,
  tone,
  sponsors,
}: {
  tier: string;
  tone: string;
  sponsors: (typeof sponsorTiers)[number]['sponsors'];
}) {
  return (
    <section className="w-full">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className={`h-2 flex-1 rounded-full bg-linear-to-r ${tone}`} />
        <h2 className="hack-shadow bg-background font-canopee rounded-full border-2 border-[#1A0E05] px-5 py-2 text-[clamp(0.95rem,1.55vw,1.25rem)] font-normal tracking-[0.26em] whitespace-nowrap text-[#1A0E05] uppercase">
          {tier}
        </h2>
        <div className={`h-2 flex-1 rounded-full bg-linear-to-r ${tone}`} />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-primary relative w-full scroll-mt-24 overflow-hidden px-4 py-16 text-[#1A0E05] sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(244,228,184,0.38),transparent_26%),radial-gradient(circle_at_80%_12%,rgba(26,14,5,0.16),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(244,228,184,0.2),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(0,0,0,0.04)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-360 flex-col items-center">
        <div className="flex w-full max-w-230 flex-col items-center text-center">
          <h1 className="hack-shadow bg-background font-canopee mb-5 rounded-full border-[3px] border-[#1A0E05] px-6 py-2 text-[clamp(0.95rem,1.7vw,1.4rem)] font-normal tracking-[0.26em] text-[#1A0E05] uppercase">
            Sponsors
          </h1>
        </div>

        <div className="mt-12 flex w-full flex-col gap-10 sm:gap-12">
          {sponsorTiers.map((tier) => (
            <SponsorTier
              key={tier.tier}
              tier={tier.tier}
              tone={tier.tone}
              sponsors={tier.sponsors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
