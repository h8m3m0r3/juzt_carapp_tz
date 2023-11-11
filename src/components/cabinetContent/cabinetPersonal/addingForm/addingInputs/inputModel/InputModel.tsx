;
import { InputRegisterType } from "/@/common";

const InputModel = ({ register, errors }: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Модель"
        className="item__input"
        {...register("model", {
          required: "Это поле обязательно для заполнения",
        })}
      />
      {errors.model && <p className="item__error">{errors.model.message}</p>}
    </div>
  );
};

export { InputModel };

