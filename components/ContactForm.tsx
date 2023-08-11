import { FC } from "react";
import MainButton from "./MainButton";
import Image from "next/image";
import arrowBack from "@/icons/arrowBack.svg";

const ContactForm: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between gap-12 py-10 items-center">
        <div>
          <h1 className="text-6xl font-sans text-secondaryColor">
            Связаться с нами
          </h1>
          <form action="" className="flex flex-col  py-12 gap-6">
            <input
              type="text"
              placeholder="Имя"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
            />
            <input
              type="phone"
              placeholder="Номер телефона*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
            />
            <input
              type="text"
              placeholder="Интересующий товар/услуга"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
            />
            <textarea
              placeholder="Сообщение*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
            />
            <div className="flex justify-between gap-6 items-center">
              <input type="checkbox" className="w-8 h-8" />
              <p className="font-sans">
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
            <MainButton className="bg-primaryColor">
              <p className="font-sans text-white">Отправить</p>
              <Image src={arrowBack} alt="" />
            </MainButton>
          </form>
        </div>

        <div>
          <Image src={"/images/contact.jpeg"} width={759} height={400} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
