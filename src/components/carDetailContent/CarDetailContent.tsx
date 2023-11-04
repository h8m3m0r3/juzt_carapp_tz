import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { t } from "i18next";

import { CarsInfo } from "/@/services";
import { FavoriteItem, ShareItem } from "./carDetailUI";
import { CarInfoType } from "/@/common";
import { MiniLoader } from "..";

import "./CarDetailContent.scss";

const CarDetailContent = () => {
  const [info, setInfo] = useState<CarInfoType>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  async function searchCarInfo() {
    try {
      if (id) {
        const res = await CarsInfo.getCarInfo(id);
        setInfo(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    searchCarInfo();
  }, [id]);

  const credit = info ? Math.round((info.price / 24) * 0.05) : 0;
  return (
    <>
      {loading ? (
        <MiniLoader />
      ) : (
        <div className="detail__content container">
          <header>
            Продажа {info?.brand ? info.brand : ""}{" "}
            {info?.model ? info.model : ""}, {info?.year ? info.year : ""} год{" "}
            {info?.city ? `в ${info.city}` : ""}
          </header>
          <div className="detail__about">
            <div className="about__left">
              <img
                src={info?.image ? info.image : ""}
                alt="#"
                className="left__img"
              />
              <div className="action__items">
                <ShareItem />
                <FavoriteItem />
              </div>
            </div>
            <div className="about__right">
              <h1 className="right__price">
                {info?.price ? info.price : ""} ₽
              </h1>
              <div
                className="right__credit"
                onClick={() => alert("Данная функция пока что недоступна")}
              >
                В кредит от {credit}₽ в месяц
              </div>
              <div className="right__items">
                <div className="right__item">
                  <div className="item__category">Двигатель</div>
                  {info?.engine ? info.engine : "Не указан"}
                </div>
                <div className="right__item">
                  <div className="item__category">Коробка передач</div>
                  {info?.transmission ? info.transmission : "Не указан"}
                </div>
                <div className="right__item">
                  <div className="item__category">Привод</div>
                  {info?.drive ? info.drive : "Не указан"}
                </div>
                <div className="right__item">
                  <div className="item__category">Цвет</div>
                  {info?.color ? t(`color.${info.color}`) : "Не указан"}
                </div>
                <div className="right__item">
                  <div className="item__category">Пробег</div>
                  {info?.мileage ? info.мileage : "Не указан"} км
                </div>
              </div>
              <div className="right__description">
                <p>
                  <span className="desc__span">Дополнительно:</span>
                  <br /> {info?.desc ? info.desc : "Нет описания"}
                </p>
              </div>
              <div className="right__location">
                <p>
                  <span>Город:</span> {info?.city ? info.city : "Неизвестно"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CarDetailContent };
