import React from "react";

import { InputRegisterType } from "/@/common";

const InputDesc = ({ register, errors }: InputRegisterType) => {
  return (
    <div className="form__item desc">
      <textarea
        placeholder="Описание"
        className="item__input desc"
        {...register("desc", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.desc && <p className="item__error">{errors.desc.message}</p>}
    </div>
  );
};

export { InputDesc };

