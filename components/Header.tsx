import { FC } from "react";
import logo from "@/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

interface Links {
  title: string;
  link: string;
}

const links: Links[] = [
  { title: "ГЛАВНАЯ", link: "#" },
  { title: "ГАЛЕРЕЯ", link: "#" },
  { title: "ПРОЕКТЫ", link: "#" },
  { title: "СЕРТИФИКАТЫ", link: "#" },
  { title: "КОНТАКТЫ", link: "#" },
];

const Header: FC = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-11">
        <div>
          <Image src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex gap-14 font-sans text-xs">
            {links.map((item) => (
              <li
                className="hover:underline underline-offset-4"
                key={item.title}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
