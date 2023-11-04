import React from "react";
import { InputRegisterType } from "/@/common";


const InputPrice = ({register, errors}: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Цена"
        className="item__input"
        {...register("price", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.price && <p className="item__error">{errors.price.message}</p>}
    </div>
  );
};

export { InputPrice };
