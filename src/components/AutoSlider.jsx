import Image from "next/image";
import slide1Image from "../../public/slide1-image.png";
import slide2Image from "../../public/slide2-image.png";
import slide3Image from "../../public/slide3-image.png";
import slide4Image from "../../public/slide4-image.png";
import slide5Image from "../../public/slide5-image.png";
import slide6Image from "../../public/slide6-image.png";
import slide7Image from "../../public/slide7-image.png";
import slide8Image from "../../public/slide8-image.png";

const images = [
  slide1Image,
  slide2Image,
  slide3Image,
  slide4Image,
  slide5Image,
  slide6Image,
  slide7Image,
  slide8Image,
];

const AutoSlider = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4"
        style={{
          width: "calc(250px * 16)",
          animation: "scrollToLeft 30s linear infinite",
        }}
      >
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`Image ${i + 1}`}
            className="w-5/6 h-64 md:h-96 lg:h-[30rem]"
          />
        ))}
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`Image ${i + 1}`}
            className="w-5/6 h-64 md:h-96 lg:h-[30rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
