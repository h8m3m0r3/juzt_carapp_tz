import React from "react";

import { InputRegisterType } from "/@/common";

const InputCity = ({ register, errors }: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Город"
        className="item__input"
        {...register("city", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.city && <p className="item__error">{errors.city.message}</p>}
    </div>
  );
};

export { InputCity };

