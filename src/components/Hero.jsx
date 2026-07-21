import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { wedding } from "../weddingData";
import SectionBackground from "./SectionBackground";

function getRemaining() {
  const diff = new Date(wedding.date.iso).getTime() - Date.now();
  const clamp = Math.max(diff, 0);
  return {
    days: Math.floor(clamp / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamp / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamp / (1000 * 60)) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

function Countdown() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "dni", value: time.days },
    { label: "godz.", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sek.", value: time.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8 justify-center">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="font-display text-3xl sm:text-4xl text-burgundy font-semibold drop-shadow-[0_1px_4px_rgba(255,250,247,0.9)]">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-burgundy font-semibold drop-shadow-[0_1px_4px_rgba(255,250,247,0.9)]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <SectionBackground
        src="/background_photos/bc02107a-6d9e-4670-91c1-c2a3eeb91add.jpeg"
        overlayClassName="bg-gradient-to-b from-blush/40 via-cream/30 to-cream/60"
        position="82% 40%"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-burgundy/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-[0.3em] text-burgundy text-base sm:text-lg mb-6 font-bold drop-shadow-[0_1px_4px_rgba(255,250,247,0.9)]"
      >
        Bierzemy ślub
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-display text-5xl sm:text-7xl text-burgundy leading-tight"
      >
        {wedding.couple.bride}{" "}
        <span className="font-display italic text-rose">&amp;</span>{" "}
        {wedding.couple.groom}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-8 font-body text-xl sm:text-2xl text-burgundy font-medium drop-shadow-[0_1px_4px_rgba(255,250,247,0.85)]"
      >
        {wedding.date.display} &middot; godz. {wedding.date.time}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="mt-12"
      >
        <Countdown />
      </motion.div>

      <motion.a
        href="#venue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 inline-flex flex-col items-center text-burgundy hover:text-rose transition-colors bg-cream/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm"
      >
        <span className="text-xs uppercase tracking-widest mb-1 font-semibold">Przewiń</span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
