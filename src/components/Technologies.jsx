import { Palette, Clapperboard } from "lucide-react";

export default function Technologies() {
  const webTech = [
    { name: "HTML", icon: "devicon-html5-plain", color: "#E96228" },
    { name: "CSS", icon: "devicon-css3-plain", color: "#2862E9" },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain", color: "#38BDF8" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7411F6" },
    { name: "DaisyUI", icon: "devicon-tailwindcss-plain", color: "#A78BFA" },
    { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
    { name: "React Native", icon: "devicon-react-original", color: "#6192fb" },
    { name: "Tauri", icon: "devicon-rust-plain", color: "#DEA584" },
    { name: "Git", icon: "devicon-git-plain", color: "#E84D31" },
    { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF" },
  ];

  const designTech = [
    { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
    { name: "Illustrator", icon: "devicon-illustrator-plain", color: "#FF9A00" },
    { name: "Photoshop", icon: "devicon-photoshop-plain", color: "#31A8FF" },
    { name: "Premier Pro", icon: "devicon-premierepro-plain", color: "#9934F3" },
    { name: "Audition", icon: "devicon-aftereffects-plain", color: "#00E4F5" },

    // 🎨 Canva
    { name: "Canva", icon: null, color: "#00C4CC", customIcon: "canva" },

    // 🎬 Wondershare Filmora
    { name: "Filmora", icon: null, color: "#14A39A", customIcon: "filmora" },
  ];

  const dbTech = [
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#A91D22" },
    { name: "MySQL", icon: "devicon-mysql-plain", color: "#00758F" },
    { name: "Node.js", icon: "devicon-nodejs-plain", color: "#68A063" },
    { name: "Express.js", icon: "devicon-express-original", color: "#FFFFFF" },
  ];

  const renderCarousel = (title, items) => (
    <>
      <h3 className="text-3xl md:text-2xl font-light mb-4 text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="carousel carousel-center w-full space-x-4 p-4 rounded-box bg-slate-200/50 dark:bg-slate-900/40">
        {items.map((tech, i) => (
          <div
            key={i}
            className="carousel-item flex flex-col items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-6 py-6 w-40 shadow hover:shadow-lg transition-all duration-300"
          >
            {/* Icono personalizado o devicon */}
            {tech.customIcon ? (
              tech.customIcon === "canva" ? (
                <Palette
                  size={48}
                  className="mb-3"
                  style={{ color: tech.color }}
                />
              ) : (
                <Clapperboard
                  size={48}
                  className="mb-3"
                  style={{ color: tech.color }}
                />
              )
            ) : (
              <i
                className={`${tech.icon} text-5xl mb-3`}
                style={{ color: tech.color }}
              ></i>
            )}

            {/* Nombre */}
            <span className="font-medium text-slate-800 dark:text-slate-100 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section id="technologies" className="bg-slate-100 dark:bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white text-center">
          Tecnologías
        </h2>

        {renderCarousel("Desarrollo Web", webTech)}

        <div className="mt-12"></div>
        {renderCarousel("Diseño", designTech)}

        <div className="mt-12"></div>
        {renderCarousel("Bases de datos / Backend", dbTech)}
      </div>
    </section>
  );
}
