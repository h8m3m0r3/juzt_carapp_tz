import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { CarPostType } from "/@/common";
import { CarsInfo } from "/@/services";
import { useModalCreate } from "/@/hooks";

import "./AddingForm.scss";
import {
  InputImage,
  InputBrand,
  InputModel,
  InputColor,
  InputPrice,
  InputDrive,
  InputYear,
  InputMileage,
  InputEngine,
  InputTransmission,
  InputPowerReserve,
  InputCity,
  InputDesc,
} from "./addingInputs";

const AddingForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CarPostType>({
    defaultValues: {
      city: "",
      desc: "",
      year: null,
      brand: "",
      color: "",
      drive: "",
      image: "",
      model: "",
      price: null,
      engine: "",
      mileage: null,
      PowerReserve: null,
      transmission: "",
    },
  });

  const {
    isColorModalOpen,
    isDriveModalOpen,
    isTransmissionModalOpen,
    isEngineModalOpen,
    handleColorModalOpen,
    handleColorModalClose,
    handleDriveModalOpen,
    handleDriveModalClose,
    handleEngineModalOpen,
    handleEngineModalClose,
    handleTransmissionModalOpen,
    handleTransmissionModalClose,
  } = useModalCreate();

  async function postCar(data: CarPostType) {
    await CarsInfo.postCar(data);
  }
  const onSubmit: SubmitHandler<CarPostType> = (data) => {
    postCar(data);
    reset();
  };
  const handleOpenForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="cabinet__adding">
      <button className="adding__button" onClick={handleOpenForm}>{`${
        isFormOpen ? "Закрыть форму" : "Добавить новое объявление"
      }`}</button>
      <form
        className={`adding__form ${isFormOpen ? "open" : ""}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputImage register={register} errors={errors} />
        <InputBrand register={register} errors={errors} />
        <InputModel register={register} errors={errors} />
        <InputColor
          register={register}
          errors={errors}
          handleColorModalOpen={handleColorModalOpen}
          handleColorModalClose={handleColorModalClose}
          isColorModalOpen={isColorModalOpen}
          setValue={setValue}
          watch={watch}
        />
        <InputPrice register={register} errors={errors} />
        <InputDrive
          register={register}
          errors={errors}
          handleDriveModalOpen={handleDriveModalOpen}
          handleDriveModalClose={handleDriveModalClose}
          isDriveModalOpen={isDriveModalOpen}
          setValue={setValue}
        />
        <InputYear register={register} errors={errors} />
        <InputMileage register={register} errors={errors} />
        <InputEngine
          register={register}
          errors={errors}
          handleEngineModalOpen={handleEngineModalOpen}
          handleEngineModalClose={handleEngineModalClose}
          isEngineModalOpen={isEngineModalOpen}
          setValue={setValue}
        />
        <InputTransmission
          register={register}
          errors={errors}
          handleTransmissionModalOpen={handleTransmissionModalOpen}
          handleTransmissionModalClose={handleTransmissionModalClose}
          isTransmissionModalOpen={isTransmissionModalOpen}
          setValue={setValue}
        />
        <InputPowerReserve
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
        <InputCity register={register} errors={errors} />
        <InputDesc register={register} errors={errors} />
        <button className="form__button" type="submit">
          Разместить объявление
        </button>
      </form>
    </div>
  );
};

export { AddingForm };
