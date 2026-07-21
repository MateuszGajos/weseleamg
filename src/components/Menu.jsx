import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-blush/40">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle eyebrow="Poczęstunek" title="Menu weselne" />
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
              <path d="M14 3v7a2 2 0 0 0 2 2v9M14 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2M8 3v6a2 2 0 1 1-4 0V3M6 9v12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-burgundy/80 text-lg mb-6">
              Pełne menu przygotowane specjalnie na nasze wesele znajdziecie w załączonym pliku PDF.
            </p>
            <a
              href={wedding.menuPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-rose text-white px-6 py-3 rounded-full hover:bg-burgundy transition-colors font-medium"
            >
              Zobacz menu (PDF)
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
