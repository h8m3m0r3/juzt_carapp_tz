import React from "react";
import { InputRegisterType } from "/@/common";


const InputYear = ({register, errors}: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Год"
        className="item__input"
        {...register("year", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.year && <p className="item__error">{errors.year.message}</p>}
    </div>
  );
};

export { InputYear };<div className="form__item">
        <input type="text" placeholder="Год" className="item__input" />
      </div>