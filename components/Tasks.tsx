import { FC } from "react";

const Tasks: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col">
        <h1 className="text-6xl text-secondaryColor font-sans">
          Основные задачи
        </h1>
        <div className="flex justify-between gap-48 flex-row">
          <div className="flex gap-12 items-center">
            <span className="text-[200px] text-secondaryColor font-sans font-bold">
              1
            </span>
            <p className="font-sans text-xl text-textColor">
              Создание комфортных условий и повышение качества обслуживания
              клиентов
            </p>
          </div>
          <div className="flex gap-12 items-center">
            <span className="text-[200px] text-secondaryColor font-sans font-bold">
              2
            </span>
            <p className="font-sans text-xl text-textColor">
              Постоянно совершенствовать качество предоставляемых услуг путем
              обучения персонала, закупки нового оборудования и усиленной
              рекламы на рынке
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
