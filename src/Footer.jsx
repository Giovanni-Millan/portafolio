export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-center text-sm">
        © {new Date().getFullYear()} Giovanni Millán. Todos los derechos reservados.
      </div>
    </footer>
  );
}
