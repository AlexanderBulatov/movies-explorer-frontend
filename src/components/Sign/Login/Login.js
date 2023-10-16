import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

function Login() {
  return (
    <section className="sign page__partition page__partition_grow page__partition_color_black">
      <div className="page__sign">
        <Link to="/" className="logo sign__logo" >
          <img
            src={logo}
            alt="Пиктограмма со ссылкой на главную страницу"
            className="logo__img"
          />
        </Link>
        <h2 className="page-title sign__title">Рады видеть!</h2>
        <form className="sign__form" name="" >

          <label className="sign__label">E-mail</label>
          <input
            id="email-login"
            type="email"
            name="email"
            placeholder="Ваш Email"
            className="sign__input sign__input_type_email"
            required
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
          />
          <span className="error sign__error sign__error_type_name">Имя должно быть от 2 до 200 симоволов
          </span>
          <label className="sign__label">Пароль</label>
          <input
            id="pass-login"
            type="password"
            name="pass"
            placeholder="Введите пароль"
            className="sign__input sign__input_type_pass"
            required
          />
          <span className="error sign__error sign__error_type_pass
              error_active">Что-то пошло не так...</span>

          <button type="submit" className="page-bttn sign__submit-bttn">Войти</button>
        </form>
        <p className="sign__login">Ещё не зарегистрированы?&ensp;
          <Link to="/signup" className="link sign__link" >Регистрация</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
