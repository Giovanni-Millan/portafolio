export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Acerca de mí</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
           {/*  Soy <span className="font-semibold text-slate-900 dark:text-white">Giovanni Millán</span>, desarrollador Front‑End con experiencia en
            <span className="font-semibold"> React</span> y <span className="font-semibold">TailwindCSS</span>. Me apasiona crear productos web claros, rápidos y accesibles. */}
            Hola! Soy <span className="font-semibold text-slate-900 dark:text-white"> Giovanni Millan</span>, un diseñador web / desarrollador apasionado por crear experiencias digitales atractivas y funcionales. 
            mi camino en este campo en su mayoria ha sido autodidacta, eso me permite explorar y aprender constantemente
            Disfruto crear interfaces de usuario atractivas y con un balance en contenido que hagan que los usuarios tengan una buena experiencia.

          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Creo firmemente que un buen diseño no solo debe ser estéticamente agradable, sino también <span className="font-semibold text-slate-900 dark:text-white">funcional y accesible.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
