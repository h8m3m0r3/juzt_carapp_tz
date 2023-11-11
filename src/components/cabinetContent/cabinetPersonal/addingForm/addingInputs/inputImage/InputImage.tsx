;
import { InputRegisterType } from "/@/common";


const InputImage = ({register, errors}: InputRegisterType) => {
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Ссылка на картинку"
        className="item__input"
        {...register("image", {
          required: "Это поле обязательно для заполнения",
          minLength: {
            value: 10,
            message: "Минимальная длина: 10 символов",
          },
        })}
      />
      {errors.image && <p className="item__error">{errors.image.message}</p>}
    </div>
  );
};

export { InputImage };
