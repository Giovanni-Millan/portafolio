import foto from "../assets/foto_p.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[75vh] flex items-center relative bg-white dark:bg-slate-950"
      style={{
        backgroundImage:
          "url('https://digitalbluee.com/wp-content/uploads/2021/12/react-framework-code-on-screen-example-1280x595-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-20 text-white text-center">
        {/* Foto */}
        <div className="flex justify-center mb-8">
          <img
            src={foto}
            alt="Foto de Giovanni"
            className="h-48 w-48 object-cover rounded-full shadow-lg ring-4 ring-white/50 dark:ring-white/20"
          />
        </div>

        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
          Hola, soy{" "}
          <span className="text-slate-300 dark:text-slate-200 hover:text-slate-600 transition cursor-default">
            Giovanni.
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-slate-200 drop-shadow">
          Desarrollador Front-End enfocado en interfaces limpias, rendimiento y accesibilidad.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium bg-white text-slate-900 shadow-md shadow-black/20 hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700 transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border border-white/70 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
