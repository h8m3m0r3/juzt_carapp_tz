import React, { useEffect, useState } from "react";

import { CarPostType, InputRegisterType } from "/@/common";

import arrow from "/@/assets/arrowDown.svg";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { dataColor } from "/@/utils";
import { useTranslation } from "react-i18next";
interface InputColorType {
  register: UseFormRegister<CarPostType>;
  errors: FieldErrors<CarPostType>;
  setValue: UseFormSetValue<CarPostType>;
  watch: UseFormWatch<CarPostType>;
  handleColorModalOpen: () => void;
  handleColorModalClose: () => void;
  isColorModalOpen: boolean;
}
const InputColor = ({
  register,
  errors,
  handleColorModalOpen,
  handleColorModalClose,
  isColorModalOpen,
  setValue,
  watch,
}: InputColorType) => {
  const color = watch("color");
  const [colorT, setColorT] = useState(color);
  const { t } = useTranslation();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleSelectColor = (item: string) => {
    setValue("color", item);
  };
  useEffect(() => {
    if (color?.length > 0 && color) {
        setColorT(t(`color.${color}`))
    } else {
        setColorT("")
    }
    
  }, [color])
  
  return (
    
    <div className="form__item">
      <input
        type="text"
        placeholder="Цвет"
        className="item__input"
        {...register("color", {
          required: "Это поле обязательно для заполнения",
        })}
        onFocus={handleColorModalOpen}
        onBlur={handleColorModalClose}
        onKeyDown={handleKeyDown}
        value={colorT}
      />
      {errors.color && <p className="item__error">{errors.color.message}</p>}
      <img className="item__img" src={arrow} alt="#" />
      <div className={`color__modal ${isColorModalOpen ? "open" : ""}`}>
        {dataColor.map((item) => {
          return (
            <div
              className="color__item"
              onClick={() => handleSelectColor(item.color)}
              key={item.color}
            >
              <div className={`item__circle ${item.color}`}></div>
              <p>{t(`color.${item.color}`)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { InputColor };
