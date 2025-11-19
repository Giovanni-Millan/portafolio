import {
  MessageSquare,
  Search,
  Users,
  Layout,
  Palette,
  PenTool,
  Brain,
  Database,
  Cloud,
  Code,
  Video,
  Bot,
  BrainCircuit,
  MonitorCog,
  Workflow,
} from "lucide-react";

export default function TechnicalSkills() {
  const skills = [
    { name: "Entrevistas", icon: Users },
    { name: "Encuestas", icon: MessageSquare },
    { name: "Pruebas de usabilidad", icon: Search },
    { name: "Mapas de empatía", icon: Brain },
    { name: "Diseño responsivo", icon: Layout },
    { name: "Creación de componentes UI", icon: PenTool },
    { name: "Prototipado (baja, media, alta)", icon: Palette },
    { name: "Psicología de color", icon: Palette },
    { name: "Modelado ER", icon: Database },
    { name: "Consumo de APIs", icon: Cloud },
    { name: "Flexbox y Grid", icon: Code },
    { name: "Edición de video y audio", icon: Video },
    { name: "Uso de IA", icon: Bot },
    { name: "Diseño de prompts", icon: BrainCircuit },
    { name: "Desarrollo Full-stack", icon: MonitorCog },
    { name: "Automatizaciones con IA", icon: Workflow },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-14">
          Habilidades Técnicas
        </h3>

        {/* GRID MEJORADO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center auto-rows-fr">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="
                  rounded-2xl p-6 w-full
                  bg-white dark:bg-slate-900
                  border border-slate-200/50 dark:border-slate-700/50
                  shadow-md hover:shadow-xl
                  hover:-translate-y-1 transition-all duration-300
                  flex flex-col items-center text-center
                "
              >
                <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-indigo-500 dark:text-indigo-300" />
                </div>

                <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
