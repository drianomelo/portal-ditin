import { useState } from "react";
import { CustomAreaChart } from "./CustomAreaChart";
import { Slider } from "./Slider";
import { motion } from "framer-motion";

export const Results = () => {
  const [positionBtn, setPositionBtn] = useState("suporte");

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
      className="h-screen max-2xl:px-10 max-xl:h-auto max-lg:px-6"
    >
      <div className="max-w-[1200px] mx-auto py-20 max-md:py-10">
        <div className="flex flex-col justify-center items-center gap-8 mb-12">
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
                src="/public/images/icons/icon-results-w.svg"
                alt="Icone de Casa"
              />
              Resultados
            </span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <p className="text-xl leading-[1.3] font-medium text-white text-center w-3/4 max-lg:w-full max-lg:text-lg max-md:text-sm">
              Estamos fortalecendo o relacionamento com a comunidade, ampliando
              o alcance das nossas ações e garantindo maior eficiência na
              entrega de serviços públicos.{" "}
              <span className="opacity-30 font-light">
                Os resultados alcançados refletem o compromisso com a
                transparência, a inovação e o bem-estar coletivo.
              </span>
            </p>
          </motion.div>
        </div>

        <div className="flex items-end justify-between mb-12 max-md:justify-center">
          <motion.div
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-lg font-bold text-white flex items-end gap-2 max-md:hidden">
              DITIN <span className="opacity-30 font-normal">em Números</span>{" "}
            </span>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="bg-[#43464e75] border-2 border-[#ffffff2a] p-1.5 flex items-center gap-1.5 rounded-3xl relative">
              <div
                className="border-2 border-blue-400 absolute h-[32px] rounded-full transition-all duration-400"
                style={{
                  width: positionBtn === "suporte" ? "134px" : "140px",
                  left:
                    positionBtn === "suporte" ? "6px" : "calc(100% - 146px)",
                }}
              ></div>
              <button
                onClick={() => setPositionBtn("suporte")}
                className="text-sm border-2 border-transparent cursor-pointer py-1 px-3 rounded-3xl transition-all duration-400"
                style={{ opacity: positionBtn === "suporte" ? "1" : ".3" }}
              >
                Suporte Técnico
              </button>
              <button
                onClick={() => setPositionBtn("desenvolvimento")}
                className="text-sm border-2 border-transparent cursor-pointer py-1 px-3 rounded-3xl transition-all duration-400"
                style={{
                  opacity: positionBtn === "desenvolvimento" ? "1" : ".3",
                }}
              >
                Desenvolvimento
              </button>
            </div>
          </motion.div>
        </div>

        {positionBtn === "suporte" ? <CustomAreaChart /> : <Slider />}
      </div>
    </motion.div>
  );
};
