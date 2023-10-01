import React from 'react';

import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header page__header">
      <a className="logo header_logo" href="#">
      <img
            src={logo}
            alt="Пиктограмма со ссылкой на главную страницу"
            className="logo header__logo"
          />

      </a>
    </header>
  );
}
