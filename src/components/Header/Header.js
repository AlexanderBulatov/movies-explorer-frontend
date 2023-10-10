import React from 'react';
import logo from '../../images/logo.svg';
import accountImg from '../../images/account.svg';
// import cvFoto from '../../images/foto-profile.jpg';

function Header() {
  return (
    <header className="header page__partition page__partition_color_turquoise">
    <div className="header__content page__content">
      <a className="logo" href="#">
        <img
          src={logo}
          alt="Пиктограмма со ссылкой на главную страницу"
          className="logo__img"
        />
      </a>
      <nav className="menu header__menu">
        <ul className="menu__film">
          <li><a href="https://yandex.ru/pogoda" className="menu__link">Фильмы</a></li>
          <li><a href="https://yandex.ru/pogoda" className="menu__link">Сохраненные фильмы</a></li>
        </ul>
      </nav>
      <nav className="auth header__auth">
        <button className="auth__profile" type="button">Аккаунт
          <img
            src={accountImg}
            alt="Пиктограмма аккаунта"
            className="auth__img"
          />
        </button>
      </nav>
    </div>
  </header>

  /* <header className="header page__partition page__partition_color_turquoise ">
          <div className="header__content page__content">
            <a className="logo" href="#">
              <img
                src={logo}
                alt="Пиктограмма со ссылкой на главную страницу"
                className="header__logo"
              />
            </a>
            <nav className="auth header__auth">
              <a href="#" className="auth__reg" type="button">Регистрация</a>
              <button className="auth__login" type="button">Войти</button>
            </nav>
          </div>
      </header> */

  );
}

export default Header;
