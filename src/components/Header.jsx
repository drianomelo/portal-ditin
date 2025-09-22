export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center gap-20 px-8">
      <img
        className="max-w-20 w-full"
        src="/public/images/logo-ditin-w.svg"
        alt="Logo da DITIN"
      />

      <nav className="py-4 w-full relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-gradient-to-r before:from-transparent before:via-[#ffffff2a] before:to-transparent">
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <a
              href="/"
              className="flex items-center gap-3 bg-[#43464e75] py-1.5 font-medium px-4 rounded-lg border-2 border-[#ffffff2a]"
            >
              <img
                className="w-5"
                src="/public/images/icons/icon-home-w.svg"
                alt="Icone de Casa"
              />
              Início
            </a>
          </li>
          <li>
            <a
              href="/noticias"
              className="flex opacity-50 items-center gap-3 py-1.5 font-medium px-4 rounded-lg border-2 border-transparent transition-all hover:opacity-100 hover:bg-[#43464e75] hover:border-[#ffffff2a]"
            >
              <img
                className="w-5"
                src="/public/images/icons/icon-project-w.svg"
                alt="Icone de Projetos"
              />
              Projetos
            </a>
          </li>
          <li>
            <a
              href="/servicos"
              className="flex opacity-50 items-center gap-3 py-1.5 font-medium px-4 rounded-lg border-2 border-transparent transition-all hover:opacity-100 hover:bg-[#43464e75] hover:border-[#ffffff2a]"
            >
              <img
                className="w-5"
                src="/public/images/icons/icon-team-w.svg"
                alt="Icone de Equipe"
              />
              Equipe
            </a>
          </li>
        </ul>
      </nav>

      <button className="cursor-pointer flex items-center gap-3 bg-[#43464e75] py-[3px] font-medium pl-4 pr-1 rounded-lg border-2 border-[#ffffff2a] group">
        Acessar
        <span className="bg-[#ffffff2a] w-[30px] h-[30px] flex items-center justify-center rounded-md border-2 border-[#ffffff17] transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </span>
      </button>
    </header>
  );
};
