export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-900 py-20"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight text-center">
          Acerca de mí
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Hola! Soy{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Giovanni Millan
            </span>
            , un diseñador web / desarrollador apasionado por crear
            experiencias digitales atractivas y funcionales. Mi camino en este
            campo ha sido en su mayoría autodidacta, lo que me ha permitido
            explorar, aprender y mejorar constantemente. Disfruto diseñar
            interfaces equilibradas y visualmente agradables que ofrezcan una
            excelente experiencia de usuario.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Creo firmemente que un buen diseño no solo debe ser estéticamente
            agradable, sino también{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              funcional y accesible.
            </span>{" "}
            Me gusta combinar claridad, simplicidad y eficiencia para lograr
            interfaces que realmente aporten valor a las personas.
          </p>
        </div>

        <div className="mt-12 h-px bg-slate-300 dark:bg-slate-700 w-3/4 mx-auto opacity-70"></div>
      </div>
    </section>
  );
}
