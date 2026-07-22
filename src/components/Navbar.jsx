import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Start" },
  { href: "#venue", label: "Miejsce" },
  { href: "#parking", label: "Parking" },
  { href: "#schedule", label: "Plan dnia" },
  { href: "#seating", label: "Stoły" },
  { href: "#menu", label: "Menu" },
  { href: "#photos", label: "Zdjęcia" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-cream/90 backdrop-blur shadow-sm ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6">
        <a href="#hero" className="font-display text-xl tracking-wide text-burgundy">
          A &amp; M
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-[1.2rem]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-burgundy/80 hover:text-rose transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-burgundy"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 font-body text-lg bg-cream/95 backdrop-blur shadow-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-burgundy" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
