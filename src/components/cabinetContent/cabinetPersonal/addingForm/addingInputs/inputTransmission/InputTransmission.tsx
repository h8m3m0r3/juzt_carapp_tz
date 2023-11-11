;
import arrow from "/@/assets/arrowDown.svg";

import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CarPostType } from "/@/common";

interface InputTransmissionType {
  register: UseFormRegister<CarPostType>;
  errors: FieldErrors<CarPostType>;
  handleTransmissionModalOpen: () => void;
  handleTransmissionModalClose: () => void;
  isTransmissionModalOpen: boolean;
  setValue: UseFormSetValue<CarPostType>;
}
const InputTransmission = ({
  register,
  errors,
  handleTransmissionModalOpen,
  handleTransmissionModalClose,
  isTransmissionModalOpen,
  setValue,
}: InputTransmissionType) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleSelectTransmission = (item: string) => {
    setValue("transmission", item);
  };
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Коробка"
        className="item__input"
        {...register("transmission", {
          required: "Это поле обязательно для заполнения",
        })}
        onKeyDown={handleKeyDown}
        onFocus={handleTransmissionModalOpen}
        onBlur={handleTransmissionModalClose}
      />
      {errors.transmission && <p className="item__error">{errors.transmission.message}</p>}
      <img className="item__img" src={arrow} alt="#" />
      <div className={`transmission__modal ${isTransmissionModalOpen ? "open" : ""}`}>
        <div
          className="transmission__item"
          onClick={() => handleSelectTransmission("АКПП")}
        >
          АКПП
        </div>
        <div
          className="transmission__item"
          onClick={() => handleSelectTransmission("Механика")}
        >
          Механика
        </div>
        <div
          className="transmission__item"
          onClick={() => handleSelectTransmission("Робот")}
        >
          Робот
        </div>
        <div
          className="transmission__item"
          onClick={() => handleSelectTransmission("Вариатор")}
        >
          Вариатор
        </div>
      </div>
    </div>
  );
};

export { InputTransmission };
