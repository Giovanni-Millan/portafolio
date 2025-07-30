import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-slate-900">
            Giovanni Millán
          </a>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">Acerca de mí</a>
            <a href="#technologies" className="hover:text-slate-900 dark:hover:text-white">Tecnologías</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Proyectos</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contacto</a>
            <a
              href="https://drive.google.com/file/d/1Y_M74Xn-F-_93Lm5puQL_2ANjQAllhDt/view?usp=sharing"
              download target="_blank"
              className="inline-flex items-center rounded px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
            >
              Descargar CV
            </a>
            <button>
              
            </button>
          </nav>

          {/* Botón hamburguesa (móvil) */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
            className="md:hidden inline-flex items-center justify-center rounded p-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
          >
            <span className="sr-only">Abrir menú</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-slate-800 dark:bg-slate-200"></span>
              <span className="block h-0.5 w-6 bg-slate-800 dark:bg-slate-200"></span>
              <span className="block h-0.5 w-6 bg-slate-800 dark:bg-slate-200"></span>
            </div>
          </button>
        </div>

        {/* Menú móvil */}
        {open && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              <a href="#about" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Acerca de mí</a>
              <a href="#technologies" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Tecnologías</a>
              <a href="#projects" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Proyectos</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Contacto</a>
              <a
                href="https://drive.google.com/file/d/1Y_M74Xn-F-_93Lm5puQL_2ANjQAllhDt/view?usp=sharing"
                download
                className="mt-1 inline-flex items-center justify-center rounded px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
              >
                Descargar CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
