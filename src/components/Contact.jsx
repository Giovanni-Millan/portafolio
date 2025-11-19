export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-white tracking-tight">
            Contacto
          </h3>
          <p className="text-slate-300 mt-3 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o te gustaría colaborar?  
            Estoy disponible — ¡hablemos!
          </p>
        </div>

        <div
          className="
            max-w-xl mx-auto 
            bg-white/10 backdrop-blur-md 
            border border-white/10 
            rounded-2xl 
            p-8 
            shadow-xl 
          "
        >
          <div className="flex flex-col gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.link/k5ec42"
              target="_blank"
              className="
                inline-flex items-center justify-center gap-2 
                w-full
                rounded-lg px-5 py-3 
                bg-green-500 hover:bg-green-600 
                text-white font-medium
                transition
              "
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.81 11.81 0 0 0 12.06 0a11.78 11.78 0 0 0-10.3 17.62L0 24l6.57-1.7A11.82 11.82 0 0 0 12 23.8h.06A11.78 11.78 0 0 0 20.52 3.48ZM12 21.3a9.56 9.56 0 0 1-4.88-1.34l-.35-.2-3.9 1 1-3.8-.23-.39a9.58 9.58 0 1 1 8.36 4.73Zm5.27-7.2c-.29-.15-1.7-.84-1.96-.94s-.46-.15-.65.15-.74.94-.91 1.13-.34.22-.63.07a7.8 7.8 0 0 1-2.3-1.44 8.61 8.61 0 0 1-1.59-1.97c-.17-.29 0-.45.13-.6s.29-.34.44-.51a2 2 0 0 0 .3-.51.55.55 0 0 0 0-.52c-.08-.15-.65-1.59-.9-2.18s-.48-.5-.65-.51h-.56a1 1 0 0 0-.74.35 3.15 3.15 0 0 0-.96 2.34 5.52 5.52 0 0 0 1.15 2.93 12.81 12.81 0 0 0 4.93 4.43 16.8 16.8 0 0 0 1.7.63 4.08 4.08 0 0 0 1.88.12 3.05 3.05 0 0 0 2-1.44 2.49 2.49 0 0 0 .17-1.45c-.06-.1-.23-.16-.52-.3Z" />
              </svg>
              Enviar WhatsApp
            </a>

            {/* Enviar correo */}
            <a
              href="mailto:giovannimillan.110502.1@gmail.com"
              className="
                inline-flex items-center justify-center gap-2 
                w-full
                rounded-lg px-5 py-3 
                bg-indigo-500 hover:bg-indigo-600
                text-white font-medium
                transition
              "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                />
              </svg>
              Enviar Correo
            </a>

            {/* CV */}
            <a
              href="https://drive.google.com/file/d/1yF9eZpp9NQCfnQ5KiVJsEKYIdXQUBZ71/view?usp=sharing"
              target="_blank"
              className="
                inline-flex items-center justify-center gap-2 
                w-full
                rounded-lg px-5 py-3 
                bg-slate-700 hover:bg-slate-600 
                border border-white/10
                text-white font-medium
                transition
              "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0l3-3m-3 3l-3-3m10 5v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"
                />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
