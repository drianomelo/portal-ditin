import { AnimatedNumber } from "./AnimatedNumber";
import { motion } from "framer-motion";

const PROJETOS_DITIN = [
  { src: "/images/projects/portal.png", title: "Portal de São Cristóvão" },
  { src: "/images/projects/casafeliz.png", title: "Casa Feliz" },
  { src: "/images/projects/empregamais.png", title: "Emprega+" },
  { src: "/images/projects/portal.png", title: "Portal de São Cristóvão" },
  { src: "/images/projects/casafeliz.png", title: "Casa Feliz" },
  { src: "/images/projects/empregamais.png", title: "Emprega+" },
];

export const Slider = () => {
  const stats = [
    { label: "Total de projetos desenvolvidos", value: 100 },
    { label: "Total de projetos públicos desenvolvidos", value: 60 },
    { label: "Total de projetos internos desenvolvidos", value: 40 },
    { label: "Total de projetos internos desenvolvidos", value: 28 },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="w-full"
    >
      <div className="w-full relative mb-20 overflow-hidden">
        <div className="absolute z-20 h-full left-0 w-40 bg-gradient-to-r from-[#010614] from-10% to-transparent"></div>
        <div className="absolute z-20 h-full right-0 w-40 bg-gradient-to-l from-[#010614] from-10% to-transparent"></div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-hidden flex gap-4 slider">
            <div className="flex items-center gap-4 animate-slider">
              {PROJETOS_DITIN.map((projeto) => {
                return (
                  <a
                    href="/"
                    className="group relative overflow-hidden rounded-3xl min-w-[560px] p-[4px] bg-gradient-to-br hover:from-blue-400 hover:to-purple-300"
                  >
                    <span className="absolute w-full left-0 uppercase text-sm font-black bg-gradient-to-t from-blue-500 to-transparent -bottom-full z-12 text-center pb-4 pt-20 transition-all duration-300 group-hover:bottom-0">
                      {projeto.title}
                    </span>
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        className="max-w-[105%] transition-all duration-300 grayscale-75 group-hover:grayscale-0"
                        src={projeto.src}
                        alt="Portal da Prefeitura de São Cristóvão"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-4 animate-slider">
              {PROJETOS_DITIN.map((projeto) => {
                return (
                  <a
                    href="/"
                    className="group relative overflow-hidden rounded-3xl min-w-[560px] p-[4px] bg-gradient-to-br hover:from-blue-400 hover:to-purple-300"
                  >
                    <span className="absolute w-full left-0 uppercase text-sm font-black bg-gradient-to-t from-blue-500 to-transparent -bottom-full z-12 text-center pb-4 pt-20 transition-all duration-300 group-hover:bottom-0">
                      {projeto.title}
                    </span>
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        className="max-w-[105%] transition-all duration-300 grayscale-75 group-hover:grayscale-0"
                        src={projeto.src}
                        alt="Portal da Prefeitura de São Cristóvão"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between gap-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col"
          >
            <span className="text-5xl border-b-2 pb-2 mb-3 border-white/10">
              <AnimatedNumber value={stat.value} duration={2000} />
            </span>
            <span className="text-xs opacity-40 w-fit">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
