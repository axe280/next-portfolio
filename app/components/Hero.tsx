import Link from "next/link";
import { BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import HeroDecor from "./HeroDecor";

export default function Hero() {
  return (
    <div className="c-wrapper bg-light md:h-screen flex flex-col min-w-px overflow-hidden relative">
      <div className="absolute left-0 right-0 translate-x-1/2 md:translate-x-1/3 xl:translate-0 top-header-height -mt-6 md:mt-0 md:top-0 bottom-0 z-0 md:z-10">
        <HeroDecor theme="light" />
      </div>

      <div
        className="c-container min-h-[80vh] md:h-full gap-7 pt-header-height pb-10 2xl:pb-20 flex flex-col md:pl-16 lg:pl-26 relative
        lg:grid-cols-[1fr_30%] lg:grid lg:gap-10 2xl:gap-20
      "
      >
        {/* Main Scene */}
        <div className="flex flex-col grow gap-6 lg:gap-10">
          {/* Illustration */}

          <div className="flex justify-center items-start grow">
            <div className="overflow-hidden relative px-4 md:px-0 md:w-full h-full">
              <img
                src="/me5.jpeg"
                width="507"
                height="508"
                alt="Oleksii Zibariev"
                className="w-full rounded-full md:rounded-none md:absolute md:h-full md:inset-0 md:object-contain"
              />

              <img
                src="/me6.jpeg"
                width="507"
                height="508"
                alt="Oleksii Zibariev"
                className="hidden md:block image-reveal w-full rounded-full md:rounded-none md:absolute md:h-full md:inset-0 md:object-contain"
              />
            </div>
          </div>

          <div className="flex mt-auto flex-col gap-2 lg:gap-3 2xl:gap-4 text-center justify-center">
            <strong className="text-3xl lg:text-4xl 2xl:text-5xl">
              Oleksii Zibariev
            </strong>
            <span>{"// Frontend Developer //"}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 md:absolute z-30 md:left-0 md:top-[50%] md:-translate-y-1/2 md:mt-[-6%] md:h-full md:flex-col-reverse md:max-h-80 md:gap-8">
          <div className="uppercase text-nowrap  md:relative md:w-full">
            <div className="text-xs md:h-full md:w-full md:absolute md:left-0 md:top-0 md:-rotate-90 md:flex md:items-center md:justify-end md:origin-center md:ml-0.5 md:mt-2">
              WRITE ME
            </div>
          </div>
          <div className="flex items-center gap-4 text-2xl md:flex-col md:justify-center">
            <Link href={"/"} className="hover:text-orange-500">
              <BiLogoTelegram />
            </Link>
            <Link
              href={"/"}
              className="relative -top-px left-px hover:text-blue-500"
            >
              <BiLogoLinkedin />
            </Link>
            <Link
              href={"mailto:axeworkmail@gmail.com"}
              className="hover:text-red-500"
            >
              <MdAlternateEmail />
            </Link>
            <Link
              href={"/"}
              className="relative top-0.5 md:left-0.5 hover:text-purple-500"
            >
              <SiUpwork />
            </Link>
          </div>
          <div className="grow h-0.5 w-full bg-gray-300 md:h-full md:w-0.5"></div>
        </div>

        {/* Aside Info */}
        {/* <div className="md:mt-auto md:mb-[75%] 2xl:mb-[100%] max-w-70"> */}
        <div className="md:mt-auto max-w-70">
          <p>
            <span className="bg-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque
              corporis accusantium, non quam tempore velit mollitia numquam ea
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
