;

interface IModelInput {
  setIsModelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputModelValue: React.Dispatch<React.SetStateAction<string>>;
  setFilteredModels: React.Dispatch<React.SetStateAction<string[]>>;
  models: {
    [key: string]: string[];
  };
  inputBrandValue: string;
  inputModelValue: string;
  brand: string;
}
const ModelInput = ({
  setIsModelModalOpen,
  setInputModelValue,
  setFilteredModels,
  models,
  inputBrandValue,
  inputModelValue,
  brand,
}: IModelInput) => {
  const handleModelFocus = () => {
    setIsModelModalOpen(true);
  };
  const handleModelBlur = () => {
    setIsModelModalOpen(false);
  };
  const handleInputModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputModelValue(value);

    if (value === "") {
      setFilteredModels(models[brand]);
    } else {
      const filtered = models[brand].filter((brand: string) =>
        models[brand].map((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredModels(filtered);
    }
  };
  return (
    <input
      className="item__input"
      placeholder="Модель"
      disabled={inputBrandValue ? false : true}
      onFocus={handleModelFocus}
      onBlur={handleModelBlur}
      value={inputModelValue}
      onChange={handleInputModelChange}
    />
  );
};

export { ModelInput };
