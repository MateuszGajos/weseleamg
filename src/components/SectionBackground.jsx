import { asset } from "../utils";

export default function SectionBackground({ src, overlayClassName, position = "center" }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src={asset(src)}
        alt=""
        aria-hidden
        loading="lazy"
        className="w-full h-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}

