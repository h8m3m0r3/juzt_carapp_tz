import React from "react";
import { InputRegisterType } from "/@/common";


const InputMileage = ({register, errors}: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Пробег"
        className="item__input"
        {...register("mileage", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.mileage && <p className="item__error">{errors.mileage.message}</p>}
    </div>
  );
};

export { InputMileage };