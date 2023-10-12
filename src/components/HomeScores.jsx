import Image from "next/image";
import icon200 from "../../public/icon-200.png";
import icon300 from "../../public/icon-300.png";
import icon1000 from "../../public/icon-1000.png";
import leftLineBg from "../../public/left-line.png";
import rightLineBg from "../../public/right-line.png";

const HomeScores = () => {
  return (
    <>
      <Image
        src={leftLineBg}
        alt=""
        className="absolute -top-14 -left-24 md:-top-[30rem] md:-left-60 z-[5]"
      />
      <h3 className="text-3xl leading-snug tracking-wider relative z-20 md:text-4xl md:w-2/6">
        Bergabunglah bersama kami
      </h3>
      <div className="flex justify-center flex-col gap-4 relative z-10 flex-wrap md:flex-row md:justify-between md:mt-8">
        <Image src={icon200} alt="" />
        <Image src={icon300} alt="" />
        <Image src={icon1000} alt="" />
      </div>
      {/* Mobile View */}
      <Image
        src={rightLineBg}
        alt=""
        className="md:hidden absolute -bottom-14 -left-8"
      />
      {/* Desktop View */}
      <Image
        src={rightLineBg}
        alt=""
        className="hidden md:inline-block absolute md:-top-[26rem] md:right-0"
      />
    </>
  );
};

export default HomeScores;
