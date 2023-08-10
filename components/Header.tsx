import { FC } from "react";
import logo from "@/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-11">
        <div>
          <Image src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex gap-14 font-sans text-xs">
            <li>
              <Link href={"#"}>ГЛАВНАЯ</Link>
            </li>
            <li>
              <Link href={"#"}>ГАЛЕРЕЯ</Link>
            </li>
            <li>
              <Link href={"#"}>ПРОЕКТЫ</Link>
            </li>
            <li>
              <Link href={"#"}>СЕРТИФИКАТЫ</Link>
            </li>
            <li>
              <Link href={"#"}>КОНТАКТЫ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
