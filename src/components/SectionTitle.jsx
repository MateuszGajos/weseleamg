export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="uppercase tracking-[0.3em] text-rose text-xs sm:text-sm mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl text-burgundy">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-px bg-rose/50" />
    </div>
  );
}
