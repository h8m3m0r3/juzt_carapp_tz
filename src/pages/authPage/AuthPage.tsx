import React from "react";

import { useAuth } from "/@/hooks";

import "./AuthPage.scss";
const AuthPage = () => {
  const { register, handleSubmit, onSubmit } = useAuth();
  return (
    <div className="cabinet__auth">
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <header>Авторизация</header>
        <p>Почта</p>
        <input
          type="text"
          required
          {...register("email", {
            required: "Это поле обязательно для заполнения",
          })}
        />
        <p>Пароль</p>
        <input
          type="password"
          required
          {...register("password", {
            required: "Это поле обязательно для заполнения",
          })}
        />
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export { AuthPage };
