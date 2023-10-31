"use client";
import Image from "next/image";
const ImageSwitcher = () => {
  return (
    <>
      <div className="bigScreenImg hidden md:block">
        {/* Renderiza essa imagem em telas maiores */}
        <Image
          src="/pattern-bg-desktop.png"
          alt="Imagem Desktop"
          width={1440}
          height={280}
          layout="responsive"
        />
      </div>

      <div className=" smallScreenImg md:hidden block ">
        {/* Renderiza essa imagem em telas menores */}
        <Image
          src="/pattern-bg-mobile.png"
          alt="Imagem Mobile"
          width={375}
          height={300}
          layout="responsive"
        />
      </div>
    </>
  );
};
export default ImageSwitcher;