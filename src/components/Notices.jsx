import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const NOTICES = [
  {
    title:
      "Prefeitura de São Cristóvão lança novo site apresentando melhorias para o acesso",
    img: "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso-2024-06-11-66688941e1134.jpeg",
    descricao:
      "A Prefeitura de São Cristóvão agora está mais conectada e com melhor acesso à informação para os seus moradores e profissionais. Nesta terça-feira (11), a Secretaria Municipal de Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da Informação (DITIN), lançou o novo site da prefeitura, em uma apresentação que mostrou todas as novidades e melhorias para os servidores, realizada no auditório do Museu de Arte Sacra de São Cristóvão. Para conhecê-lo, basta acessar o endereço www.saocristovao.se.gov.br.",
    data: "11/06/2024",
    url: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso",
  },
  {
    title:
      "São Cristóvão recebe certificado de Selo Diamante do Programa Nacional de Transparência Pública em cerimônia no TCE",
    img: "https://publicacao.saocristovao.se.gov.br/storage/post/sao-cristovao-recebe-certificado-de-selo-diamante-do-programa-nacional-de-transparencia-publica-em-cerimonia-no-tce-2024-12-17-6761f3d66a3aa.jpeg",
    descricao:
      "Na manhã desta terça-feira (17), São Cristóvão foi agraciada com o certificado de Selo Diamante pelo Programa Nacional de Transparência Pública (PNTP), em uma cerimônia realizada no Tribunal de Contas do Estado de Sergipe (TCE). Além da condecoração mais alta do programa, a Cidade Mãe se destacou como o segundo município mais transparente do estado, com uma pontuação de 99,16%.",
    data: "17/12/2024",
    url: "https://www.saocristovao.se.gov.br/noticia/sao-cristovao-recebe-certificado-de-selo-diamante-do-programa-nacional-de-transparencia-publica-em-cerimonia-no-tce",
  },
  {
    title:
      "Prefeitura de São Cristóvão inaugura novo prédio da Diretoria de Tecnologia da Informação",
    img: "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-inaugura-novo-predio-da-diretoria-de-tecnologia-da-informacao-2024-10-30-672272a40c050.jpg",
    descricao:
      "Na última terça-feira (29), a Prefeitura de São Cristóvão entregou o novo prédio da Diretoria de Tecnologia da Informação do Município (Ditin), homenageando o saudoso morador José Ertes Passos, que deu nome ao edifício. A obra, realizada pela Secretaria Municipal de Governo (Segov), contou com um investimento de aproximadamente R$2 milhões, que incluiu a instalação de equipamentos modernos e um data center de última geração. A estrutura visa fortalecer a segurança, agilidade e eficiência dos serviços digitais oferecidos pela Prefeitura, garantindo a proteção dos dados municipais.",
    data: "30/10/2024",
    url: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-inaugura-novo-predio-da-diretoria-de-tecnologia-da-informacao",
  },
  {
    title:
      "São Cristóvão lançará novo Portal Emprega+ integrado à plataforma Qualifica+ nesta quarta-feira (03)",
    img: "https://publicacao.saocristovao.se.gov.br/storage/post/sao-cristovao-lancara-novo-portal-emprega-integrado-a-plataforma-qualifica-nesta-quarta-feira-03-2025-09-02-68b706a018169.png",
    descricao:
      "A Prefeitura de São Cristóvão, por meio da Secretaria Municipal de Desenvolvimento Econômico e do Trabalho (Semdet), lançará na próxima quarta-feira (03) o Portal Emprega+ São Cristóvão, integrado à plataforma Qualifica+. O evento acontecerá no Paço Municipal, na Praça São Francisco, às 9h. Disponível no site oficial da Prefeitura, o portal recebeu novo visual, novas funcionalidades e novos conteúdos, tornando-se uma ferramenta ainda mais eficiente para trabalhadores e empresas do município.",
    data: "02/09/2025",
    url: "https://www.saocristovao.se.gov.br/noticia/sao-cristovao-lancara-novo-portal-emprega-integrado-a-plataforma-qualifica-nesta-quarta-feira-03",
  },
  {
    title:
      "Prefeitura de São Cristóvão alcança nota 9,5 em ranking de transparência, índice considerado elevado pelo TCE- SE",
    img: "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-alcanca-nota-95-em-ranking-de-transparencia-indice-considerado-elevado-pelo-tce-se-2023-03-14-6410a9118bad4.jpeg",
    descricao:
      "A Prefeitura de São Cristóvão recebeu nota 9,5 no ranking de transparência do Tribunal de Contas do Estado de Sergipe (TCE-SE). O resultado, considerado elevado pelo órgão, coloca o município entre as 10 cidades sergipanas com melhor índice.",
    data: "14/03/2023",
    url: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-alcanca-nota-95-em-ranking-de-transparencia-indice-considerado-elevado-pelo-tce-se",
  },
];

export const Notices = () => {
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
      className="bg-white relative overflow-hidden max-2xl:px-10 max-xl:px-6"
    >
      <div className="max-w-[1200px] mx-auto py-20 h-full flex flex-col relative z-10 max-md:py-10">
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
              src="/images/icons/icon-notices-b.svg"
              alt="Icone de Casa"
            />
            Notícias
          </span>
        </motion.div>

        <motion.div
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-black text-6xl mt-6 relative max-md:text-5xl">
            Aqui você encontra{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent">
              Nossas Notícias
            </span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {NOTICES.map((notice) => {
            return (
              <SwiperSlide className="text-black bg-white shadow-md shadow-blue-100 border-gradient-blue-purple rounded-md p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-13 h-13 rounded-full"
                      style={{
                        background: `url(${notice.img}) center / cover`,
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-black text-xs tracking-[0.3rem]">
                        DITIN
                      </span>
                      <span className="text-[11px] text-black/30 flex items-center gap-1.5">
                        {notice.data}{" "}
                        <i className="fa-solid fa-globe text-[10px]"></i> SE
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[1px]">
                    <span className="w-4.5 h-4.5 bg-[#f0f0f0] flex items-center justify-center">
                      <i className="fa-solid fa-star text-[10px]"></i>
                    </span>
                    <span className="w-4.5 h-4.5 bg-[#f0f0f0] flex items-center justify-center">
                      <i className="fa-solid fa-star text-[10px]"></i>
                    </span>
                    <span className="w-4.5 h-4.5 bg-[#f0f0f0] flex items-center justify-center">
                      <i className="fa-solid fa-star text-[10px]"></i>
                    </span>
                    <span className="w-4.5 h-4.5 bg-[#f0f0f0] flex items-center justify-center">
                      <i className="fa-solid fa-star text-[10px]"></i>
                    </span>
                    <span className="w-4.5 h-4.5 bg-[#f0f0f0] flex items-center justify-center">
                      <i className="fa-solid fa-star text-[10px]"></i>
                    </span>
                  </div>
                </div>

                <div className="mt-6 mb-8">
                  <h4
                    className="font-bold text-sm leading-[1.2] mb-2.5 tracking-tight"
                    title={notice.title}
                  >
                    {notice.title}
                  </h4>
                  <p
                    className="text-black/40 text-xs font-medium tracking-tight"
                    title={notice.descricao}
                  >
                    {notice.descricao}
                  </p>
                </div>

                <div>
                  <img
                    className="max-w-[50px] w-full"
                    src="/images/logo-ditin-b.svg"
                    alt="Logo São Cristóvão"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-[2000px] h-[2000px] bg-white absolute rounded-full top-20 shadow-branco-azul left-2/4 -translate-x-2/4 opacity-5 blur-[4px]"></div>
    </motion.div>
  );
};
