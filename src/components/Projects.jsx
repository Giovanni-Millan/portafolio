export default function Projects() {
  const projects = [
    { name: "Engloo", description: "Plataforma educativa enfocada en la enseñanza del inglés en línea", link: "https://engloo.netlify.app/" },
    { name: "Sistema escolar para el 'Instituto Tecnologico Bridge' ", description: "plataforma integral de gestión escolar diseñada para optimizar los procesos académicos, administrativos y de comunicación en la institucion.", link: "https://github.com/Giovanni-Millan/bridge-admin-front" },
    { name: "Rediseño de Pagina web para el 'Instituto Tecnologico Bridge' ", description: "La nueva propuesta integra una navegación intuitiva, con secciones claras que facilitan el acceso a información relevante para estudiantes, padres de familia, docentes y visitantes.", link: "https://github.com/Giovanni-Millan/It-Bridge " },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Proyectos</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.name}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{proj.name}</h4>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{proj.description}</p>
              <a
                href={proj.link} target="_blank"
                className="mt-4 inline-block text-sm font-medium text-slate-700 dark:text-slate-200 underline decoration-slate-300 dark:decoration-slate-600 hover:text-slate-900 dark:hover:text-white"
              >
                Ver proyecto
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
