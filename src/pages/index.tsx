import Image from "next/image";

import Header from "../components/Header";

const Home: React.FC = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center">
      <section className="max-w-6xl flex justify-between py-24">
        <Image
          src="/img/study-group.svg"
          alt="Hero 1"
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
    </main>
  </div>
);

export default Home;
