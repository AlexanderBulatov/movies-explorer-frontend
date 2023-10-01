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
      <nav className="header__menu">
        
      </nav>

    </header>
  );
}

export default App;
