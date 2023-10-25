import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
// import Authorisation from './Authorisation/Authorisation';

import logo from '../../images/logo.svg';
// import cvFoto from '../../images/foto-profile.jpg';

function Header({
  loggedIn, onBurger, isSideMenuOpen, isBlack, onLogin,
}) {
  return (
    <header className={`header page__partition page__partition_color_${isBlack ? 'black' : 'turquoise'}`}>
      <div className="header__content">
        <Link to="/" className="logo" >
          <img
            src={logo}
            alt="Пиктограмма со ссылкой на главную страницу"
            className="logo__img"
          />
        </Link>

        <Navigation
          loggedIn={loggedIn}
          onBurger={onBurger}
          isSideMenuOpen={isSideMenuOpen}
          onLogin={onLogin} />
      </div>
    </header>
  );
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
  onBurger: PropTypes.func,
  onLogin: PropTypes.func,
  isSideMenuOpen: PropTypes.bool,
  isBlack: PropTypes.bool,
};

export default Header;
