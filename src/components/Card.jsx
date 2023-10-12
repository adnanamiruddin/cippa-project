import Image from "next/image";
import cobaSekarangButton from "../../public/coba-sekarang-btn.png";
import Link from "next/link";

const Card = ({ name, image, desc, link, video, isExpanded, onClick }) => {
  return (
    <a
      id={name}
      onClick={onClick}
      href={`#${name}`}
      className={`w-[40%] ${isExpanded ? "w-[80vw] md:w-[50%]" : "md:w-[23%]"}`}
    >
      <div
        className={`bg-[#19161C] flex flex-col justify-center border-[1px] rounded-2xl shadow-md p-6 duration-700 md:p-10 ${
          isExpanded ? "transform scale-105 my-4 md:scale-95" : "h-52 md:h-80"
        }`}
      >
        {isExpanded ? (
          <iframe
            width="100%"
            height="100%"
            src={`${video}&autoplay=1&mute=1`}
            title={name}
            className="rounded-xl relative z-30 mb-4 md:h-96"
          ></iframe>
        ) : (
          ""
        )}

        <div
          className={`flex ${
            isExpanded ? "items-end gap-2 md:mt-4 md:gap-3" : "flex-col gap-3"
          }`}
        >
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className={`rounded-full object-cover ${
              isExpanded
                ? "w-10 h-10 md:w-16 md:h-16"
                : "w-16 h-16 border-2 md:w-24 md:h-24"
            }`}
          />
          <h2
            className={`font-medium text-start tracking-wider text-xs md:text-xl ${
              isExpanded ? "pb-2" : ""
            }`}
          >
            {name}
          </h2>
        </div>

        <div className="flex flex-col w-full h-full gap-1">
          {/* Mobile View */}
          <p
            className={`md:hidden text-gray-400 ${
              isExpanded
                ? "text-sm text-justify mt-3"
                : "text-xs text-left mt-1"
            }`}
          >
            {isExpanded ? desc : desc.slice(0, 25) + "..."}
          </p>
          {/* Desktop View */}
          <p
            className={`hidden md:inline-block text-gray-400 text-sm ${
              isExpanded ? "text-justify mt-6" : "text-base text-left mt-4 h-16"
            }`}
          >
            {isExpanded ? desc : desc.slice(0, 50) + "..."}
          </p>
          <Link
            href={`${link}`}
            target="_blank"
            rel="noopener"
            className={`self-center mt-4 z-30 md:mt-2 ${
              isExpanded ? "w-full md:w-3/6" : "w-[120%] md:w-full"
            }`}
          >
            <Image src={cobaSekarangButton} alt="" className="w-full" />
          </Link>
        </div>
      </div>
    </a>
  );
};

export default Card;
