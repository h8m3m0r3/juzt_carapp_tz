;

import { InputRegisterType } from "/@/common";

const InputBrand = ({register, errors}: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Марка"
        className="item__input"
        {...register("brand", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.brand && <p className="item__error">{errors.brand.message}</p>}
    </div>
  );
};

export { InputBrand };
