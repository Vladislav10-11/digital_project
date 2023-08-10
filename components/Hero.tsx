import Image from "next/image";
import { FC } from "react";
import ArrowButton from "./ArrowButton";
import arrowBack from "@/icons/arrowBack.svg";
import arrowLeft from "@/icons/arrowLeft.svg";
import MainButton from "./MainButton";

const Hero: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between ">
        <div className="flex items-start justify-center flex-col ">
          <h1 className="text-primaryColor text-6xl font-sans font-bold ">
            <span className="text-secondaryColor font-normal">PROJECT</span>{" "}
            HOME
          </h1>
          <div className="flex justify-start gap-6 py-20">
            <ArrowButton>
              <Image src={arrowLeft} alt="" />
            </ArrowButton>
            <ArrowButton>
              <Image src={arrowBack} alt="" />
            </ArrowButton>
          </div>

          <p className="font-sans text-secondaryColor text-2xl">01/02</p>
        </div>
        <div className="relative">
          <Image
            src={"/images/heroImage.jpeg"}
            width={703}
            height={995}
            alt=""
          />
          <MainButton className="absolute bottom-0 left-0 gap-4">
            <p className="font-sans uppercase">взглянуть</p>
            <Image src={arrowBack} alt="" />
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
