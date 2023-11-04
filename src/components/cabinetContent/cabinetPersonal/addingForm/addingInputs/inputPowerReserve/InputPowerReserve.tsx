import React, { useEffect } from "react";
import { CarPostType, InputRegisterType } from "/@/common";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

type InputPowerReserveType = {
  watch: UseFormWatch<CarPostType>;
  setValue: UseFormSetValue<CarPostType>;
} & InputRegisterType;
const InputPowerReserve = ({
  register,
  errors,
  watch,
  setValue,
}: InputPowerReserveType) => {
  const engine = watch("engine");
  useEffect(() => {
    if (engine !== "Электро") {
      setValue("PowerReserve", null);
    }
  }, [engine]);
  return (
    <div className="form__item">
      <input
        type="text"
        placeholder="Запас хода"
        className="item__input"
        disabled={engine !== "Электро"}
        {...register("PowerReserve", {
          required:engine === "Электро" && "Это поле обязательно для заполнения",

        })}
      />
      {errors.PowerReserve && (
        <p className="item__error">{errors.PowerReserve.message}</p>
      )}
    </div>
  );
};

export { InputPowerReserve };
