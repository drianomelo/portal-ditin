import { useState } from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const [hovered, setHovered] = useState(0);

  const services = [
    {
      id: "DITIN",
      icon: "fa-solid fa-user-tie",
      title: "Diretor de Tecnologia da Informação",
      desc: "O Diretor lidera e coordena todas as atividades relacionadas à tecnologia dentro da Prefeitura.",
      imagem: {
        src: "/images/time-ditin.jpeg",
        alt: "Equipe da DITIN",
        title: "Diretor",
        sigla: "DITIN",
      },
    },
    {
      id: "COSUT",
      icon: "fa-solid fa-headset",
      title: "Suporte Técnico",
      desc: "Fornecemos assistência e resolvemos problemas relacionados a hardware, software e redes.",
      imagem: {
        src: "/images/table-suporte.png",
        alt: "Tabela de chamados da equipe de suporte técnico",
        title: "Suporte",
        sigla: "COSTIC",
      },
    },
    {
      id: "COSIS",
      icon: "fa-solid fa-laptop-code",
      title: "Desenvolvimento Web",
      desc: "Criamos, mantemos e aprimoramos os sites e aplicações web da Prefeitura.",
      imagem: {
        src: "/images/site-sc.png",
        alt: "Site da Prefeitura de São Cristóvão",
        title: "Desenvolvimento",
        sigla: "COSIS",
      },
    },
  ];

  const itemHeight = 100 / services.length;
  const barTop = hovered * itemHeight;
  const barHeight = itemHeight;

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
      className="h-screen bg-white max-2xl:px-10 max-xl:h-auto max-lg:px-6 "
    >
      <div className="max-w-[1200px] mx-auto py-20 max-md:py-10">
        <motion.div
          variants={{
            hidden: { y: -100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center w-fit gap-2 bg-blue-50 py-1.5 font-medium px-2 rounded-xl border-2 border-blue-100 text-blue-400">
            <img
              className="w-5"
              src="/images/icons/icon-services-b.svg"
              alt="Icone de Casa"
            />
            Serviços
          </span>
        </motion.div>

        <motion.div
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-black text-6xl w-[700px] mt-6 relative max-lg:w-full max-md:text-5xl">
            Tecnologia que fortalece a{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent">
              Gestão
            </span>{" "}
            e a
            <span className="bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent">
              {" "}
              Cidadania
            </span>
          </h2>
        </motion.div>

        <div className="flex items-stretch gap-16 max-2xl:gap-6">
          <ul className="mt-8 pl-12 flex flex-col gap-16 pt-10 relative max-md:pl-4">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="absolute h-full w-0.5 bg-slate-50 left-0 top-0 rounded-full"
            >
              <div
                className="absolute left-0 w-full bg-gradient-to-b from-transparent via-blue-300 to-purple-200 rounded-full transition-all duration-500"
                style={{
                  top: `${barTop}%`,
                  height: `${barHeight}%`,
                }}
              />
            </motion.div>

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { x: 30, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              >
                <li
                  className={`text-black flex gap-4 transition-opacity duration-500
                ${
                  hovered === null || hovered === index
                    ? "opacity-100"
                    : "opacity-20"
                }`}
                  onMouseEnter={() => setHovered(index)}
                >
                  <div className="w-10 h-10 rounded-lg border-gradient relative z-[1] flex items-center justify-center max-md:min-w-10">
                    <i className={`${service.icon} text-xl absolute z-10`} />
                  </div>
                  <div className="relative flex flex-col max-w-[500px]">
                    <span className="tracking-[.4em] font-black text-sm opacity-20 absolute -top-7 left-0">
                      [{service.id}]
                    </span>
                    <h3 className="text-3xl mb-2 max-md:text-2xl max-md:-mt-1">{service.title}</h3>
                    <p className="w-3/4 opacity-50 font-medium max-md:w-full max-md:text-sm">
                      {service.desc}
                    </p>
                  </div>
                </li>
              </motion.div>
            ))}
          </ul>

          <div className="flex-1 overflow-hidden bg-blue-50 p-4 mt-5 border-2 border-black/5 rounded-3xl relative max-xl:hidden">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute top-4 left-4 w-full transition-all duration-500
                  ${
                    hovered === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <div
                  className={`border-2  border-black/5 bg-gradient-to-br from-purple-100 to-blue-100 w-fit p-1.5 pr-2.5 rounded-xl flex items-center gap-1 transition-transform duration-700 ${
                    hovered === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-gradient-5 relative z-[1] flex items-center justify-center mr-1">
                    <i
                      className={`${service.icon} absolute z-10 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent`}
                    />
                  </div>
                  <span className="text-black/30 font-semibold">
                    {service.imagem.title} -{" "}
                  </span>
                  <span className="font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {service.imagem.sigla}
                  </span>
                </div>

                <div
                  className={`relative mt-7 transition-transform duration-1000 ${
                    hovered === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                  }`}
                >
                  <div className="h-90 w-60 bg-gradient-to-r from-blue-50 from-10% to-transparent absolute -left-2 top-2 z-10"></div>
                  <div className="h-60 w-130 bg-gradient-to-b from-blue-50 from-10% to-transparent absolute left-0 -top-2 z-10"></div>
                  <img
                    className="max-w-[110%] absolute -right-15 top-4 rounded-2xl"
                    src={service.imagem.src}
                    alt={service.imagem.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
