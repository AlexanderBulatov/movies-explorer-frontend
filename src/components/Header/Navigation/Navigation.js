import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import accountImg from '../../../images/account.svg';

function Navigation({ loggedIn, onBurger }) {
  return (
    <>
      {loggedIn
        ? <>
          <nav className="menu header__menu">
            <ul className="menu__film">
              <li><NavLink to="/movies" className={({ isActive }) => `link menu__link ${isActive ? 'menu__link_current' : ''}`}>Фильмы</NavLink></li>
              <li><NavLink to="/saved-movies" className={({ isActive }) => `link menu__link ${isActive ? 'menu__link_current' : ''}`}>Сохраненные</NavLink></li>
            </ul>
          </nav>
          <nav className="authorisation header__authorisation">
            <Link to="/profile" className="profile-bttn navigation__profile-bttn" >Аккаунт
              <img
                src={accountImg}
                alt="Пиктограмма аккаунта"
                // className={`profile-bttn__img ${loggedIn && 'profile-bttn__img_dark'}`} />
                className={`profile-bttn__img ${!(window.location.pathname === '/') && 'profile-bttn__img_dark'}`} />
            </Link>
            <button className="burger-button" onClick={onBurger}>
              <span className="burger-button__line"></span>
            </button>
          </nav>
        </>
        : <>
          <nav className="authorisation header__authorisation">
            <a href="#" className="link navigation__reg" type="button">Регистрация</a>
            <button className="navigation__login" type="button">Войти</button>
          </nav>
        </>}
    </>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onBurger: PropTypes.func,
};

export default Navigation;
