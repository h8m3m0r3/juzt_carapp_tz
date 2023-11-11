;

import cross from "/@/assets/cross.svg";
import "./BrandModal.scss";

interface IBrandModal {
  isBrandModalOpen: boolean;
  filteredBrands: string[];
  setInputBrandValue: React.Dispatch<React.SetStateAction<string>>;
  setIsBrandModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>
  setInputModelValue: React.Dispatch<React.SetStateAction<string>>;
}
const BrandModal = ({
  isBrandModalOpen,
  filteredBrands,
  setInputBrandValue,
  setIsBrandModalOpen,
  setBrand,
  setModel,
  setInputModelValue,
}: IBrandModal) => {
  const handleAnyBrand = () => {
    setInputBrandValue("");
    setIsBrandModalOpen(false);
    setBrand("");
    setModel("");
    setInputModelValue("")
  };
  const handleBrandClick = (brand: string) => {
    setBrand(brand);
    setIsBrandModalOpen(false);
    setInputBrandValue(brand);
    setModel("");
    setInputModelValue("");
  };
  return (
    <div className={`brand__modal ${isBrandModalOpen ? "open" : ""}`}>
      <button className="modal__button" onClick={handleAnyBrand}>
        <img src={cross} /> Любая марка
      </button>
      {filteredBrands.map((item: string) => {
        return (
          <p
            className="modal__item"
            onClick={() => handleBrandClick(item)}
            key={item}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export { BrandModal };
