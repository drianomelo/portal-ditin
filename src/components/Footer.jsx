export const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="w-full bg-[#010614] pt-14 pb-24 px-10 rounded-t-3xl">
        <div className="max-w-[1200px] mx-auto flex items-start justify-between gap-6 relative z-10">
          <div className="max-w-[250px]">
            <img
              className="max-w-20 w-full mb-10"
              src="/public/images/logo-ditin-w.svg"
              alt="Logo da DITIN"
            />

            <p className="leading-[1.2] text-sm text-white/30 mb-10">
              Promovemos a implantação de programas e{" "}
              <span className="text-white font-semibold">
                desenvolvimento de sistemas de informática
              </span>{" "}
              de interesse de Administração Municipal.
            </p>

            <div className="flex items-center gap-5">
              <a href="">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>

              <a href="">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>

              <a href="">
                <i className="fa-solid fa-globe text-xl"></i>
              </a>
            </div>
          </div>

          <div className="flex gap-20">
            <ul className="text-[15px]">
              <li className="text-white font-semibold mb-3">Produtos</li>
              <li className="opacity-40">Demo</li>
              <li className="opacity-40">How it works</li>
              <li className="opacity-40">Features</li>
            </ul>
            <ul className="text-[15px]">
              <li className="text-white font-semibold mb-3">Produtos</li>
              <li className="opacity-40">Demo</li>
              <li className="opacity-40">How it works</li>
              <li className="opacity-40">Features</li>
              <li className="opacity-40">Features</li>
            </ul>
            <ul className="text-[15px]">
              <li className="text-white font-semibold mb-3">Produtos</li>
              <li className="opacity-40">Demo</li>
              <li className="opacity-40">How it works</li>
              <li className="opacity-40">Features</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <button className="w-12 h-12 bg-blue-500 rounded-xl mb-4">
              <i class="fa-solid fa-arrow-up-long mt-2"></i>
            </button>
            <span className="text-sm font-semibold">Voltar ao Topo</span>
          </div>
        </div>
      </div>

      <div className="w-[900px] h-[900px] bg-[#09285A] opacity-60 blur-[100px] absolute rounded-full -bottom-[700px] left-2/4 -translate-x-2/4"></div>
    </footer>
  );
};
