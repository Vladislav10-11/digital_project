import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import footerIcon from "@/icons/logo.svg";

interface Link {
  name: string;
  link: string;
}

interface Links {
  title: string;
  links: Link[];
}

const links: Links[] = [
  {
    title: "Resources",
    links: [
      {
        name: "Download",
        link: "/",
      },
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Guide Book",
        link: "/",
      },
      {
        name: "App Directory",
        link: "/",
      },
    ],
  },
  {
    title: "Travellers",
    links: [
      {
        name: "Why Travellers",
        link: "/",
      },
      {
        name: "Enterprice Customer",
        link: "/",
      },
      {
        name: "Customer Stories",
        link: "/",
      },
      {
        name: "Instagram post",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Instagram post",
        link: "/",
      },
      {
        name: "About Locato",
        link: "/",
      },

      {
        name: "Success",
        link: "/",
      },
      {
        name: "Information",
        link: "/",
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-primaryColor">
      <div className="container mx-auto flex justify-between py-20">
        <div className="flex flex-col justify-between">
          <h3 className="font-sans text-white text-lg uppercase">
            Digital project
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-28">
          {links.map((section, index) => (
            <div key={index} className="flex flex-col ">
              <h4 className="text-lg font-sans text-white">{section.title}</h4>
              <ul>
                {section.links.map((link, linkindex) => (
                  <li key={linkindex}>
                    <Link
                      href={link.link}
                      className="text-sm text-white font-sans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
