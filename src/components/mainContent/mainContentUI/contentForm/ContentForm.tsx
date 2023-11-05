import React from "react";

import "./ContentForm.scss";
import {
  BrandInput,
  BrandModal,
  ModelInput,
  ModelModal,
} from "./contentFormUI";
import { dataColor } from "/@/utils";
import { useFilterForm } from "/@/hooks";

import arrow from "/@/assets/arrowDown.svg";

interface IContentForm {
  setFilterParams: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentForm = ({
  setFilterParams,
  setPage,
  setHasMore,
}: IContentForm) => {
  const {
    brand,
    brands,
    models,
    color,
    inputBrandValue,
    inputModelValue,
    isBrandModalOpen,
    isModelModalOpen,
    filteredBrands,
    filteredModels,
    setBrand,
    setModel,
    setIsBrandModalOpen,
    setIsModelModalOpen,
    setInputBrandValue,
    setInputModelValue,
    setFilteredBrands,
    setFilteredModels,
    handleColor,
    handleSearch,
  } = useFilterForm({ setFilterParams, setPage, setHasMore });
  return (
    <div className="content__form">
      <div className="form__items">
        <div className="form__item">
          <BrandInput
            inputBrandValue={inputBrandValue}
            setIsBrandModalOpen={setIsBrandModalOpen}
            setInputBrandValue={setInputBrandValue}
            setFilteredBrands={setFilteredBrands}
            brands={brands}
          />
          <img className="item__img" src={arrow} alt="#" />
        </div>
        <div className="form__item">
          <ModelInput
            setIsModelModalOpen={setIsModelModalOpen}
            setInputModelValue={setInputModelValue}
            setFilteredModels={setFilteredModels}
            models={models}
            inputBrandValue={inputBrandValue}
            inputModelValue={inputModelValue}
            brand={brand}
          />
          <img className="item__img" src={arrow} alt="#" />
        </div>
        <ul className="form__colors">
          {dataColor.map((item) => {
            return (
              <li
                key={item.color}
                className={`form__color ${item.color} ${
                  item.color === color ? "active" : ""
                }`}
                onClick={() => handleColor(item.color)}
              ></li>
            );
          })}
        </ul>
        <button className="filter__button" onClick={handleSearch}>
          Фильтровать
        </button>
      </div>
      <BrandModal
        isBrandModalOpen={isBrandModalOpen}
        filteredBrands={filteredBrands}
        setInputBrandValue={setInputBrandValue}
        setIsBrandModalOpen={setIsBrandModalOpen}
        setBrand={setBrand}
        setModel={setModel}
        setInputModelValue={setInputModelValue}
      />
      <ModelModal
        isModelModalOpen={isModelModalOpen}
        filteredModels={filteredModels}
        setInputModelValue={setInputModelValue}
        setIsModelModalOpen={setIsModelModalOpen}
        setModel={setModel}
      />
    </div>
  );
};

export { ContentForm };
