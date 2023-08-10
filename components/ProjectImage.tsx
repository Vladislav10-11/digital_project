import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import arrowBack from "@/icons/arrowBack.svg";

interface IProjectImage {
  image: string;
  link: string;
  title: string;
}
const ProjectImage: FC<IProjectImage> = ({ image, link, title }) => {
  return (
    <div className="relative w-full">
      <Image src={image} alt="" width={570} height={255} />
      <div className="absolute px-12 inset-0 flex flex-col cursor-pointer items-start justify-center opacity-0 hover:opacity-70 transition duration-300 bg-black">
        <h4 className="font-sans text-5xl text-white font-bold">{title}</h4>

        <Link href={link} className="uppercase text-white font-sans flex gap-6">
          <p>Подробнее</p>
          <Image src={arrowBack} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectImage;
