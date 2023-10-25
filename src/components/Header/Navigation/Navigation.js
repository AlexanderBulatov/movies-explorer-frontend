import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import accountImg from '../../../images/account.svg';

function Navigation({ loggedIn, onBurger }) {
  return (
    <div className='navigation header__navigation'>
      {loggedIn
        && <nav className="menu navigation__menu">
          <ul className="menu__film">
            <li><NavLink to="/movies" className={({ isActive }) => `link menu__link ${isActive ? 'menu__link_current' : ''}`}>Фильмы</NavLink></li>
            <li><NavLink to="/saved-movies" className={({ isActive }) => `link menu__link ${isActive ? 'menu__link_current' : ''}`}>Сохранённые фильмы</NavLink></li>
          </ul>
          <button className="burger-button" onClick={onBurger} type='button'>
            <span className="burger-button__line"></span>
          </button>
        </nav>}
      {loggedIn
        && <nav className="navigation__profile">
          <Link to="/profile" className="profile-bttn navigation__profile-bttn" >Аккаунт
            <img
              src={accountImg}
              alt="Пиктограмма аккаунта"
              className={`profile-bttn__img ${!(window.location.pathname === '/') && 'profile-bttn__img_dark'}`} />
          </Link>
        </nav>}
      {!loggedIn
        && <nav className="navigation__authorisation">
          <Link to="/signup" className="link navigation__reg" >Регистрация</Link>
          <Link to="/signin" className="navigation__login" >Войти</Link>
        </nav>}
    </div>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  onBurger: PropTypes.func,
  onLogin: PropTypes.func,
};

export default Navigation;
