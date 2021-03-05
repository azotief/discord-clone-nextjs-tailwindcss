import Language from "./Language";
import SocialMedia from "./SocialMedia";
import FooterMenu from "./FooterMenu";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pb-8 px-6">
      <div className="max-w-6xl mx-auto flex justify-between pt-20 pb-8 border-b-2 border-indigo-400 flex-col md:flex-row">
        <div className="mb-14 w-48 flex flex-col gap-y-4">
          <h2 className="text-3xl w-full whitespace-nowrap md:whitespace-normal font-black text-indigo-400">
            Seu lugar para conversar
          </h2>
          
          <Language />
          <SocialMedia />
        </div>

        <FooterMenu />
      </div>

      <FooterBottom />
    </footer>
  );
}
