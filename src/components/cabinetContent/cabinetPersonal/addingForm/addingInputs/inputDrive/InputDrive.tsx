import React from "react";

import arrow from "/@/assets/arrowDown.svg";

import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CarPostType } from "/@/common";
interface InputDriveType {
  register: UseFormRegister<CarPostType>;
  errors: FieldErrors<CarPostType>;
  handleDriveModalOpen: () => void;
  handleDriveModalClose: () => void;
  isDriveModalOpen: boolean;
  setValue: UseFormSetValue<CarPostType>;
}
const InputDrive = ({
  register,
  errors,
  handleDriveModalOpen,
  handleDriveModalClose,
  isDriveModalOpen,
  setValue,
}: InputDriveType) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleSelectDrive = (item: string) => {
    setValue("drive", item)
  };
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Привод"
        className="item__input"
        {...register("drive", {
          required: "Это поле обязательно для заполнения",
        })}
        onKeyDown={handleKeyDown}
        onFocus={handleDriveModalOpen}
        onBlur={handleDriveModalClose}
      />
      {errors.drive && <p className="item__error">{errors.drive.message}</p>}
      <img className="item__img" src={arrow} alt="#" />
      <div className={`drive__modal ${isDriveModalOpen ? "open" : ""}`}>
        <div className="drive__item" onClick={() => handleSelectDrive("Задний")}>
          Задний
        </div>
        <div className="drive__item" onClick={() => handleSelectDrive("Передний")}>
          Передний
        </div>
        <div className="drive__item" onClick={() => handleSelectDrive("4WD")}>
          4WD
        </div>
      </div>
    </div>
  );
};

export { InputDrive };
