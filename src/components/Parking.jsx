import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";

export default function Parking() {
  return (
    <section id="parking" className="py-24 px-6 bg-blush/40">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle eyebrow="Dojazd" title="Parking" />
        <Reveal>
          <div className="bg-white/70 border border-rose/15 rounded-2xl p-8">
            <svg
              className="mx-auto mb-4 text-rose"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M9 8h4a2.5 2.5 0 0 1 0 5H9V8Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 13v4" strokeLinecap="round" />
            </svg>
            <p className="text-burgundy/80 text-lg">{wedding.parkingNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
