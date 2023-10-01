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

      <div className="menu header__menu">
        <nav>
          <ul className="film-nav menu__film">
            <li><a href="https://yandex.ru/pogoda" className="film-nav__link">Фильмы</a></li>
            <li><a href="https://yandex.ru/pogoda" className="film-nav__link">Сохраненные фильмы</a></li>
          </ul>
        </nav>

        <nav className="auth-nav menu__auth">
          <a className="auth-nav__reg">Регистрация</a>
          <button className="auth-nav__acc auth-nav__acc" type="button"></button>
        </nav>

      </div>

    </header>
  );
}

export default App;
