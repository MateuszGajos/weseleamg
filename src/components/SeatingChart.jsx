import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";
import { asset } from "../utils";

export default function SeatingChart() {
  return (
    <section id="seating" className="py-24 px-6 bg-cream">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle eyebrow="Rozmieszczenie gości" title="Znajdź swoje miejsce" />
        <Reveal>
          <div className="bg-white/70 border border-rose/15 rounded-2xl p-10">
            <svg
              className="mx-auto mb-4 text-rose"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18" strokeLinecap="round" />
            </svg>
            <p className="text-burgundy/80 text-lg mb-6">
              Sprawdźcie, przy którym stole usiądziecie podczas przyjęcia.
            </p>
            <a
              href={asset(wedding.seatingChartPdfUrl)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-rose text-white px-6 py-3 rounded-full hover:bg-burgundy transition-colors font-medium"
            >
              Zobacz plan stołów (PDF)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
