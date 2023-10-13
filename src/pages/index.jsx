import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import topLeftImage from "../../public/top-left.png";
import heroImage from "../../public/hero.png";
import heroBtnImage from "../../public/hero-btn.png";
import AutoSlider from "@/components/AutoSlider";
import Footer from "@/components/Footer";
import HomeBrands from "@/components/HomeBrands";
import HomeCards from "@/components/HomeCards";
import HomeScores from "@/components/HomeScores";
import Navbar from "@/components/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import { useAnimation, useInView } from "framer-motion";
import MotionDiv from "@/components/MotionDiv";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <Image src={topLeftImage} alt="" className="absolute top-0 left-0" />
      <Navbar />

      <div className="px-5 pt-20 flex justify-between items-center flex-col gap-10 md:flex-row md:pt-24 md:px-16 2xl:px-48">
        <MotionDiv x={-100} optionalStyling={"md:w-3/6 z-10 2xl:w-2/6"}>
          <h2 className="text-4xl md:leading-snug md:text-5xl">
            Temukan dan Jelajahi Berbagai Tools AI
          </h2>
        </MotionDiv>

        <MotionDiv x={100} delay={0.5} optionalStyling={"md:w-2/6"}>
          <div className="w-full">
            <p className="text-3xl">🔥😍👍</p>
            <p className="text-justify mt-6 text-sm leading-loose">
              Selamat datang di platform terpadu untuk semua kebutuhan AI Anda.
              Temukan berbagai alat cerdas dalam satu tempat dan sesuaikan
              pilihan Anda dengan filter yang mudah.
            </p>
          </div>
        </MotionDiv>
      </div>

      <div className="px-5 mt-12 flex flex-col justify-center items-center gap-8 md:mt-28 md:flex-row md:gap-0 md:px-16">
        <MotionDiv x={-100} delay={0.85}>
          <Image src={heroImage} alt="" />
        </MotionDiv>
        {/* Mobile View */}
        <MotionDiv y={-100} delay={1} optionalStyling={"md:hidden"}>
          <Link
            href="/tools"
            className="bg-lime-400 py-2 text-black font-bold rounded-md flex justify-center items-center gap-1 text-xl w-full"
          >
            Cari Tools AI <FiArrowUpRight className="mt-0.5" />
          </Link>
        </MotionDiv>
        {/* Desktop View */}
        <MotionDiv
          x={100}
          delay={0.85}
          optionalStyling={"hidden md:inline-block w-[57%]"}
        >
          <Link href="/tools">
            <Image src={heroBtnImage} alt="" />
          </Link>
        </MotionDiv>
      </div>

      <MotionDiv x={-100}>
        <div className="px-5 mt-14 md:mt-28">
          <HomeBrands />
        </div>
      </MotionDiv>

      <div className="px-5 mt-14 md:mt-28 md:px-32 relative z-10">
        <HomeCards />
      </div>

      <div className="px-12 mt-24 p-4 relative md:mt-72 md:px-16">
        <HomeScores />
      </div>

      <div className="px-1 mt-14 pb-24 md:mt-32 md:px-0 relative">
        <MotionDiv y={-100}>
          <h3 className="px-5 text-center text-3xl mb-6 font-semibold md:px-16 md:text-4xl md:mb-8">
            &quot;Menyusuri Seni dalam Tools AI&quot;
          </h3>
        </MotionDiv>
        <AutoSlider />
      </div>

      <footer className="w-full left-0">
        <Footer />
      </footer>
    </div>
  );
}
