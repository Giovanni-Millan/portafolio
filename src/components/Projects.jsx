export default function Projects() {
  const projects = [
    {
      name: "Engloo",
      description:
        "Pagina web estatica educativa enfocada en la enseñanza del inglés en línea.",
      link: "https://engloo.netlify.app/",
    },
    {
      name: "Sistema escolar para el 'Instituto Tecnologico Bridge (Frontend)'",
      description:
        "Plataforma integral de gestión escolar desarrollada con Tauri que optimiza procesos académicos, administrativos y de comunicación.",
      link: "https://github.com/Giovanni-Millan/bridge-admin-desktop-app",
    },

    {
      name: "Sistema escolar para el 'Instituto Tecnologico Bridge (Backend)'",
      description:
        "Aplicación Back-end robusta y escalable utilizando Node.js, Express y MySQL para gestionar datos escolares de manera eficiente.",
      link: "https://github.com/Giovanni-Millan/backend-bridge",
    },

    {
      name: "Rediseño de Página Web para el 'Instituto Tecnologico Bridge'",
      description:
        "Diseño renovado con navegación intuitiva, secciones claras e identidad visual profesional.",
      link: "https://instituto-tecnologico-bridge.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-4xl font-extrabold mb-12 text-slate-900 dark:text-white text-center">
          Proyectos
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <article
              key={proj.name}
              className="
                group rounded-2xl 
                bg-white/70 dark:bg-slate-900/70 
                border border-slate-200/60 dark:border-slate-800/60 
                backdrop-blur-sm 
                p-6 
                shadow-sm 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition">
                {proj.name}
              </h4>

              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                {proj.description}
              </p>

              <a
                href={proj.link}
                target="_blank"
                className="
                  mt-6 inline-flex items-center gap-2 
                  text-sm font-medium
                  px-4 py-2 rounded-lg 
                  bg-indigo-600 hover:bg-indigo-700 
                  text-white 
                  transition
                "
              >
                Ver proyecto
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 7l-10 10m10 0V7h-10"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
