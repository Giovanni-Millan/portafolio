import foto from "../assets/foto_p.jpeg"
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] md:min-h-[80vh] flex items-center relative bg-white dark:bg-slate-950"
      style={{
        backgroundImage: "url('https://digitalbluee.com/wp-content/uploads/2021/12/react-framework-code-on-screen-example-1280x595-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} 
    >
      {/* Superposición oscura para contraste */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 text-white">
        <div className="flex justify-center">
          <img src={foto} alt="" className="h-52 rounded-full mb-6"/>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center">
          Hola, soy <span className="hover:text-slate-600 hover:cursor-default">Giovanni.</span>
        </h2>
        <p className="text-base md:text-2xl max-w-2xl drop-shadow-md text-center">
          Desarrollador Front‑End enfocado en interfaces limpias, rendimiento y accesibilidad.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded px-5 py-3  bg-opacity-80 hover:bg-opacity-100   transition bg-white hover:bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700 "
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded px-5 py-3 border border-white  bg-opacity-20 text-white hover:bg-opacity-40 transition"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
