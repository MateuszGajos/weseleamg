import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";

export default function UploadPhotos() {
  return (
    <section id="photos" className="py-24 px-6 bg-cream">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle eyebrow="Wspomnienia" title="Wasze zdjęcia z wesela" />
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
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="11" r="2" />
              <path d="M21 16l-5-4-4 3-3-2-6 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-burgundy/80 text-lg mb-6">
              Uwiecznij te chwile! Wrzuć swoje zdjęcia z naszego wesela do wspólnego albumu.
            </p>
            <a
              href={wedding.photoAlbumUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-rose text-white px-6 py-3 rounded-full hover:bg-burgundy transition-colors font-medium"
            >
              Dodaj zdjęcia do albumu
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
