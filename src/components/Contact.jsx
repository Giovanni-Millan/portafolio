export default function Contact() {
  return (
    <section id="contact" className="bg-slate-800 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contacto</h3>
        <p className="text-slate-300 max-w-2xl">
          ¿Te interesa colaborar o tienes un proyecto en mente? ¡Escríbeme!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.link/k5ec42" target="_blank"
            className="inline-flex items-center justify-center rounded px-5 py-3 bg-white text-slate-900 hover:bg-slate-200 transition"
          >
            Enviar WhatsApp
          </a>
          <a
            href="https://drive.google.com/file/d/1Y_M74Xn-F-_93Lm5puQL_2ANjQAllhDt/view?usp=sharing" target="_blank"
            download
            className="inline-flex items-center justify-center rounded px-5 py-3 border border-slate-500 text-slate-100 hover:bg-slate-700 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
