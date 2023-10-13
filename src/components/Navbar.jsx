import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { LuArrowDownRight } from "react-icons/lu";
import icon from "../../public/icon.png";

const Navbar = () => {
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <nav className="flex justify-betweens items-center fixed w-full backdrop-blur-sm z-50 p-5 md:py-4 md:px-12">
      <Link href="/" className="text-xl tracking-wider md:text-3xl md:pl-4">
        <Image src={icon} alt="" width={100} height={100} />
      </Link>

      <div className="flex w-full justify-end items-center gap-1 text-sm font-semibold md:gap-2">
        <Link
          href="/"
          className="bg-transparent font-bold text-white p-2 hover:bg-[#D2FF3A] hover:text-black hover:border-[1px] hover:rounded-md md:px-4"
        >
          Home
        </Link>
        <Link
          href="/tools"
          className="bg-transparent font-bold text-white p-2 hover:bg-[#D2FF3A] hover:text-black hover:border-[1px] hover:rounded-md md:px-4"
        >
          Tools
        </Link>

        <button
          onClick={() => setShowCommunity(!showCommunity)}
          className="flex justify-center items-center gap-1 bg-transparent font-bold text-white p-2 hover:bg-[#D2FF3A] hover:text-black hover:border-[1px] hover:rounded-md md:px-4"
        >
          <p className="flex justify-center items-center">
            Community <MdArrowDropDown className="text-xl" />
          </p>
        </button>

        <div
          className={`absolute bg-slate-900 border-2 w-72 right-[5%] top-16 p-6 rounded-md duration-500 md:right-[3.8%] ${
            showCommunity ? "opacity-100" : "opacity-0 pointer-events-none"
          }}`}
        >
          <h3 className="text-sm text-justify">
            Gabung Komunitas dan Temukan Informasi Seputar Tools AI
          </h3>
          <Link
            href="https://t.me/+D5WFvWvF8EVkMTI1"
            target="_blank"
            rel="noopener"
            className={`mt-4 bg-[#D2FF3A] text-black font-bold p-2 rounded-md flex justify-evenly items-center text-sm duration-500 ${
              showCommunity ? "opacity-100" : "opacity-0 pointer-events-none hidden"
            }`}
          >
            Bergabung ke Komunitas
            <LuArrowDownRight className="text-lg mt-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
