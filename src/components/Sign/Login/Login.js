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

          <label className="sign__label">Имя</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="sign__input sign__input_type_name"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="error sign__error sign__error_type_name">Имя должно быть от 2 до 200 симоволов
          </span>
          <label className="sign__label">Пароль</label>
          <input
            id="pass"
            type="password"
            name="pass"
            placeholder="Введите пароль"
            className="sign__input sign__input_type_pass"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="error sign__error sign__error_type_pass
              error_active">Что-то пошло не так...</span>

          <button type="submit" className="page-bttn sign__submit-bttn">Войти</button>
        </form>
        <p className="sign__login">Ещё не зарегистрированы?&ensp;<
          a className="sign__link" href="">Регистрация</a></p>
      </div>
    </section>
  );
}

export default Login;
