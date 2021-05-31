import Image from 'next/image';

const Language: React.FC = () => {
  return (
    <div className="flex cursor-pointer h-4 items-center">
      <Image
        src="/img/brasil.png"
        alt="Bandeira do Brasil"
        width={24}
        height={16}
      />
      <p className="mx-2">Português do Brasil</p>
      <img src="/img/arrow-down.svg" alt="Arrow Down" />
    </div>
  );
};

export default Language;
