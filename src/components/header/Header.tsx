import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTypeSelector } from "/@/hooks/useTypeSelector";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (link: string) => {
    navigate(link);
  };
  const { role } = useTypeSelector((data) => data.accountInfoReducer);
  return (
    <header className="main__header">
      <p className="header__logo" onClick={() => handleNavigate("/")}>
        CarSell
      </p>
      {role === "auth" ? (
        <div className="header__profile">
          <Link to="/cabinet">Личный кабинет</Link>
        </div>
      ) : (
        <div className="header__profile">
          <Link to="/auth">Авторизация</Link>
        </div>
      )}
    </header>
  );
};

export { Header };
