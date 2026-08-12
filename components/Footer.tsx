export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-border-subtle px-6 py-11 min-[900px]:px-14">
      <span className="font-display text-lg">Giovanna Cabral</span>
      <div className="flex gap-6.5 text-sm text-soft">
        <a href="#" className="text-soft">
          Instagram
        </a>
        <a href="#" className="text-soft">
          Spotify
        </a>
        <a href="#" className="text-soft">
          Contato
        </a>
      </div>
      <span className="text-[13px] text-eyebrow">© 2026 — feito com carinho</span>
    </footer>
  );
}
