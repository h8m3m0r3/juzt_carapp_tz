;

import cross from "/@/assets/cross.svg";
import "./ModelModal.scss";
interface IModelModal {
  isModelModalOpen: boolean;
  filteredModels: string[];
  setInputModelValue: React.Dispatch<React.SetStateAction<string>>;
  setIsModelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
}
const ModelModal = ({
  isModelModalOpen,
  filteredModels,
  setInputModelValue,
  setIsModelModalOpen,
  setModel,
}: IModelModal) => {
  const handleAnyModel = () => {
    setInputModelValue("");
    setIsModelModalOpen(false);
    setModel("");
  };
  const handleModelClick = (model: string) => {
    setModel(model);
    setIsModelModalOpen(false);
    setInputModelValue(model);
  };

  return (
    <div className={`model__modal ${isModelModalOpen ? "open" : ""}`}>
      <button className="modal__button" onClick={handleAnyModel}>
        <img src={cross} /> Любая модель
      </button>
      {filteredModels.map((item: string) => {
        return (
          <p
            className="modal__item"
            onClick={() => handleModelClick(item)}
            key={item}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export { ModelModal };
