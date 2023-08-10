import { FC } from "react";
import Image from "next/image";
import arrowBack from "@/icons/arrowBack.svg";

import MainButton from "@/components/MainButton";

const About: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex bg-greyColor justify-between gap-12 my-28 p-8">
        <div className=" columns-2 gap-8 w-1/2">
          <Image
            src={"/images/about1.jpeg"}
            width={270}
            height={265}
            className="w-full"
            alt=""
          />
          <Image
            src={"/images/about2.jpeg"}
            width={270}
            height={345}
            className="w-full"
            alt=""
          />
          <Image
            src={"/images/about3.jpeg"}
            width={270}
            height={140}
            className="w-full"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start items-start w-1/2">
          <h1 className="text-6xl text-secondaryColor font-sans ">
            О компании
          </h1>
          <p className="font-sans text-base py-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <MainButton className="">
            <p className="font-sans uppercase">читать</p>
            <Image src={arrowBack} alt="" />
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default About;
