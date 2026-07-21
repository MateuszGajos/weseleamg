import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { wedding } from "../weddingData";

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 bg-cream">
      <div className="max-w-2xl mx-auto">
        <SectionTitle eyebrow="Przebieg dnia" title="Plan dnia" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-rose/30" />

          <ol className="space-y-10">
            {wedding.schedule.map((item, i) => (
              <Reveal key={item.time} delay={i * 0.12} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-rose border-4 border-cream shadow" />
                <div>
                  <span className="font-display text-2xl text-rose">{item.time}</span>
                  <h3 className="font-display text-xl text-burgundy mt-1">{item.title}</h3>
                  <p className="text-burgundy/70 mt-1">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
