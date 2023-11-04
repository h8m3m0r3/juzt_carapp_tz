import React from "react";

interface IBrandInput {
  inputBrandValue: string;
  setIsBrandModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputBrandValue: React.Dispatch<React.SetStateAction<string>>;
  setFilteredBrands: React.Dispatch<React.SetStateAction<string[]>>;
  brands: string[];
}
const BrandInput = ({
  inputBrandValue,
  setIsBrandModalOpen,
  setInputBrandValue,
  setFilteredBrands,
  brands,
}: IBrandInput) => {
  const handleBrandFocus = () => {
    setIsBrandModalOpen(true);
  };
  const handleBrandBlur = () => {
    setIsBrandModalOpen(false);
  };
  const handleInputBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputBrandValue(value);

    if (value === "") {
      setFilteredBrands(brands);
    } else {
      const filtered = brands.filter((brand: string) =>
        brand.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBrands(filtered);
    }
  };
  return (
    <input
      className="item__input"
      placeholder="Марка"
      onFocus={handleBrandFocus}
      onBlur={handleBrandBlur}
      value={inputBrandValue}
      onChange={handleInputBrandChange}
    />
  );
};

export { BrandInput };
