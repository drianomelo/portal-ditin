import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Globe, Layers, Lock, Newspaper, Play } from "lucide-react";
import { FaLaravel } from "react-icons/fa";
import { Footer } from "../components/Footer";

export const Projeto = () => {
  const location = useLocation();
  const projeto = location.state?.projeto;

  if (!projeto) {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <>
      <div
        className="flex flex-col w-full"
        style={{ minHeight: "calc(100vh + 1px)" }}
      >
        <Header />

        <div className="w-full h-screen flex-1 flex items-center">
          <div className="absolute -top-20 -right-60">
            <div className="bg-gradient-to-r from-[#010614] from-40% w-100 h-full absolute z-10"></div>
            <div className="bg-gradient-to-t from-[#010614] from-25% w-full h-100 absolute bottom-0 z-10"></div>
            <img
              className="w-full opacity-20"
              src={projeto.src}
              alt={projeto.nome}
            />
          </div>

          <div className="max-w-[1200px] mx-auto z-20 relative">
            <div className="relative">
              <div className="w-150 h-150 rounded-full bg-[#09285A] opacity-40 absolute blur-3xl -left-35 -top-20"></div>
              <span className="font-black tracking-[.3rem] text-blue-500 z-10 relative">
                COSIS
              </span>
              <h1 className="text-5xl font-bold tracking-tight mt-8 text-white z-10 relative">
                {projeto.title}
              </h1>
              <p className="text-xl text-gray-300 mt-6 z-10 relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                officia?
              </p>

              <div className="mt-8 flex items-center gap-9 z-10 relative">
                <div className="flex items-center gap-3">
                  <FaLaravel size={24} className="text-gray-400" />
                  <span className="text-[15px] font-medium text-gray-400">
                    Laravel
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers size={24} className="text-gray-400" />
                  <span className="text-[15px] font-medium text-gray-400">
                    +50 Páginas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock size={24} className="text-gray-400" />
                  <span className="text-[15px] font-medium text-gray-400">
                    Público
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[url(/images/team/dev.png)] bg-cover bg-center"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-400">
                      Desenvolvido por
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Cosis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10 mt-16">
              <div>
                <div className="w-[600px] h-[340px] rounded-xl relative flex justify-center items-center overflow-hidden group">
                  <img
                    className="absolute w-[120%] max-w-max"
                    src={projeto.src}
                    alt={projeto.title}
                  />
                  <button className="z-20 w-[64px] h-[64px] flex justify-center items-center bg-black/60 rounded-full cursor-pointer transition-all group-hover:bg-black/75">
                    <Play size={30} />
                  </button>
                </div>
                <span className="text-[14px] mt-4 font-medium text-gray-300 block text-center">
                  Conheça um pouco do sistema desenvolvido pelo COSIS.
                </span>
              </div>

              <div className="relative">
                <div className="w-100 h-100 rounded-full bg-[#09285A] opacity-40 absolute blur-3xl -right-25 top-0"></div>
                <p className="text-white text-lg mb-5 z-10 relative">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  minus cum nobis asperiores! Nostrum ipsam quasi at alias.
                  Aperiam, ullam eaque odio explicabo neque nihil esse molestiae
                  quod quaerat voluptas?
                </p>

                <p className="text-white text-lg mb-7 z-10 relative">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur distinctio sapiente ullam perferendis maiores velit
                  nulla necessitatibus iste? Alias repellat quae reprehenderit
                  quos vero harum laborum odio, natus aliquam pariatur
                  voluptatem doloribus, maxime possimus. Error excepturi,
                  asperiores fugiat soluta doloremque labore itaque mollitia
                  eius autem quod ab exercitationem tempora veniam!
                </p>

                <div className="flex items-center gap-7 z-10 relative">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 gap-2 bg-blue-500 transition-all hover:bg-blue-400"
                  >
                    <Globe size={18} />
                    Visitar Projeto
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 ring-1 ring-inset ring-white/20 gap-2 bg-white/10 transition-all hover:bg-white/20"
                  >
                    Compartilhar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/40 pt-16 pb-20 border-t border-white/5 w-full shadow backdrop-blur">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-14 bg-gray-800"></div>
            <h2 className="text-center text-xl font-semibold tracking-tight text-white">
              Desenvolvedores envolvidos no {projeto.title}
            </h2>
            <div className="h-[1px] w-14 bg-gray-800"></div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-x-12">
            <div className="flex justify-center gap-6">
              <img src="/images/team/herbert-h.png" className="h-18" alt="" />
              <div className="space-y-6">
                <div className="space-y-3 text-[16px] text-gray-100">
                  <p>Coordenador de Desenvolvimento</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates repellat fuga officia deserunt rem nulla quo cum
                    temporibus consequuntur numquam!
                  </p>
                </div>
                <p className="font-semibold text-[15px] text-gray-400">
                  Herbert Freire
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <img src="/images/team/adriano-h.png" className="h-18" alt="" />
              <div className="space-y-6">
                <div className="space-y-3 text-[16px] text-gray-100">
                  <p>Desenvolvedor Front-End</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates repellat fuga officia deserunt rem nulla quo cum
                    temporibus consequuntur numquam!
                  </p>
                </div>
                <p className="font-semibold text-[15px] text-gray-400">
                  Adriano Melo
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <img src="/images/team/rodrigo-h.png" className="h-18" alt="" />
              <div className="space-y-6">
                <div className="space-y-3 text-[16px] text-gray-100">
                  <p>Desenvolvedor Front-End</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates repellat fuga officia deserunt rem nulla quo cum
                    temporibus consequuntur numquam!
                  </p>
                </div>
                <p className="font-semibold text-[15px] text-gray-400">
                  Rodrigo Santos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Etapas
        </h2>

        <ul className="mt-20">
          <li className="flex gap-24">
            <div className="w-1/2">
              <div className="sticky top-8">
                <h3 className="text-2xl font-semibold text-white">
                  Etapa 1: Concepção Estratégica e Justificativa
                </h3>
                <p className="mt-3 text-gray-400 text-lg">
                  Esta fase inicial define a visão, a missão e a justificativa
                  fundamental para o desenvolvimento do Portal da Prefeitura.
                </p>
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="bg-[url(/images/site-sc.png)] bg-cover bg-center col-span-2 h-[300px] rounded-sm ring-1 ring-inset ring-white/20"></div>
                  <div className="bg-[url(/images/site-sc.png)] bg-cover bg-center col-span-1 h-[150px] rounded-sm ring-1 ring-inset ring-white/20"></div>
                  <div className="bg-[url(/images/site-sc.png)] bg-cover bg-center col-span-1 h-[150px] rounded-sm ring-1 ring-inset ring-white/20"></div>
                  <div className="bg-[url(/images/site-sc.png)] bg-cover bg-center col-span-1 h-[150px] rounded-sm ring-1 ring-inset ring-white/20"></div>
                  <div className="bg-[url(/images/site-sc.png)] bg-cover bg-center col-span-1 h-[150px] rounded-sm ring-1 ring-inset ring-white/20"></div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600">
                Detalhamento
              </h4>
              <ul className="mt-2 -mx-4">
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
                <li className="px-4 py-6 flex text-[18px] border-b border-gray-800">
                  <div className="w-8 shrink-0 tabular-nums tracking-tight text-gray-500 font-normal">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">
                      Transparência e Controle Social
                    </span>
                    <span className="mt-2 leading-6 text-gray-500 text-[15px]">
                      A motivação principal para um portal governamental, como o
                      de São Cristóvão, é cumprir as exigências legais e
                      promover a abertura da gestão.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full bg-gray-900/40 py-24 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Notícias
          </h2>

          <div className="mt-10 flex gap-8">
            <div className="flex flex-col gap-4 w-[400px]">
              <div className="w-full h-[220px] relative rounded-lg bg-[url('https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso-2024-06-11-66688941e1134.jpeg')] bg-cover bg-center">
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/70 p-1">
                  <Globe size={14} />
                </div>
              </div>
              <h3
                className="text-lg font-semibold text-white line-clamp-2"
                title="Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso"
              >
                Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso
              </h3>
              <p
                className="text-gray-400 line-clamp-5 text-[15px]"
                title="A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br."
              >
                A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 gap-2 bg-blue-500 transition-all hover:bg-blue-400"
                >
                  <Newspaper size={18} />
                  Ler Notícia
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 ring-1 ring-inset ring-white/20 gap-2 bg-white/10 transition-all hover:bg-white/20"
                >
                  Compartilhar
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[400px]">
              <div className="w-full h-[220px] relative rounded-lg bg-[url('https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso-2024-06-11-66688941e1134.jpeg')] bg-cover bg-center">
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/70 p-1">
                  <Globe size={14} />
                </div>
              </div>
              <h3
                className="text-lg font-semibold text-white line-clamp-2"
                title="Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso"
              >
                Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso
              </h3>
              <p
                className="text-gray-400 line-clamp-5 text-[15px]"
                title="A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br."
              >
                A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 gap-2 bg-blue-500 transition-all hover:bg-blue-400"
                >
                  <Newspaper size={18} />
                  Ler Notícia
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 ring-1 ring-inset ring-white/20 gap-2 bg-white/10 transition-all hover:bg-white/20"
                >
                  Compartilhar
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[400px]">
              <div className="w-full h-[220px] relative rounded-lg bg-[url('https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso-2024-06-11-66688941e1134.jpeg')] bg-cover bg-center">
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/70 p-1">
                  <Globe size={14} />
                </div>
              </div>
              <h3
                className="text-lg font-semibold text-white line-clamp-2"
                title="Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso"
              >
                Prefeitura de São Cristóvão lança novo site apresentando
                melhorias para o acesso
              </h3>
              <p
                className="text-gray-400 line-clamp-5 text-[15px]"
                title="A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br."
              >
                A Prefeitura de São Cristóvão agora está mais conectada e com
                melhor acesso à informação para os seus moradores e
                profissionais. Nesta terça-feira (11), a Secretaria Municipal de
                Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da
                Informação (DITIN), lançou o novo site da prefeitura, em uma
                apresentação que mostrou todas as novidades e melhorias para os
                servidores, realizada no auditório do Museu de Arte Sacra de São
                Cristóvão. Para conhecê-lo, basta acessar o endereço
                www.saocristovao.se.gov.br.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 gap-2 bg-blue-500 transition-all hover:bg-blue-400"
                >
                  <Newspaper size={18} />
                  Ler Notícia
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center rounded-4xl text-[15px] font-semibold px-8 py-2.5 ring-1 ring-inset ring-white/20 gap-2 bg-white/10 transition-all hover:bg-white/20"
                >
                  Compartilhar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer color="bg-gray-900/40 " />
    </>
  );
};
