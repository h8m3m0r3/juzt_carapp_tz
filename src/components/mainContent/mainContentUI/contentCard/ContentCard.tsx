;

import { CarInfoType } from "/@/common";

import "./ContentCard.scss";
interface IContentCard {
  cardItem: CarInfoType;
  handleNavigate: (item: string) => void;
}
const ContentCard = ({ cardItem, handleNavigate }: IContentCard) => {
  return (
    <div
      className="card"
      onClick={() => handleNavigate(`/details/${cardItem.id}`)}
    >
      <div
        className="card__img"
        style={{
          backgroundImage: `url(${cardItem.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="card__info">
        <p className="info__main">{`${cardItem.brand} ${cardItem.model}, ${cardItem.year}`}</p>
        <p className="info__dop">{`${cardItem.engine}, ${cardItem.transmission}, ${cardItem.drive}, ${cardItem.mileage} км`}</p>
      </div>
      <div className="card__price">
        <p>{`${cardItem.price} ₽`}</p>
      </div>
    </div>
  );
};

export { ContentCard };
