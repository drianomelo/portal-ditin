import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Team = () => {
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
      id="equipe"
    >
      <div className="max-w-[1200px] mx-auto pt-10 pb-28 h-full flex flex-col max-2xl:px-10 max-lg:px-6">
        <div className="flex flex-col justify-center items-center gap-8 mb-14 max-md:mb-10">
          <motion.div
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center w-fit gap-2 bg-[#43464e75] py-1.5 font-medium px-2 rounded-xl border-2 border-[#ffffff2a]">
              <img
                className="w-5"
                src="/images/icons/icon-team-w.svg"
                alt="Icone de Casa"
              />
              Equipe
            </span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { scale: 0.95, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <p className="text-6xl text-white text-center w-3/4 max-lg:w-full max-md:text-5xl">
              Transformando Ideias em Soluções{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent">
                Criativas!
              </span>
            </p>
          </motion.div>
        </div>

        <div className="relative flex flex-col gap-8">
          <div className="justify-between items-center gap-8 flex-col hidden max-lg:flex">
            <motion.div
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden flex items-center justify-center w-20 h-20 rounded-2xl"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 inset-0 w-28 h-28 bg-gradient-to-tr from-blue-800 via-blue-100 to-blue-800 animate-[spin_4s_linear_infinite]"></div>

              <div className="absolute top-2/4 left-2/4 -translate-2/4 z-10 w-[77px] h-[77px] rounded-2xl bg-[#010614]"></div>

              <img
                className="relative w-[50px] z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] animate-pulse"
                src="/images/logo-ditin-w.svg"
                alt="Logo da DITIN"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl max-lg:max-w-full"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-blue-900 via-[#010614] via-75% to-blue-800 animate-[spin_4s_linear_infinite] max-lg:h-[400%]"></div>

              <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                <span className="text-blue-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                  COSUT
                </span>
                <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                  Coordenadoria de Suporte a Tecnologias da Informação e
                  Comunicação
                </h3>
                <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                  Assistência ágil para resolução de questões tecnológicas,
                  mantendo a operação suave e a satisfação do usuário em alta.
                </p>

                <div className="absolute top-0 -right-25">
                  <img
                    className="max-w-[350px] opacity-70"
                    src="/images/team/suporte.png"
                    alt="Imagem de uma equipe de desenvolvimento"
                  />

                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                </div>

                <div className="relative">
                  <span className="text-white opacity-20 text-xs block mb-2">
                    Time de Técnicos:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="relative w-[28px] z-10"
                      src="/images/team/junior-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/tassito-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/ian-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[32px] z-10"
                      src="/images/team/mario-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[29px] z-10"
                      src="/images/team/raphael-h.png"
                      alt="Logo da DITIN"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl max-lg:max-w-full"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-purple-950 via-[#010614] via-75% to-purple-800 animate-[spin_4s_linear_infinite] max-lg:h-[400%]"></div>

              <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                <span className="text-purple-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                  COSIS
                </span>
                <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                  Coordenadoria de Desenvolvimento de Sistemas de Banco de Dados
                </h3>
                <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                  Com uma equipe altamente qualificada, projetamos,
                  implementamos e mantemos uma base sólida de hardware redes e
                  sistemas essenciais.
                </p>

                <div className="absolute top-0 -right-25">
                  <img
                    className="max-w-[350px] opacity-70"
                    src="/images/team/dev.png"
                    alt="Imagem de uma equipe de desenvolvimento"
                  />

                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                </div>

                <div className="relative">
                  <span className="text-white opacity-20 text-xs block mb-2">
                    Time de Desenvolvedores:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="relative w-[26px] z-10"
                      src="/images/team/herbert-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[27px] z-10"
                      src="/images/team/rony-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[31px] z-10"
                      src="/images/team/adriano-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[31px] z-10"
                      src="/images/team/bruna-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[29px] z-10"
                      src="/images/team/tercio-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[28px] z-10"
                      src="/images/team/rodrigo-h.png"
                      alt="Logo da DITIN"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl max-lg:max-w-full"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-purple-950 via-[#010614] via-75% to-purple-800 animate-[spin_4s_linear_infinite] max-lg:h-[400%]"></div>

              <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                <span className="text-purple-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                  DITIN
                </span>
                <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                  Diretoria de Tecnologia da Informação
                </h3>
                <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                  Lidera a estratégia tecnológica, impulsionando inovação e
                  eficiência. Orienta soluções avançadas, fortalecendo nossa
                  posição de destaque.
                </p>

                <div className="absolute top-0 -right-25">
                  <img
                    className="max-w-[350px] opacity-70"
                    src="/images/team/diretoria.png"
                    alt="Imagem de uma equipe de desenvolvimento"
                  />

                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                </div>

                <div className="relative">
                  <span className="text-white opacity-20 text-xs block mb-2">
                    Diretor e Assessor:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/nilson-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[33px] z-10"
                      src="/images/team/gladson-h.png"
                      alt="Logo da DITIN"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-between items-center max-lg:hidden">
            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-blue-900 via-[#010614] via-75% to-blue-800 animate-[spin_4s_linear_infinite]"></div>

              <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                <span className="text-blue-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                  COSUT
                </span>
                <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                  Coordenadoria de Suporte a Tecnologias da Informação e
                  Comunicação
                </h3>
                <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                  Assistência ágil para resolução de questões tecnológicas,
                  mantendo a operação suave e a satisfação do usuário em alta.
                </p>

                <div className="absolute top-0 -right-25">
                  <img
                    className="max-w-[350px] opacity-70"
                    src="/images/team/suporte.png"
                    alt="Imagem de uma equipe de desenvolvimento"
                  />

                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                </div>

                <div className="relative">
                  <span className="text-white opacity-20 text-xs block mb-2">
                    Time de Técnicos:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="relative w-[28px] z-10"
                      src="/images/team/junior-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/tassito-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/ian-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[32px] z-10"
                      src="/images/team/mario-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[31px] z-10"
                      src="/images/team/emanoel-h.png"
                      alt="Logo da DITIN"
                    />
                    <img
                      className="relative w-[29px] z-10"
                      src="/images/team/raphael-h.png"
                      alt="Logo da DITIN"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden flex items-center justify-center w-20 h-20 rounded-2xl"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 inset-0 w-28 h-28 bg-gradient-to-tr from-blue-800 via-blue-100 to-blue-800 animate-[spin_4s_linear_infinite]"></div>

              <div className="absolute top-2/4 left-2/4 -translate-2/4 z-10 w-[77px] h-[77px] rounded-2xl bg-[#010614]"></div>

              <img
                className="relative w-[50px] z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] animate-pulse"
                src="/images/logo-ditin-w.svg"
                alt="Logo da DITIN"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl"
            >
              <Link
                to={`/equipes/cosis`}
                state={{
                  team: {
                    slug: "cosis",
                    name: "Coordenadoria de Desenvolvimento de Sistemas de Banco de Dados",
                    img: "/images/team/dev.png",
                  },
                }}
              >
                <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-purple-950 via-[#010614] via-75% to-purple-800 animate-[spin_4s_linear_infinite]"></div>

                <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                  <span className="text-purple-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                    COSIS
                  </span>
                  <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                    Coordenadoria de Desenvolvimento de Sistemas de Banco de
                    Dados
                  </h3>
                  <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                    Com uma equipe altamente qualificada, projetamos,
                    implementamos e mantemos uma base sólida de hardware redes e
                    sistemas essenciais.
                  </p>

                  <div className="absolute top-0 -right-25">
                    <img
                      className="max-w-[350px] opacity-70"
                      src="/images/team/dev.png"
                      alt="Imagem de uma equipe de desenvolvimento"
                    />

                    <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                    <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                    <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                  </div>

                  <div className="relative">
                    <span className="text-white opacity-20 text-xs block mb-2">
                      Time de Desenvolvedores:
                    </span>
                    <div className="flex items-center gap-2">
                      <img
                        className="relative w-[26px] z-10"
                        src="/images/team/herbert-h.png"
                        alt="Logo da DITIN"
                      />
                      <img
                        className="relative w-[27px] z-10"
                        src="/images/team/rony-h.png"
                        alt="Logo da DITIN"
                      />
                      <img
                        className="relative w-[31px] z-10"
                        src="/images/team/adriano-h.png"
                        alt="Logo da DITIN"
                      />
                      <img
                        className="relative w-[31px] z-10"
                        src="/images/team/bruna-h.png"
                        alt="Logo da DITIN"
                      />
                      <img
                        className="relative w-[29px] z-10"
                        src="/images/team/tercio-h.png"
                        alt="Logo da DITIN"
                      />
                      <img
                        className="relative w-[28px] z-10"
                        src="/images/team/rodrigo-h.png"
                        alt="Logo da DITIN"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[320px] p-[2px] overflow-hidden rounded-xl max-lg:max-w-full"
            >
              <div className="absolute top-2/4 left-2/4 -translate-2/4 w-[150%] h-[200%] bg-gradient-to-tr from-blue-900 via-[#010614] via-75% to-blue-800 animate-[spin_4s_linear_infinite] max-lg:h-[400%]"></div>

              <div className="relative z-20 overflow-hidden p-4 rounded-xl bg-[#010614]">
                <span className="text-blue-400 font-black text-[10px] tracking-[.3rem] mb-3 block relative z-10">
                  COGED
                </span>
                <h3 className="font-semibold text-white leading-[1.2] mb-2 relative z-10">
                  Coordenadoria de gestão de rede, infraestrutura e datacenter
                </h3>
                <p className="text-xs opacity-40 text-white w-[90%] relative z-10 mb-4">
                  Com uma equipe altamente qualificada, projetamos,
                  implementamos e mantemos uma base sólida de hardware redes e
                  sistemas essenciais.
                </p>

                <div className="absolute top-0 -right-25">
                  <img
                    className="max-w-[350px] opacity-70"
                    src="/images/team/rede.png"
                    alt="Imagem de uma equipe de desenvolvimento"
                  />

                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-2/4 h-full bg-gradient-to-r from-[#010614] absolute top-0"></div>
                  <div className="w-full h-full bg-gradient-to-t from-[#010614] absolute top-0"></div>
                </div>

                <div className="relative">
                  <span className="text-white opacity-20 text-xs block mb-2">
                    Time de Técnicos:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="relative w-[30px] z-10"
                      src="/images/team/eduardo-h.png"
                      alt="Logo da DITIN"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="flex gap-3 h-[90%] absolute top-2/4 left-2/4 -translate-2/4"
          >
            <div className=" w-[1px] h-full bg-white/10 overflow-hidden relative">
              <div className="h-1/4 w-1 absolute bg-gradient-to-b via-blue-500/60 animate-sobe-desce-cabo-inverse"></div>
            </div>
            <div className=" w-[1px] h-full bg-white/10 overflow-hidden relative">
              <div className="h-1/4 w-1 absolute bg-gradient-to-b via-purple-500/60 animate-sobe-desce-cabo"></div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="flex gap-3 h-[90%] absolute top-2/4 left-2/4 -translate-2/4 rotate-90 max-lg:hidden"
          >
            <div className=" w-[1px] h-full bg-white/10 overflow-hidden relative">
              <div className="h-1/4 w-1 absolute bg-gradient-to-b via-blue-500/60 animate-sobe-desce-cabo-inverse"></div>
            </div>
            <div className=" w-[1px] h-full bg-white/10 overflow-hidden relative">
              <div className="h-1/4 w-1 absolute bg-gradient-to-b via-purple-500/60 animate-sobe-desce-cabo"></div>
            </div>
          </motion.div>

          <div className="absolute w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[100px] top-2/4 left-2/4 -translate-2/4"></div>
        </div>
      </div>
    </motion.div>
  );
};
