import { AnimatedNumber } from "./AnimatedNumber";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PROJETOS_DITIN = [
  {
    id: 1,
    coord: "cosis",
    title: "Portal de São Cristóvão",
    link: "https://www.saocristovao.se.gov.br",
    hero: {
      image:
        "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
      descriptionSM:
        "Portal oficial de São Cristóvão, reunindo informações, serviços digitais, notícias e transparência para o cidadão.",
      data: {
        tech: "laravel",
        pages: "50",
        public: true,
      },
      video: "",
      descriptionLG: [
        "O Portal de São Cristóvão foi desenvolvido para centralizar informações, serviços e conteúdos institucionais do município em um único ambiente digital. A plataforma facilita o acesso do cidadão a notícias, ações da gestão pública, serviços online, publicações oficiais e canais de transparência, promovendo uma comunicação mais eficiente entre a prefeitura e a população.",
        "Com uma interface moderna, responsiva e de fácil navegação, o portal valoriza a identidade da cidade e fortalece a participação cidadã, garantindo acesso rápido, seguro e organizado às informações públicas.",
      ],
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição de diretrizes, organização do fluxo de trabalho e acompanhamento das entregas da equipe, garantindo a qualidade, consistência e alinhamento do sistema com os objetivos institucionais.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável por todo o desenvolvimento da interface do sistema, incluindo estruturação das páginas, implementação do layout, responsividade, acessibilidade e integração visual, garantindo uma experiência intuitiva e moderna para o usuário.",
      },
      {
        name: "Rodrigo Santos",
        function: "Desenvolvedor Front-End",
        image: "/images/team/rodrigo-h.png",
        description:
          "Responsável pelas otimizações do sistema, atuando na melhoria de performance, ajustes de carregamento, refinamento de código e aprimoramento da experiência do usuário, assegurando maior eficiência e estabilidade da aplicação.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase inicial define a visão, a missão e a justificativa fundamental para o desenvolvimento do Portal da Prefeitura.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Transparência e Controle Social",
            description:
              "A motivação principal para um portal governamental, como o de São Cristóvão, é cumprir as exigências legais e promover a abertura da gestão.",
          },
          {
            number: "02",
            title: "Atendimento às Exigências Legais",
            description:
              "O portal foi concebido para atender às exigências legais vigentes, como a Lei de Acesso à Informação (LAI), assegurando a publicação de dados obrigatórios, documentos oficiais e informações de interesse público de forma acessível.",
          },
          {
            number: "03",
            title: "Centralização de Informações e Serviços",
            description:
              "A plataforma unifica notícias, serviços digitais, publicações oficiais e conteúdos institucionais em um único ambiente, facilitando o acesso do cidadão às informações e reduzindo a fragmentação de canais.",
          },
          {
            number: "04",
            title: "Comunicação Institucional Eficiente",
            description:
              "O portal atua como principal canal de comunicação entre a administração pública e a população, permitindo a divulgação de ações, projetos e comunicados oficiais de forma clara, atualizada e confiável.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação Inicial do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário e da interface visual do portal.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Definição da Experiência do Usuário (UX)",
            description:
              "Nesta fase, foram definidos os fluxos de navegação, a organização das informações e a hierarquia de conteúdos, com foco em usabilidade, acessibilidade e facilidade de uso para diferentes perfis de usuários.",
          },
          {
            number: "02",
            title: "Criação da Interface Visual (UI)",
            description:
              "Foi desenvolvido o design visual do portal, respeitando a identidade institucional do município, com uma interface moderna, responsiva e consistente, garantindo clareza na comunicação e padronização visual.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas Iniciais",
            description:
              "Teve início a implementação das estruturas principais do portal, incluindo a página inicial e seções estratégicas, estabelecendo a base do front-end para expansão futura do sistema.",
          },
          {
            number: "04",
            title: "Implementação Front-End Inicial",
            description:
              "Nesta etapa, foram desenvolvidos os primeiros componentes e layouts em front-end, aplicando boas práticas de desenvolvimento, responsividade e organização de código, preparando o portal para integrações posteriores.",
          },
        ],
      },
      {
        number: "3",
        title: "Desenvolvimento Back-End e Integrações",
        description:
          "Esta etapa concentrou-se no desenvolvimento do back-end do portal, integrações com sistemas internos e organização dos dados institucionais.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Estruturação do Sistema Administrativo",
            description:
              "Implementação das funcionalidades administrativas para gerenciamento de conteúdos, páginas, notícias e informações institucionais do portal.",
          },
          {
            number: "02",
            title: "Integração com Bancos de Dados",
            description:
              "Configuração e integração do portal com o banco de dados, garantindo armazenamento estruturado e acesso eficiente às informações públicas.",
          },
          {
            number: "03",
            title: "Gerenciamento de Conteúdo Dinâmico",
            description:
              "Desenvolvimento de mecanismos para publicação e atualização dinâmica de conteúdos, permitindo maior autonomia aos setores responsáveis.",
          },
          {
            number: "04",
            title: "Integrações Institucionais",
            description:
              "Integração com sistemas e serviços institucionais, ampliando as funcionalidades e o alcance do portal.",
          },
        ],
      },
      {
        number: "4",
        title: "Testes, Ajustes e Otimizações",
        description:
          "Nesta fase, o portal passou por testes funcionais, ajustes visuais e otimizações de desempenho antes de sua publicação oficial.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Testes Funcionais e de Navegação",
            description:
              "Validação do funcionamento das páginas, links, formulários e fluxos de navegação do portal.",
          },
          {
            number: "02",
            title: "Ajustes de Usabilidade e Acessibilidade",
            description:
              "Refinamento da interface e adequações de acessibilidade para garantir melhor experiência a todos os usuários.",
          },
          {
            number: "03",
            title: "Otimização de Performance",
            description:
              "Aplicação de melhorias para reduzir tempo de carregamento e otimizar o desempenho geral do portal.",
          },
          {
            number: "04",
            title: "Correções e Estabilidade do Sistema",
            description:
              "Correção de inconsistências identificadas durante os testes, assegurando estabilidade e confiabilidade.",
          },
        ],
      },
      {
        number: "5",
        title: "Publicação e Manutenção Contínua",
        description:
          "Esta etapa marcou a publicação oficial do portal e o início do processo de manutenção contínua e evolução da plataforma.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Publicação Oficial do Portal",
            description:
              "Disponibilização do portal para acesso público, consolidando-o como canal oficial de comunicação do município.",
          },
          {
            number: "02",
            title: "Monitoramento de Acesso e Desempenho",
            description:
              "Acompanhamento do uso da plataforma, volume de acessos e desempenho do sistema após a publicação.",
          },
          {
            number: "03",
            title: "Atualizações e Manutenção",
            description:
              "Manutenção contínua do portal, com atualizações técnicas e correções para garantir seu pleno funcionamento.",
          },
          {
            number: "04",
            title: "Evolução e Expansão do Portal",
            description:
              "Planejamento e implementação de novas funcionalidades e serviços digitais para ampliar o atendimento ao cidadão.",
          },
        ],
      },
    ],
    news: [
      {
        image:
          "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
        title:
          "Prefeitura de São Cristóvão lança novo site apresentando melhorias para o acesso",
        description:
          "A Prefeitura de São Cristóvão agora está mais conectada e com melhor acesso à informação para os seus moradores e profissionais. Nesta terça-feira (11), a Secretaria Municipal de Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da Informação (DITIN), lançou o novo site da prefeitura, em uma apresentação que mostrou todas as novidades e melhorias para os servidores, realizada no auditório do Museu de Arte Sacra de São Cristóvão. Para conhecê-lo, basta acessar o endereço www.saocristovao.se.gov.br.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso",
        share: "",
      },
    ],
  },
  {
    id: 2,
    coord: "cosis",
    title: "Casa Feliz",
    hero: {
      image:
        "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
      descriptionSM:
        "Portal do programa Casa Feliz, destinado à inscrição de famílias de baixa renda para participação em programas habitacionais do município.",
      data: {
        tech: "laravel",
        pages: "20",
        public: true,
      },
      video: "",
      descriptionLG: [
        "O portal Casa Feliz foi desenvolvido para viabilizar o processo de inscrição e participação de famílias de baixa renda nos programas habitacionais do município de São Cristóvão.",
        "A plataforma permite o acesso às informações oficiais do programa, critérios de participação, etapas do processo e orientações necessárias, garantindo transparência, organização e facilidade no cadastro dos interessados.",
      ],
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição das diretrizes de desenvolvimento, organização das demandas e acompanhamento das entregas, garantindo a qualidade, segurança e alinhamento do sistema aos objetivos do programa Casa Feliz.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável pelo desenvolvimento completo do front-end do portal, incluindo a implementação das interfaces, formulários de inscrição, responsividade, usabilidade e experiência do usuário.",
      },
      {
        name: "Rony Santos",
        function: "Desenvolvedor Back-End",
        image: "/images/team/rony-h.png",
        description:
          "Responsável pelo desenvolvimento da lógica de back-end, integrações com banco de dados, validações do processo de inscrição e garantia da segurança e integridade das informações dos usuários.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase inicial definiu os objetivos do programa Casa Feliz e a necessidade de um portal digital para organizar, dar transparência e viabilizar o processo de inscrição das famílias interessadas.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Inclusão Social e Acesso à Moradia",
            description:
              "O portal foi concebido como ferramenta de inclusão social, facilitando o acesso de famílias de baixa renda ao processo de inscrição em programas habitacionais do município.",
          },
          {
            number: "02",
            title: "Transparência no Processo de Inscrição",
            description:
              "A plataforma garante clareza nas regras, critérios de seleção e etapas do programa, promovendo um processo mais transparente e acessível à população.",
          },
          {
            number: "03",
            title: "Organização e Centralização dos Cadastros",
            description:
              "O sistema centraliza os dados dos inscritos em um único ambiente digital, otimizando a gestão das informações e reduzindo processos manuais.",
          },
          {
            number: "04",
            title: "Facilidade de Acesso para a População",
            description:
              "O portal foi planejado para ser simples e intuitivo, permitindo que os cidadãos realizem suas inscrições de forma autônoma e segura.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação Inicial do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário e da interface visual do portal Casa Feliz, bem como no início do desenvolvimento front-end voltado ao processo de inscrição.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Mapeamento do Fluxo de Inscrição (UX)",
            description:
              "Foram definidos os fluxos de cadastro e envio de informações, priorizando simplicidade e clareza para facilitar a inscrição das famílias.",
          },
          {
            number: "02",
            title: "Interface Clara e Acessível (UI)",
            description:
              "Desenvolvimento de uma interface visual acessível, com linguagem simples e elementos visuais que auxiliam o usuário durante o preenchimento do cadastro.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas de Inscrição",
            description:
              "Implementação das páginas principais do sistema, incluindo apresentação do programa, critérios, orientações e formulários de inscrição.",
          },
          {
            number: "04",
            title: "Implementação Front-End do Cadastro",
            description:
              "Desenvolvimento dos componentes de front-end responsáveis pela coleta de dados, validações e organização das informações fornecidas pelos inscritos.",
          },
        ],
      },
      {
        number: "3",
        title: "Desenvolvimento Back-End e Sistema de Inscrição",
        description:
          "Esta etapa concentrou-se no desenvolvimento da lógica de back-end responsável pelo funcionamento do sistema de inscrições, validação de dados e armazenamento seguro das informações dos candidatos.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Estruturação do Banco de Dados",
            description:
              "Definição e implementação da estrutura de dados necessária para armazenar informações cadastrais, documentos e status das inscrições de forma organizada e segura.",
          },
          {
            number: "02",
            title: "Lógica do Processo de Inscrição",
            description:
              "Desenvolvimento das regras de negócio que controlam o fluxo de inscrição, validações obrigatórias, critérios do programa e etapas do processo.",
          },
          {
            number: "03",
            title: "Segurança e Proteção de Dados",
            description:
              "Implementação de mecanismos de segurança para garantir a confidencialidade, integridade e proteção das informações pessoais dos inscritos, seguindo boas práticas e princípios da LGPD.",
          },
          {
            number: "04",
            title: "Integração com o Front-End",
            description:
              "Integração entre o sistema de back-end e a interface do portal, permitindo o envio, validação e retorno de informações durante o processo de inscrição.",
          },
        ],
      },
      {
        number: "4",
        title: "Testes, Ajustes e Otimizações",
        description:
          "Nesta fase, o sistema passou por testes funcionais e técnicos, com foco em estabilidade, performance e correção de inconsistências antes da publicação oficial.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Testes Funcionais do Cadastro",
            description:
              "Realização de testes completos no fluxo de inscrição, garantindo o correto funcionamento dos formulários, validações e envio das informações.",
          },
          {
            number: "02",
            title: "Ajustes de Usabilidade",
            description:
              "Refinamento da experiência do usuário, simplificando etapas e melhorando a clareza das instruções apresentadas ao cidadão.",
          },
          {
            number: "03",
            title: "Otimização de Performance",
            description:
              "Aplicação de melhorias para reduzir tempo de carregamento, otimizar requisições e garantir melhor desempenho em períodos de alta demanda.",
          },
          {
            number: "04",
            title: "Correções e Estabilidade do Sistema",
            description:
              "Correção de falhas identificadas durante os testes, assegurando a estabilidade e confiabilidade do portal.",
          },
        ],
      },
      {
        number: "5",
        title: "Publicação e Disponibilização ao Público",
        description:
          "Esta etapa marcou a disponibilização oficial do portal Casa Feliz para a população, garantindo acesso público ao sistema de inscrições.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Preparação do Ambiente de Produção",
            description:
              "Configuração do ambiente final do sistema, assegurando estabilidade, segurança e disponibilidade do portal.",
          },
          {
            number: "02",
            title: "Publicação Oficial do Portal",
            description:
              "Disponibilização do portal para acesso público, permitindo que as famílias realizassem suas inscrições de forma online.",
          },
          {
            number: "03",
            title: "Monitoramento Inicial de Acesso",
            description:
              "Acompanhamento do uso do sistema após a publicação, observando desempenho, volume de acessos e possíveis ajustes necessários.",
          },
          {
            number: "04",
            title: "Suporte Inicial e Manutenção",
            description:
              "Prestação de suporte técnico inicial e manutenção corretiva para garantir o pleno funcionamento do portal durante o período de inscrições.",
          },
        ],
      },
    ],
    news: [
      {
        image:
          "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-programa-casa-feliz-para-beneficiar-populacao-com-acesso-a-moradia-2024-07-05-66882a50de680.JPG",
        title:
          "Prefeitura de São Cristóvão lança Programa Casa Feliz para beneficiar população com acesso à moradia",
        description:
          'Nesta sexta-feira (05), a Prefeitura de São Cristóvão deu um passo importante para promover o acesso à moradia digna na Cidade Mãe de Sergipe com o lançamento do programa "Casa Feliz São Cristóvão", oriundo do Minha Casa Minha Vida Cidades. O programa visa auxiliar pessoas em situação de baixa renda a conquistarem seus primeiros imóveis, proporcionando oportunidades para aquisição de um lar digno e seguro através de diversas iniciativas de suporte público. As inscrições terão início a partir do dia 22 de julho, através do portal de habitação do município: casafeliz.saocristovao.se.gov.br.',
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-programa-casa-feliz-para-beneficiar-populacao-com-acesso-a-moradia",
        share: "",
      },
      {
        image:
          "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-abre-inscricoes-para-os-residenciais-piranji-i-e-ii-nesta-segunda-feira-22-2025-09-17-68cad658b277e.png",
        title:
          "Prefeitura de São Cristóvão abre inscrições para os Residenciais Piranji I e II nesta segunda-feira (22)",
        description:
          "A Prefeitura de São Cristóvão, por meio da Secretaria Municipal de Assistência Social (Semas), abre inscrições para o Programa de Habitação Social, destinado à aquisição de imóveis dos Residenciais Piranji I e II. O empreendimento tem como objetivo transformar a vida de centenas de famílias de baixa renda do município. As inscrições terão início na próxima segunda-feira (22)  de forma remota e presencial.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-abre-inscricoes-para-os-residenciais-piranji-i-e-ii-nesta-segunda-feira-22",
        share: "",
      },
      {
        image:
          "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-abre-inscricoes-para-residencial-piranji-i-e-ii-atraves-do-site-e-com-mutiroes-presenciais-2025-09-22-68d1966a5c257.jpg",
        title:
          "Prefeitura de São Cristóvão abre inscrições para Residencial Piranji I e II através do site e com mutirões presenciais",
        description:
          "Nesta segunda-feira (22), a Prefeitura de São Cristóvão, por meio da Secretaria Municipal de Assistência Social (Semas), iniciou as inscrições para o Programa de Habitação Social, destinado à aquisição de imóveis dos Residenciais Piranji I e II. O empreendimento tem como objetivo transformar a vida de centenas de famílias de baixa renda do município. As inscrições de forma presencial acontecem até o dia 03 de outubro, e também estão disponíveis de forma online, através do site Casa Feliz.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-abre-inscricoes-para-residencial-piranji-i-e-ii-atraves-do-site-e-com-mutiroes-presenciais",
        share: "",
      },
    ],
  },
  {
    id: 3,
    coord: "cosis",
    title: "Emprega Mais",
    hero: {
      image:
        "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/empregamais.png",
      descriptionSM:
        "Portal do programa Emprega Mais, criado para divulgação de vagas de emprego e agilização dos processos de contratação no município.",
      data: {
        tech: "Laravel",
        pages: "15",
        public: true,
      },
      video: "",
      descriptionLG: [
        "O portal Emprega Mais foi desenvolvido para facilitar a divulgação de oportunidades de emprego e tornar mais ágil o processo de contratação no município de São Cristóvão.",
        "A plataforma conecta empresas, trabalhadores e o poder público em um único ambiente digital, permitindo o acesso rápido às vagas disponíveis, informações sobre processos seletivos e ações voltadas à geração de emprego e renda.",
      ],
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição das diretrizes de desenvolvimento, organização das demandas e acompanhamento das entregas, garantindo alinhamento institucional e qualidade do sistema.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável pelo desenvolvimento completo do front-end do portal, incluindo interfaces, páginas de vagas, responsividade, usabilidade e experiência do usuário.",
      },
      {
        name: "Bruna Santos",
        function: "Desenvolvedor Back-End",
        image: "/images/team/bruna-h.png",
        description:
          "Responsável pelo desenvolvimento do back-end do sistema, incluindo regras de negócio, gerenciamento das vagas, integrações e segurança dos dados.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase definiu os objetivos do programa Emprega Mais e a necessidade de um portal digital para apoiar a geração de emprego e renda no município.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Fomento ao Emprego e à Renda",
            description:
              "O portal foi concebido como ferramenta de apoio às políticas públicas de geração de emprego, facilitando o acesso da população às oportunidades disponíveis.",
          },
          {
            number: "02",
            title: "Agilidade no Processo de Contratação",
            description:
              "A plataforma visa reduzir o tempo entre a divulgação das vagas e a contratação, tornando os processos mais eficientes.",
          },
          {
            number: "03",
            title: "Centralização das Oportunidades",
            description:
              "Reunião das vagas de emprego em um único ambiente digital, facilitando a busca e o acesso por parte dos trabalhadores.",
          },
          {
            number: "04",
            title: "Fortalecimento da Comunicação Institucional",
            description:
              "O portal atua como canal oficial de divulgação das ações e programas de empregabilidade do município.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário, na interface visual e na estrutura inicial do portal Emprega Mais.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Mapeamento da Jornada do Usuário",
            description:
              "Definição dos fluxos de navegação para candidatos e empresas, priorizando simplicidade e rapidez no acesso às vagas.",
          },
          {
            number: "02",
            title: "Criação da Interface Visual (UI)",
            description:
              "Desenvolvimento de uma interface moderna, institucional e responsiva, alinhada à identidade visual do programa.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas de Vagas",
            description:
              "Implementação das páginas principais, incluindo listagem de vagas, detalhes das oportunidades e orientações.",
          },
          {
            number: "04",
            title: "Implementação Front-End Inicial",
            description:
              "Desenvolvimento dos primeiros componentes e layouts do front-end, garantindo usabilidade e responsividade.",
          },
        ],
      },
      {
        number: "3",
        title: "Desenvolvimento Back-End e Gestão de Vagas",
        description:
          "Nesta etapa foi desenvolvido o sistema responsável pela gestão das vagas, cadastros e regras de funcionamento do portal.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Cadastro e Gerenciamento de Vagas",
            description:
              "Desenvolvimento das funcionalidades para criação, edição e publicação das vagas de emprego.",
          },
          {
            number: "02",
            title: "Gerenciamento de Candidaturas",
            description:
              "Implementação das regras de envio e organização das candidaturas realizadas pelos interessados.",
          },
          {
            number: "03",
            title: "Segurança e Integridade dos Dados",
            description:
              "Aplicação de medidas de segurança para proteção das informações de candidatos e empresas.",
          },
          {
            number: "04",
            title: "Integração com o Front-End",
            description:
              "Integração completa entre o sistema de back-end e a interface do portal, garantindo funcionamento fluido.",
          },
        ],
      },
      {
        number: "4",
        title: "Testes, Ajustes e Otimizações",
        description:
          "O portal passou por testes funcionais e ajustes técnicos para garantir estabilidade e bom desempenho.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Testes de Navegação e Funcionalidades",
            description:
              "Validação dos fluxos de acesso às vagas, formulários e páginas do sistema.",
          },
          {
            number: "02",
            title: "Ajustes de Usabilidade",
            description:
              "Refinamento da experiência do usuário para tornar o processo de busca por vagas mais intuitivo.",
          },
          {
            number: "03",
            title: "Otimização de Performance",
            description:
              "Melhorias no desempenho do portal para garantir agilidade mesmo em períodos de alto acesso.",
          },
          {
            number: "04",
            title: "Correções e Estabilidade",
            description:
              "Correção de inconsistências identificadas durante os testes, assegurando estabilidade do sistema.",
          },
        ],
      },
      {
        number: "5",
        title: "Publicação e Operação do Portal",
        description:
          "Esta etapa marcou a publicação oficial do portal Emprega Mais e o início de sua operação contínua.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/casafeliz.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Publicação Oficial do Portal",
            description:
              "Disponibilização do portal para acesso público como canal oficial de divulgação de vagas no município.",
          },
          {
            number: "02",
            title: "Monitoramento de Acessos",
            description:
              "Acompanhamento do uso da plataforma e do interesse da população pelas vagas divulgadas.",
          },
          {
            number: "03",
            title: "Atualizações e Manutenção",
            description:
              "Manutenção contínua do sistema com atualizações técnicas e melhorias funcionais.",
          },
          {
            number: "04",
            title: "Evolução do Programa",
            description:
              "Planejamento de novas funcionalidades para ampliar o alcance e a eficiência do Emprega Mais.",
          },
        ],
      },
    ],
    news: [
      {
        image:
          "https://publicacao.saocristovao.se.gov.br/storage/post/prefeitura-de-sao-cristovao-lanca-novo-portal-emprega-e-qualifica-para-ampliar-a-empregabilidade-e-capacitacao-profissional-dos-sancristovenses-2025-09-03-68b88e668c035.jpeg",
        title:
          "Prefeitura de São Cristóvão lança novo portal Emprega+ e Qualifica+ para ampliar a empregabilidade e capacitação profissional dos sancristovenses",
        description:
          "A Prefeitura de São Cristóvão, por meio da Secretaria Municipal de Desenvolvimento Econômico e do Trabalho (Semdet), realizou a cerimônia de lançamento do novo portal Emprega+ com a integração da plataforma Qualifica+ São Cristóvão, nesta quarta-feira (03). A iniciativa visa ampliar as oportunidades de emprego e qualificação profissional para os cidadãos do município, que já lidera a geração de empregos no interior sergipano, de acordo com os dados do Cadastro Geral de Empregados e Desempregados (Caged).",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-portal-emprega-e-qualifica-para-ampliar-a-empregabilidade-e-capacitacao-profissional-dos-sancristovenses",
        share: "",
      },
      {
        image:
          "https://publicacao.saocristovao.se.gov.br/storage/post/sao-cristovao-lancara-novo-portal-emprega-integrado-a-plataforma-qualifica-nesta-quarta-feira-03-2025-09-02-68b706a018169.png",
        title:
          "São Cristóvão lançará novo Portal Emprega+ integrado à plataforma Qualifica+ nesta quarta-feira (03)",
        description:
          "A Prefeitura de São Cristóvão, por meio da Secretaria Municipal de Desenvolvimento Econômico e do Trabalho (Semdet), lançará na próxima quarta-feira (03) o Portal Emprega+ São Cristóvão, integrado à plataforma Qualifica+. O evento acontecerá no Paço Municipal, na Praça São Francisco, às 9h. Disponível no site oficial da Prefeitura, o portal recebeu novo visual, novas funcionalidades e novos conteúdos, tornando-se uma ferramenta ainda mais eficiente para trabalhadores e empresas do município.",
        link: "https://www.saocristovao.se.gov.br/noticia/sao-cristovao-lancara-novo-portal-emprega-integrado-a-plataforma-qualifica-nesta-quarta-feira-03",
        share: "",
      },
    ],
  },
  {
    id: 1,
    coord: "cosis",
    title: "Portal de São Cristóvão",
    link: "https://www.saocristovao.se.gov.br",
    hero: {
      image:
        "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
      descriptionSM:
        "Portal oficial de São Cristóvão, reunindo informações, serviços digitais, notícias e transparência para o cidadão.",
      data: {
        tech: "laravel",
        pages: "50",
        public: true,
      },
      video: "",
      descriptionLG: [
        "O Portal de São Cristóvão foi desenvolvido para centralizar informações, serviços e conteúdos institucionais do município em um único ambiente digital. A plataforma facilita o acesso do cidadão a notícias, ações da gestão pública, serviços online, publicações oficiais e canais de transparência, promovendo uma comunicação mais eficiente entre a prefeitura e a população.",
        "Com uma interface moderna, responsiva e de fácil navegação, o portal valoriza a identidade da cidade e fortalece a participação cidadã, garantindo acesso rápido, seguro e organizado às informações públicas.",
      ],
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição de diretrizes, organização do fluxo de trabalho e acompanhamento das entregas da equipe, garantindo a qualidade, consistência e alinhamento do sistema com os objetivos institucionais.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável por todo o desenvolvimento da interface do sistema, incluindo estruturação das páginas, implementação do layout, responsividade, acessibilidade e integração visual, garantindo uma experiência intuitiva e moderna para o usuário.",
      },
      {
        name: "Rodrigo Santos",
        function: "Desenvolvedor Front-End",
        image: "/images/team/rodrigo-h.png",
        description:
          "Responsável pelas otimizações do sistema, atuando na melhoria de performance, ajustes de carregamento, refinamento de código e aprimoramento da experiência do usuário, assegurando maior eficiência e estabilidade da aplicação.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase inicial define a visão, a missão e a justificativa fundamental para o desenvolvimento do Portal da Prefeitura.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Transparência e Controle Social",
            description:
              "A motivação principal para um portal governamental, como o de São Cristóvão, é cumprir as exigências legais e promover a abertura da gestão.",
          },
          {
            number: "02",
            title: "Atendimento às Exigências Legais",
            description:
              "O portal foi concebido para atender às exigências legais vigentes, como a Lei de Acesso à Informação (LAI), assegurando a publicação de dados obrigatórios, documentos oficiais e informações de interesse público de forma acessível.",
          },
          {
            number: "03",
            title: "Centralização de Informações e Serviços",
            description:
              "A plataforma unifica notícias, serviços digitais, publicações oficiais e conteúdos institucionais em um único ambiente, facilitando o acesso do cidadão às informações e reduzindo a fragmentação de canais.",
          },
          {
            number: "04",
            title: "Comunicação Institucional Eficiente",
            description:
              "O portal atua como principal canal de comunicação entre a administração pública e a população, permitindo a divulgação de ações, projetos e comunicados oficiais de forma clara, atualizada e confiável.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação Inicial do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário e da interface visual do portal.",
        images: {
          main: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
          rest: [
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
            {
              src: "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
            },
          ],
        },
        details: [
          {
            number: "01",
            title: "Definição da Experiência do Usuário (UX)",
            description:
              "Nesta fase, foram definidos os fluxos de navegação, a organização das informações e a hierarquia de conteúdos, com foco em usabilidade, acessibilidade e facilidade de uso para diferentes perfis de usuários.",
          },
          {
            number: "02",
            title: "Criação da Interface Visual (UI)",
            description:
              "Foi desenvolvido o design visual do portal, respeitando a identidade institucional do município, com uma interface moderna, responsiva e consistente, garantindo clareza na comunicação e padronização visual.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas Iniciais",
            description:
              "Teve início a implementação das estruturas principais do portal, incluindo a página inicial e seções estratégicas, estabelecendo a base do front-end para expansão futura do sistema.",
          },
          {
            number: "04",
            title: "Implementação Front-End Inicial",
            description:
              "Nesta etapa, foram desenvolvidos os primeiros componentes e layouts em front-end, aplicando boas práticas de desenvolvimento, responsividade e organização de código, preparando o portal para integrações posteriores.",
          },
        ],
      },
    ],
    news: [
      {
        image:
          "https://anexos.saocristovao.se.gov.br/storage/files/18/portal-ditin/projetos/portal.png",
        title:
          "Prefeitura de São Cristóvão lança novo site apresentando melhorias para o acesso",
        description:
          "A Prefeitura de São Cristóvão agora está mais conectada e com melhor acesso à informação para os seus moradores e profissionais. Nesta terça-feira (11), a Secretaria Municipal de Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da Informação (DITIN), lançou o novo site da prefeitura, em uma apresentação que mostrou todas as novidades e melhorias para os servidores, realizada no auditório do Museu de Arte Sacra de São Cristóvão. Para conhecê-lo, basta acessar o endereço www.saocristovao.se.gov.br.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso",
        share: "",
      },
    ],
  },
  {
    id: 2,
    coord: "COSIS",
    title: "Casa Feliz",
    hero: {
      image: "/images/projects/casafeliz.png",
      descriptionSM:
        "Portal oficial de São Cristóvão, reunindo informações, serviços digitais, notícias e transparência para o cidadão.",
      data: {
        tech: "laravel",
        pages: "50",
        public: true,
      },
      video: "",
      descriptionLG:
        "O Portal de São Cristóvão foi desenvolvido para centralizar informações, serviços e conteúdos institucionais do município em um único ambiente digital. A plataforma facilita o acesso do cidadão a notícias, ações da gestão pública, serviços online, publicações oficiais e canais de transparência, promovendo uma comunicação mais eficiente entre a prefeitura e a população. Com uma interface moderna, responsiva e de fácil navegação, o portal valoriza a identidade da cidade e fortalece a participação cidadã, garantindo acesso rápido, seguro e organizado às informações públicas.",
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição de diretrizes, organização do fluxo de trabalho e acompanhamento das entregas da equipe, garantindo a qualidade, consistência e alinhamento do sistema com os objetivos institucionais.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável por todo o desenvolvimento da interface do sistema, incluindo estruturação das páginas, implementação do layout, responsividade, acessibilidade e integração visual, garantindo uma experiência intuitiva e moderna para o usuário.",
      },
      {
        name: "Rodrigo Santos",
        function: "Desenvolvedor Front-End",
        image: "/images/team/rodrigo-h.png",
        description:
          "Responsável pelas otimizações do sistema, atuando na melhoria de performance, ajustes de carregamento, refinamento de código e aprimoramento da experiência do usuário, assegurando maior eficiência e estabilidade da aplicação.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase inicial define a visão, a missão e a justificativa fundamental para o desenvolvimento do Portal da Prefeitura.",
        images: [
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
        ],
        details: [
          {
            number: "01",
            title: "Transparência e Controle Social",
            description:
              "A motivação principal para um portal governamental, como o de São Cristóvão, é cumprir as exigências legais e promover a abertura da gestão.",
          },
          {
            number: "02",
            title: "Atendimento às Exigências Legais",
            description:
              "O portal foi concebido para atender às exigências legais vigentes, como a Lei de Acesso à Informação (LAI), assegurando a publicação de dados obrigatórios, documentos oficiais e informações de interesse público de forma acessível.",
          },
          {
            number: "03",
            title: "Centralização de Informações e Serviços",
            description:
              "A plataforma unifica notícias, serviços digitais, publicações oficiais e conteúdos institucionais em um único ambiente, facilitando o acesso do cidadão às informações e reduzindo a fragmentação de canais.",
          },
          {
            number: "04",
            title: "Comunicação Institucional Eficiente",
            description:
              "O portal atua como principal canal de comunicação entre a administração pública e a população, permitindo a divulgação de ações, projetos e comunicados oficiais de forma clara, atualizada e confiável.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação Inicial do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário e da interface visual do portal, bem como no início do desenvolvimento front-end, definindo as estruturas, layouts e páginas iniciais do sistema.",
        images: [
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
        ],
        details: [
          {
            number: "01",
            title: "Definição da Experiência do Usuário (UX)",
            description:
              "Nesta fase, foram definidos os fluxos de navegação, a organização das informações e a hierarquia de conteúdos, com foco em usabilidade, acessibilidade e facilidade de uso para diferentes perfis de usuários.",
          },
          {
            number: "02",
            title: "Criação da Interface Visual (UI)",
            description:
              "Foi desenvolvido o design visual do portal, respeitando a identidade institucional do município, com uma interface moderna, responsiva e consistente, garantindo clareza na comunicação e padronização visual.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas Iniciais",
            description:
              "Teve início a implementação das estruturas principais do portal, incluindo a página inicial e seções estratégicas, estabelecendo a base do front-end para expansão futura do sistema.",
          },
          {
            number: "04",
            title: "Implementação Front-End Inicial",
            description:
              "Nesta etapa, foram desenvolvidos os primeiros componentes e layouts em front-end, aplicando boas práticas de desenvolvimento, responsividade e organização de código, preparando o portal para integrações posteriores.",
          },
        ],
      },
    ],
    news: [
      {
        image: "/images/projects/casafeliz.png",
        title:
          "Prefeitura de São Cristóvão lança novo site apresentando melhorias para o acesso",
        description:
          "A Prefeitura de São Cristóvão agora está mais conectada e com melhor acesso à informação para os seus moradores e profissionais. Nesta terça-feira (11), a Secretaria Municipal de Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da Informação (DITIN), lançou o novo site da prefeitura, em uma apresentação que mostrou todas as novidades e melhorias para os servidores, realizada no auditório do Museu de Arte Sacra de São Cristóvão. Para conhecê-lo, basta acessar o endereço www.saocristovao.se.gov.br.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso",
        share: "",
      },
    ],
  },
  {
    id: 3,
    coord: "COSIS",
    title: "Emprega+",
    hero: {
      image: "/images/projects/empregamais.png",
      descriptionSM:
        "Portal oficial de São Cristóvão, reunindo informações, serviços digitais, notícias e transparência para o cidadão.",
      data: {
        tech: "laravel",
        pages: "50",
        public: true,
      },
      video: "",
      descriptionLG:
        "O Portal de São Cristóvão foi desenvolvido para centralizar informações, serviços e conteúdos institucionais do município em um único ambiente digital. A plataforma facilita o acesso do cidadão a notícias, ações da gestão pública, serviços online, publicações oficiais e canais de transparência, promovendo uma comunicação mais eficiente entre a prefeitura e a população. Com uma interface moderna, responsiva e de fácil navegação, o portal valoriza a identidade da cidade e fortalece a participação cidadã, garantindo acesso rápido, seguro e organizado às informações públicas.",
    },
    team: [
      {
        name: "Herbert Freire",
        function: "Coordenador de Desenvolvimento",
        image: "/images/team/herbert-h.png",
        description:
          "Responsável pela coordenação técnica do projeto, definição de diretrizes, organização do fluxo de trabalho e acompanhamento das entregas da equipe, garantindo a qualidade, consistência e alinhamento do sistema com os objetivos institucionais.",
      },
      {
        name: "Adriano Melo",
        function: "Desenvolvedor Front-End",
        image: "/images/team/adriano-h.png",
        description:
          "Responsável por todo o desenvolvimento da interface do sistema, incluindo estruturação das páginas, implementação do layout, responsividade, acessibilidade e integração visual, garantindo uma experiência intuitiva e moderna para o usuário.",
      },
      {
        name: "Rodrigo Santos",
        function: "Desenvolvedor Front-End",
        image: "/images/team/rodrigo-h.png",
        description:
          "Responsável pelas otimizações do sistema, atuando na melhoria de performance, ajustes de carregamento, refinamento de código e aprimoramento da experiência do usuário, assegurando maior eficiência e estabilidade da aplicação.",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Concepção Estratégica e Justificativa",
        description:
          "Esta fase inicial define a visão, a missão e a justificativa fundamental para o desenvolvimento do Portal da Prefeitura.",
        images: [
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
        ],
        details: [
          {
            number: "01",
            title: "Transparência e Controle Social",
            description:
              "A motivação principal para um portal governamental, como o de São Cristóvão, é cumprir as exigências legais e promover a abertura da gestão.",
          },
          {
            number: "02",
            title: "Atendimento às Exigências Legais",
            description:
              "O portal foi concebido para atender às exigências legais vigentes, como a Lei de Acesso à Informação (LAI), assegurando a publicação de dados obrigatórios, documentos oficiais e informações de interesse público de forma acessível.",
          },
          {
            number: "03",
            title: "Centralização de Informações e Serviços",
            description:
              "A plataforma unifica notícias, serviços digitais, publicações oficiais e conteúdos institucionais em um único ambiente, facilitando o acesso do cidadão às informações e reduzindo a fragmentação de canais.",
          },
          {
            number: "04",
            title: "Comunicação Institucional Eficiente",
            description:
              "O portal atua como principal canal de comunicação entre a administração pública e a população, permitindo a divulgação de ações, projetos e comunicados oficiais de forma clara, atualizada e confiável.",
          },
        ],
      },
      {
        number: "2",
        title: "Design UX/UI e Estruturação Inicial do Portal",
        description:
          "Esta etapa concentrou-se na criação da experiência do usuário e da interface visual do portal, bem como no início do desenvolvimento front-end, definindo as estruturas, layouts e páginas iniciais do sistema.",
        images: [
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
          {
            src: "/images/projects/portal.png",
          },
        ],
        details: [
          {
            number: "01",
            title: "Definição da Experiência do Usuário (UX)",
            description:
              "Nesta fase, foram definidos os fluxos de navegação, a organização das informações e a hierarquia de conteúdos, com foco em usabilidade, acessibilidade e facilidade de uso para diferentes perfis de usuários.",
          },
          {
            number: "02",
            title: "Criação da Interface Visual (UI)",
            description:
              "Foi desenvolvido o design visual do portal, respeitando a identidade institucional do município, com uma interface moderna, responsiva e consistente, garantindo clareza na comunicação e padronização visual.",
          },
          {
            number: "03",
            title: "Estruturação das Páginas Iniciais",
            description:
              "Teve início a implementação das estruturas principais do portal, incluindo a página inicial e seções estratégicas, estabelecendo a base do front-end para expansão futura do sistema.",
          },
          {
            number: "04",
            title: "Implementação Front-End Inicial",
            description:
              "Nesta etapa, foram desenvolvidos os primeiros componentes e layouts em front-end, aplicando boas práticas de desenvolvimento, responsividade e organização de código, preparando o portal para integrações posteriores.",
          },
        ],
      },
    ],
    news: [
      {
        image: "/images/projects/casafeliz.png",
        title:
          "Prefeitura de São Cristóvão lança novo site apresentando melhorias para o acesso",
        description:
          "A Prefeitura de São Cristóvão agora está mais conectada e com melhor acesso à informação para os seus moradores e profissionais. Nesta terça-feira (11), a Secretaria Municipal de Governo e Gestão (SEGOV), através da Diretoria de Tecnologia da Informação (DITIN), lançou o novo site da prefeitura, em uma apresentação que mostrou todas as novidades e melhorias para os servidores, realizada no auditório do Museu de Arte Sacra de São Cristóvão. Para conhecê-lo, basta acessar o endereço www.saocristovao.se.gov.br.",
        link: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-lanca-novo-site-apresentando-melhorias-para-o-acesso",
        share: "",
      },
    ],
  },
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
      <div className="w-full relative mb-20 overflow-hidden max-md:mb-10">
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
                  <Link
                    to={`/projetos/${projeto.id}`}
                    state={{ projeto: projeto }}
                    className="group relative overflow-hidden rounded-3xl min-w-[560px] p-[4px] bg-gradient-to-br hover:from-blue-400 hover:to-purple-300 max-md:min-w-[350px]"
                  >
                    <span className="absolute w-full left-0 uppercase text-sm font-black bg-gradient-to-t from-blue-500 to-transparent -bottom-full z-12 text-center pb-4 pt-20 transition-all duration-300 group-hover:bottom-0">
                      {projeto.title}
                    </span>
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        className="max-w-[105%] transition-all duration-300 grayscale-75 group-hover:grayscale-0"
                        src={projeto.hero.image}
                        alt="Portal da Prefeitura de São Cristóvão"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4 animate-slider">
              {PROJETOS_DITIN.map((projeto) => {
                return (
                  <a
                    href="/"
                    className="group relative overflow-hidden rounded-3xl min-w-[560px] p-[4px] bg-gradient-to-br hover:from-blue-400 hover:to-purple-300 max-md:min-w-[350px]"
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

      <div className="flex items-start justify-between gap-20 max-lg:gap-10 max-md:flex-wrap max-md:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col max-md:w-[150px] max-md:flex-auto"
          >
            <span className="text-5xl border-b-2 pb-2 mb-3 border-white/10 max-md:text-4xl">
              <AnimatedNumber value={stat.value} duration={2000} />
            </span>
            <span className="text-xs opacity-40 w-fit max-md:text-[10px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
