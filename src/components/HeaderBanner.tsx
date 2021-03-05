import React from "react";

const HeaderBanner: React.FC = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden gap-y-10 py-14 md:py-28 md:max-w-lg lg:max-w-3xl lg:items-center lg:mx-auto">
        <h1 className="text-white text-6xl font-black z-20">
          Seu lugar para conversar
        </h1>

        <p className="text-white text-xl text-start lg:text-center z-20">
          Não importa se você faz parte de um clube escolar, uma comunidade
          artística mundial ou só amigos querendo ficar de boa, o Discord torna
          mais fácil conversar todo dia e se ver com mais frequência.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-6 z-30">
          <button className="flex items-center w-max bg-white text-xl text-gray-700 rounded-full px-10 py-4 transition-all hover:text-blue-500 hover:shadow-xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="icon-nuGd5b mr-2"
            >
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Baixar para Windows
          </button>
          <button className="bg-gray-800 text-xl w-max text-white rounded-full px-10 py-4 transition-all hover:bg-gray-700 hover:shadow-xl">
            Abra o Discord no seu navegador
          </button>
        </div>
      </div>

      <div className="top-0 left-0 h-full w-full relative md:absolute">
        <img
          src="/img/hero1.svg"
          className="select-none bottom-0 z-10 relative block min-size-hero-left transform -translate-x-96 sm:-translate-x-72 md:hidden lg:-translate-x-0 lg:absolute lg:block lg:left-1/2 lg:ml-hero-left"
          alt="Hero 1"
        />
        
        <img
          src="/img/castles.svg"
          className="select-none absolute bottom-0 block min-size-castles left-56 sm:left-80 md:left-1/2 md:ml-castles-md lg:ml-castles-lg"
          alt="Hero 1"
        />

        <img
          src="/img/hero2.svg"
          className="select-none absolute bottom-0 left-1/2 hidden md:block md:min-size-hero-right md:ml-6 lg:ml-hero-right"
          alt="Hero 1"
        />
      </div>
    </>
  );
};

export default HeaderBanner;
