import React from 'react';
// import Header from './Header';

import logo from '../images/logo.svg';

function App() {
  return (
    <header className="header page__header">

      <a className="header_logo" href="#">
        <img
          src={logo}
          alt="Пиктограмма со ссылкой на главную страницу"
          className="logo header__logo"
        />
      </a>

      <nav className="menu header__menu">

        <ul className="film-nav menu__film">

          <li><a href="https://yandex.ru/pogoda" className="film-nav__link">Регистрация</a></li>
          <li className="film-nav__link"></li>
        </ul>

        <ul className="auth-nav menu__auth">
          <li className="auth-nav__reg"></li>
          <li className="auth-nav__acc auth-nav__acc"></li>
        </ul>

      </nav>

    </header>
  );
}

export default App;
