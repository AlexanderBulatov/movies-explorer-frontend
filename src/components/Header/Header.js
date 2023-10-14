import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
// import Authorisation from './Authorisation/Authorisation';

import logo from '../../images/logo.svg';
// import cvFoto from '../../images/foto-profile.jpg';

function Header({ loggedIn }) {
  return (
    <header className={`header page__partition page__partition_color_${loggedIn ? 'black' : 'turquoise'}`}>
      <div className="header__content page__content">
        <a className="logo" href="#">
          <img
            src={logo}
            alt="Пиктограмма со ссылкой на главную страницу"
            className="logo__img"
          />
        </a>
        <Navigation loggedIn={loggedIn} />
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
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
