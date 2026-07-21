// Buduje poprawny URL do plików z folderu `public`, uwzględniając
// podścieżkę wdrożenia (np. GitHub Pages: /weseleamg/).
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\/+/, "")}`;
}
