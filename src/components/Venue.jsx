import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";

function VenueCard({ badge, name, address, mapsUrl, delay }) {
  return (
    <Reveal delay={delay} className="flex-1">
      <div className="h-full bg-white/70 rounded-2xl shadow-sm border border-rose/15 p-8 text-center hover:shadow-md transition-shadow">
        <span className="inline-block uppercase tracking-widest text-xs text-rose mb-3">
          {badge}
        </span>
        <h3 className="font-display text-2xl text-burgundy mb-2">{name}</h3>
        <p className="text-burgundy/70 mb-6">{address}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-rose hover:text-burgundy transition-colors font-medium"
        >
          Otwórz w Mapach
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}

export default function Venue() {
  return (
    <section id="venue" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Gdzie i kiedy" title="Miejsce ceremonii i przyjęcia" />
        <div className="flex flex-col md:flex-row gap-6">
          <VenueCard
            badge="Ceremonia"
            name={wedding.ceremony.name}
            address={wedding.ceremony.address}
            mapsUrl={wedding.ceremony.mapsUrl}
            delay={0}
          />
          <VenueCard
            badge="Przyjęcie"
            name={wedding.reception.name}
            address={wedding.reception.address}
            mapsUrl={wedding.reception.mapsUrl}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
