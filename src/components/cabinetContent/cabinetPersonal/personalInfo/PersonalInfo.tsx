import React from "react";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "/@/hooks/useTypeSelector";
import {
  initialState,
  setAuth,
  setUserInfo,
} from "/@/store/reducers/accountInfoReducer";

import "./PersonalInfo.scss";
const PersonalInfo = () => {
  const { firstName, lastName, phoneNumber, email } = useTypeSelector(
    (data) => data.accountInfoReducer.user
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAuth(initialState.role));
    dispatch(setUserInfo(initialState.user));
  };
  return (
    <div className="personal__items">
      <div className="personal__item">
        <div className="item__category">Имя</div>
        {firstName}
      </div>
      <div className="personal__item">
        <div className="item__category">Фамилия</div>
        {lastName}
      </div>
      <div className="personal__item">
        <div className="item__category">Телефон</div>
        {phoneNumber}
      </div>
      <div className="personal__item">
        <div className="item__category">Почта</div>
        {email}
      </div>
      <button onClick={handleLogout}>Выйти из аккаунта</button>
    </div>
  );
};

export { PersonalInfo };
