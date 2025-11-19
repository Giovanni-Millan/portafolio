import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-slate-900 transition"
          >
            Giovanni Millán
          </a>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition">Acerca de mí</a>
            <a href="#technologies" className="hover:text-slate-900 dark:hover:text-white transition">Tecnologías</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition">Proyectos</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contacto</a>

            <a
              href="https://drive.google.com/file/d/1yF9eZpp9NQCfnQ5KiVJsEKYIdXQUBZ71/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
            >
              Descargar CV
            </a>
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

        {/* Menú móvil animado */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200 pb-4 pt-2">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Acerca de mí
            </a>
            <a
              href="#technologies"
              onClick={() => setOpen(false)}
              className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Tecnologías
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Contacto
            </a>

            <a
              href="https://drive.google.com/file/d/1yF9eZpp9NQCfnQ5KiVJsEKYIdXQUBZ71/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-lg px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
            >
              Descargar CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
