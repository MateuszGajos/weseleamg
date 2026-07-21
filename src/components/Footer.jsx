import { QRCodeSVG } from "qrcode.react";
import { wedding } from "../weddingData";

export default function Footer() {
  return (
    <footer className="bg-burgundy text-cream py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-2xl">
            {wedding.couple.bride} &amp; {wedding.couple.groom}
          </p>
          <p className="text-cream/70 mt-1">{wedding.date.display}</p>
          <p className="text-cream/50 text-sm mt-4">
            Zeskanuj kod QR, aby wrócić do tej strony w każdej chwili.
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl">
          <QRCodeSVG value={wedding.siteUrl} size={112} fgColor="#5e1a26" />
        </div>
      </div>
      <p className="text-center text-cream/40 text-xs mt-10">
        Z miłością dla naszych Gości &middot; {wedding.couple.bride} &amp; {wedding.couple.groom}
      </p>
    </footer>
  );
}
