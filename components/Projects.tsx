import { FC } from "react";
import ProjectImage from "./ProjectImage";
import MainButton from "./MainButton";
import arrowBack from "@/icons/arrowBack.svg";
import Image from "next/image";

const images = [
  {
    link: "#",
    title: "Досуговый центр",
    image: "/images/project1.png",
  },
  {
    link: "#",
    title: "Досуговый центр",
    image: "/images/project2.png",
  },
  {
    link: "#",
    title: "Досуговый центр",
    image: "/images/project3.png",
  },
  {
    link: "#",
    title: "Досуговый центр",
    image: "/images/project4.png",
  },
  {
    link: "#",
    title: "Досуговый центр",
    image: "/images/project5.png",
  },
];
const Projects: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col">
        <h1 className="text-secondaryColor text-6xl font-sans pb-16">
          Наши проекты
        </h1>
        <div className="columns-3 gap-12">
          {images.map((item) => (
            <ProjectImage
              key={item.title}
              link={item.link}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex justify-end pt-8">
          <MainButton className=" bg-primaryColor gap-4">
            <p className="font-sans uppercase text-white">все проекты</p>
            <Image src={arrowBack} alt="" className="white" />
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
