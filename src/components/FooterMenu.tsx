const FooterMenu: React.FC = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-2 lg:flex lg:flex-nowrap">
      <div className="sm:px-0 mb-10 md:pr-2.5 lg:px-8 h-auto">
        <p className="text-indigo-400 mb-2 text-lg">Produto</p>
        <ul className="flex flex-col gap-y-2 text-lg">
          <li className="hover:underline cursor-pointer">Baixar</li>
          <li className="hover:underline cursor-pointer sm:max-">
            Por que usar o Discord?
          </li>
          <li className="hover:underline cursor-pointer">Inspiração</li>
          <li className="hover:underline cursor-pointer">Faculdade</li>
          <li className="hover:underline cursor-pointer">Nitro</li>
          <li className="hover:underline cursor-pointer">Status</li>
        </ul>
      </div>

      <div className="sm:px-0 mb-10 md:pl-6 lg:px-8 h-auto">
        <p className="text-indigo-400 text-lg">Empresa</p>
        <ul className="flex flex-col gap-y-2 text-lg">
          <li className="hover:underline cursor-pointer">Sobre</li>
          <li className="hover:underline cursor-pointer">Empregos</li>
          <li className="hover:underline cursor-pointer">Marca</li>
          <li className="hover:underline cursor-pointer">Sala de imprensa</li>
          <li className="hover:underline cursor-pointer">Loja</li>
        </ul>
      </div>

      <div className="sm:px-0 md:pr-2.5 lg:px-8 h-auto">
        <p className="text-indigo-400 text-lg">Recursos</p>
        <ul className="flex flex-col gap-y-2 text-lg">
          <li className="hover:underline cursor-pointer">Suporte</li>
          <li className="hover:underline cursor-pointer">Segurança</li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <li className="hover:underline cursor-pointer">Comentários</li>
          <li className="hover:underline cursor-pointer">Parceiros</li>
          <li className="hover:underline cursor-pointer">Verificação</li>
          <li className="hover:underline cursor-pointer">Desenvolvedores</li>
          <li className="hover:underline cursor-pointer">StreamKit</li>
          <li className="hover:underline cursor-pointer">Código Aberto</li>
          <li className="hover:underline cursor-pointer">Segurança</li>
          <li className="hover:underline cursor-pointer">Moderation</li>
        </ul>
      </div>

      <div className="sm:px-0 lg:px-8 h-auto">
        <p className="text-indigo-400 text-lg">Política</p>
        <ul className="flex flex-col gap-y-2 text-lg">
          <li className="hover:underline cursor-pointer">Termos</li>
          <li className="hover:underline cursor-pointer">Privacidade</li>
          <li className="hover:underline cursor-pointer">Diretrizes</li>
          <li className="hover:underline cursor-pointer">Reconhecimentos</li>
          <li className="hover:underline cursor-pointer">Licenças</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
