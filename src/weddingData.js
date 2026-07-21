// Centralne miejsce na dane ślubne — edytuj tutaj, żeby zaktualizować całą stronę.
export const wedding = {
  couple: {
    bride: "Agnieszka",
    groom: "Mateusz",
    surname: "Gajos",
  },
  date: {
    iso: "2026-08-08T16:00:00+02:00",
    display: "8 sierpnia 2026",
    time: "16:00",
  },
  ceremony: {
    name: "Kościół pod wezwaniem Świętego Brata Alberta",
    address: "ul. Olsztyńska 2, Gdańsk",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ko%C5%9Bci%C3%B3%C5%82+%C5%9Awi%C4%99tego+Brata+Alberta+Olszty%C5%84ska+2+Gda%C5%84sk",
  },
  reception: {
    name: "ArtBistro by Progres",
    address: "ul. Juliusza Słowackiego 17, Gdańsk",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ArtBistro+by+Progres+S%C5%82owackiego+17+Gda%C5%84sk",
  },
  schedule: [
    { time: "16:00", title: "Ceremonia", description: "Ślub w kościele pod wezwaniem Świętego Brata Alberta." },
    { time: "17:30", title: "Życzenia", description: "Powitanie i życzenia dla Pary Młodej na sali ArtBistro by Progres." },
    { time: "18:00", title: "Obiad", description: "Wspólny posiłek i początek świętowania." },
  ],
  menuPdfUrl: "/menu.pdf",
  photoAlbumUrl: "https://photos.app.goo.gl/y6xARbcTzjBdoAQ1A",
  parkingNote: "Szczegółowe informacje o parkingu pojawią się wkrótce.",
  // Docelowy adres strony (używany m.in. w kodzie QR w stopce).
  siteUrl: "https://mateuszgajos.github.io/weseleamg/",
};
