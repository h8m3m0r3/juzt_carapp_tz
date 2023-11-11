;
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import arrow from "/@/assets/arrowDown.svg";
import { CarPostType } from "/@/common";

interface InputEngineType {
  register: UseFormRegister<CarPostType>;
  errors: FieldErrors<CarPostType>;
  handleEngineModalOpen: () => void;
  handleEngineModalClose: () => void;
  isEngineModalOpen: boolean;
  setValue: UseFormSetValue<CarPostType>;
}
const InputEngine = ({
  register,
  errors,
  handleEngineModalOpen,
  handleEngineModalClose,
  isEngineModalOpen,
  setValue,
}: InputEngineType) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleSelectEngine = (item: string) => {
    setValue("engine", item);
  };
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Двигатель"
        className="item__input"
        {...register("engine", {
          required: "Это поле обязательно для заполнения",
        })}
        onKeyDown={handleKeyDown}
        onFocus={handleEngineModalOpen}
        onBlur={handleEngineModalClose}
      />
      {errors.engine && <p className="item__error">{errors.engine.message}</p>}
      <img className="item__img" src={arrow} alt="#" />
      <div className={`engine__modal ${isEngineModalOpen ? "open" : ""}`}>
        <div
          className="engine__item"
          onClick={() => handleSelectEngine("Бензин")}
        >
          Бензин
        </div>
        <div
          className="engine__item"
          onClick={() => handleSelectEngine("Дизель")}
        >
          Дизель
        </div>
        <div
          className="engine__item"
          onClick={() => handleSelectEngine("Гибрид")}
        >
          Гибрид
        </div>
        <div
          className="engine__item"
          onClick={() => handleSelectEngine("Электро")}
        >
          Электро
        </div>
      </div>
    </div>
  );
};

export { InputEngine };
