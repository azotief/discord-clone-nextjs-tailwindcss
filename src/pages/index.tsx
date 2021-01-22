import Image from "next/image";

import Header from "../components/Header";

const Home: React.FC = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center">
      <section className="max-w-6xl flex items-center justify-between py-24">
        <Image
          src="/img/study-group.svg"
          alt="A study group chat"
          width={800}
          height={450}
        />

        <div className="flex flex-col max-w-sm ml-8">
          <p className="text-5xl font-black text-gray-800 leading-tight">
            Ambientes controlados por convites, com muito espaço pra conversar
          </p>
          <p className="text-xl leading-normal mt-6 text-gray-600">
            Os servidores Discord são organizados em canais com tópicos para
            vocês colaborarem, compartilharem ou simplesmente falarem do dia sem
            entupir um chat geral.
          </p>
        </div>
      </section>

      <svg
        className="wave-1hkxOo text-gray-100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wavePath-haxJK1"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      <section className="bg-gray-100 w-full">
        <div className="max-w-6xl flex items-center justify-between py-24 mx-auto">
          <div className="flex flex-col max-w-sm ml-8">
            <p className="text-5xl font-black text-gray-800 leading-tight">
              Aqui é fácil se encontrar
            </p>
            <p className="text-xl leading-normal mt-6 text-gray-600">
              Entre no canal de voz quando estiver à toa. Amigos no mesmo
              servidor podem te ver e entrar imediatamente, sem nem ter que
              fazer a chamada.
            </p>
          </div>

          <Image
            src="/img/voice-connected.svg"
            alt="A voice chat"
            width={800}
            height={450}
          />
        </div>
      </section>

      <svg
        className="wave-1hkxOo transform rotate-180 text-gray-100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wavePath-haxJK1"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      <section className="max-w-6xl flex items-center justify-between py-24">
        <Image
          src="/img/graggle.svg"
          alt="Graggle avatar"
          width={800}
          height={450}
        />

        <div className="flex flex-col max-w-sm ml-8">
          <p className="text-5xl font-black text-gray-800 leading-tight">
            Para poucos e para muitos
          </p>
          <p className="text-xl leading-normal mt-6 text-gray-600">
            Organize uma comunidade de qualquer tamanho com ferramentas de
            moderação e acesso personalizado a membros. Dê poderes especiais aos
            membros, monte canais privados e muito mais.
          </p>
        </div>
      </section>

      <svg
        className="wave-1hkxOo text-gray-100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wavePath-haxJK1"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      <section className="bg-gray-100 w-full">
        <div className="max-w-6xl flex flex-col items-center py-24 mx-auto">
          <div className="flex flex-col text-center max-w-4xl ml-8">
            <p className="text-5xl font-black text-gray-800 leading-tight">
              Tecnologia de conexão confiável
            </p>
            <p className="text-xl leading-normal mt-6 text-gray-600">
              Voz e vídeo de baixa latência, para você conversar como se
              estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
              transmitirem a jogatina do dia ou junte uma galera pra desenhar na
              tela compartilhada.
            </p>
          </div>

          <Image
            src="/img/video-call.svg"
            alt="A video call"
            width={1150}
            height={750}
          />

          <div className="flex flex-col items-center">
            <Image
              src="/img/sparkles.svg"
              alt="Sparkles"
              width={570}
              height={100}
            />

            <p className="text-4xl -mt-12 font-black text-gray-800 leading-tight">
              Vamos começar sua jornada?
            </p>

            <button className="bg-indigo-400 mt-8 text-xl text-white rounded-full px-10 py-4 transition-all hover:bg-gray-700 hover:shadow-xl">
              Baixar para Windows
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
