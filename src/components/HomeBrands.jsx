import Image from "next/image";
import snapchatImage from "../../public/snapchat.png";
import braveImage from "../../public/brave.png";
import circleImage from "../../public/circle.png";
import discordImage from "../../public/discord.png";
import googleImage from "../../public/google.png";
import jumpImage from "../../public/jump.png";
import lollapalizaImage from "../../public/lollapaliza.png";
import magicedenImage from "../../public/magiceden.png";

const images = [
  snapchatImage,
  braveImage,
  circleImage,
  discordImage,
  googleImage,
  jumpImage,
  lollapalizaImage,
  magicedenImage,
];

const HomeBrands = () => {
  return (
    <>
      <h4 className="text-purple-600 font-semibold text-center text-sm md:text-xl">
        MENGUMPULKAN BERBAGAI TOOLS DARI BERBAGAI PERUSAHAAN DI SELURUH DUNIA
      </h4>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-4 md:mt-6 md:gap-10">
        {images.map((image, i) => (
          <Image key={i} src={image} alt="" className="w-16 md:w-1/12" />
        ))}
      </div>
    </>
  );
};

export default HomeBrands;
