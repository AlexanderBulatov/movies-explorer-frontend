import React from 'react';
import PropTypes from 'prop-types';

import accountImg from '../../../images/account.svg';

function Navigation({ loggedIn, onBurger }) {
  return (
    <>
      {loggedIn
        ? <>
          <nav className="menu header__menu">
            <ul className="menu__film">
              <li><a href="https://yandex.ru/pogoda" className="link menu__link">Фильмы</a></li>
              <li><a href="https://yandex.ru/pogoda" className="link menu__link">Сохраненные фильмы</a></li>
            </ul>
          </nav>
          <nav className="authorisation header__authorisation">
            <button
            className="profile-bttn authorisation__profile-bttn"
            type="button">
              Аккаунт
              <img
                src={accountImg}
                alt="Пиктограмма аккаунта"
                className={`profile-bttn__img ${loggedIn && 'profile-bttn__img_dark'}`} />
            </button>
            <button className="burger-button" onClick = {onBurger}>
              <span className="burger-button__line"></span>
            </button>
          </nav>
        </>
        : <>
          <nav className="authorisation header__authorisation">
            <a href="#" className="link authorisation__reg" type="button">Регистрация</a>
            <button className="authorisation__login" type="button">Войти</button>
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
