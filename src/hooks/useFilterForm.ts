import React, { useEffect, useState } from "react";
import { CarInfoType, brandModelsMapType } from "../common";
import { CarsInfo } from "../services";

type useFilterFormType = {
  setFilterParams: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
};
const useFilterForm = ({
  setFilterParams,
  setPage,
  setHasMore,
}: useFilterFormType) => {

  const [brands, setBrands] = useState<string[]>([]);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [inputBrandValue, setInputBrandValue] = useState("");
  const [filteredBrands, setFilteredBrands] = useState<string[]>(brands);

  const [models, setModels] = useState<{ [key: string]: string[] }>({});
  const [isModelModalOpen, setIsModelModalOpen] = useState(false);
  const [inputModelValue, setInputModelValue] = useState("");
  const [filteredModels, setFilteredModels] = useState<string[]>([]);

  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  async function getCarsData() {
    const res = await CarsInfo.getCars(null);
    const brandsSet: Set<string> = new Set(res.data.map((item: CarInfoType) => item.brand));
    setBrands([...brandsSet]);
    setFilteredBrands([...brandsSet]);
    const brandModelsMap: brandModelsMapType = {};
    res.data.forEach((item: CarInfoType) => {
      const { brand, model } = item;
      if (!brandModelsMap[brand]) {
        brandModelsMap[brand] = [];
      }
      if (!brandModelsMap[brand].includes(model)) {
        brandModelsMap[brand].push(model);
      }
    });
    setModels(brandModelsMap);
  }

  useEffect(() => {
    getCarsData();
  }, []);
  function getCarsFilteredData() {
    const searchParams = [
      "",
      brand ? `&brand=${brand}` : "",
      model ? `&model=${model}` : "",
      color ? `&color=${color}` : "",
    ]
      .filter((param) => param !== "")
      .join("");
    setFilterParams(searchParams);
    setPage(1);
    setHasMore(true);
  }
  const handleSearch = () => {
    getCarsFilteredData();
  };

  const handleColor = (item: string) => {
    if (color === item) {
      setColor("");
    } else setColor(item);
  };
  useEffect(() => {
    if (models[brand] !== undefined) {
      setFilteredModels(models[brand]);
    }
  }, [brand]);
  return {
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
  };
};

export { useFilterForm };
