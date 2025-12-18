export const Hero = () => {
  return (
    <div className="w-full h-screen flex-1 flex justify-center items-center relative overflow-hidden">
      <div className="w-[2000px] h-[2000px] bg-[#010614] absolute rounded-full top-32 shadow-azul animate-girar-lento max-md:top-16">
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 left-2/4 rotate-6 rounded-xl -top-4 border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-folder-tree text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-11 h-11 left-1/4 top-24 -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-code text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 left-3/4 top-32 -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-user-shield text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-11 h-11 left-36 top-[21%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-globe text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 right-36 top-[21%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-qrcode text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-12 h-12 -right-1 top-[40%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-database text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 -left-1 top-[40%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-cloud text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-12 h-12 -right-1 bottom-[40%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-server text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 -left-1 bottom-[40%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-network-wired text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-11 h-11 left-36 bottom-[21%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-mobile-screen text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-12 h-12 right-36 bottom-[21%] -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-bug text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-12 h-12 left-2/4 rotate-6 rounded-xl -bottom-4 border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-robot text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce flex items-center justify-center absolute w-11 h-11 left-1/4 bottom-24 -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-microchip text-white opacity-70"></i>
        </div>
        <div className="bg-[#43464e75] animate-sobe-desce-inverse flex items-center justify-center absolute w-12 h-12 left-3/4 bottom-32 -rotate-6 rounded-xl border-2 border-[#ffffff2a]">
          <i className="fa-solid fa-terminal text-white opacity-70"></i>
        </div>
      </div>
      <div className="w-[900px] h-[900px] bg-[#09285A] opacity-60 blur-[100px] absolute rounded-full -bottom-[600px]"></div>

      <div className="relative flex flex-col items-center mt-24 max-md:mt-0">
        <h2 className="flex items-center font-medium text-lg gap-2 mb-4 max-md:px-6 max-md:flex-col-reverse max-md:mb-6 max-md:text-base">
          Diretoria de Tecnologia da Informação
          <a
            href="/"
            className="flex items-center text-base gap-3 bg-[#43464e75] py-1.5 font-medium px-3 rounded-xl border-2 border-[#ffffff2a] transition-all hover:opacity-100 hover:bg-[#43464e75] hover:border-[#ffffff2a] max-md:text-sm"
          >
            <img
              className="w-5"
              src="/images/icons/icon-location-w.svg"
              alt="Icone de Casa"
            />
            São Cristóvão
          </a>
        </h2>
        <h1 className="text-7xl max-w-4xl text-center mb-8 max-lg:max-w-full max-md:px-6 max-md:text-[55px]">
          Conectando São Cristóvão ao Futuro
        </h1>
        <div className="flex items-center gap-4 max-md:gap-3 max-md:flex-col">
          <div className="border border-[#ffffff2a] py-2.5 px-4 rounded-lg">
            https://saocristovao.se.gov.br
          </div>
          <button className="cursor-pointer flex items-center group gap-3 bg-[#43464e75] py-[3px] font-medium pl-4 pr-1 rounded-lg border-2 border-[#ffffff2a] ">
            Ir ao Site
            <span className="bg-[#ffffff2a] w-8 h-8 flex items-center justify-center rounded-md border-2 border-[#ffffff17] transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="font-semibold flex items-center gap-1 absolute bottom-5">
        Role <span className="opacity-50 font-normal">para Explorar</span>
        <i className="fa-solid fa-long-arrow-down text-blue-500 ml-1 animate-bounce"></i>
      </div>
    </div>
  );
};
