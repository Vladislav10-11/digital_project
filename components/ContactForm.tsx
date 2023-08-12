"use client";

import { FC, FormEvent, useState } from "react";
import MainButton from "./MainButton";
import Image from "next/image";
import arrowBack from "@/icons/arrowBack.svg";
import axios from "axios";
interface IContactForm {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

interface IErrorData {
  [name: string]: string;
}

const initialFormData: IContactForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};
const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IContactForm>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<IErrorData>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await axios.post("", formData);
      console.log(res.data);

      setFormData(initialFormData);
      setIsSubmitting(false);
      setErrors({});
    } catch (e) {
      console.error(e);
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    const errors: IErrorData = {};

    if (formData.name.trim() === "") errors.name = "Name is required";
    if (formData.email.trim() === "") errors.email = "Email is required";
    if (formData.message.trim() === "") errors.message = "Message is required";
    if (formData.phone.trim() === "") errors.phone = "Phone is required";
    if (formData.product.trim() === "") errors.product = "Product is required";
    return errors;
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <section>
      <div className="container mx-auto flex justify-between gap-12 py-10 items-center">
        <div>
          <h1 className="text-6xl font-sans text-secondaryColor">
            Связаться с нами
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col  py-12 gap-6">
            <input
              type="text"
              placeholder="Имя"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span>{errors.name}</span>}
            <input
              type="phone"
              placeholder="Номер телефона*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
            <input
              type="email"
              placeholder="E-mail*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <input
              type="text"
              placeholder="Интересующий товар/услуга"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
            />
            {errors.product && <span>{errors.product}</span>}
            <textarea
              placeholder="Сообщение*"
              className="bg-greyColor p-4 text-textColor text-base font-sans"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && <span>{errors.message}</span>}
            <div className="flex justify-between gap-6 items-center">
              <input type="checkbox" className="w-8 h-8" />
              <p className="font-sans">
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
            <MainButton className="bg-primaryColor" type="submit">
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
