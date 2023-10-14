import React from 'react';
import PropTypes from 'prop-types';

import accountImg from '../../images/account.svg';

function Popup({ isSideMenuOpen, onClose }) {
  return (

    <div className={`popup ${isSideMenuOpen && 'popup_opened'}`}>
      <div className="popup__content">
        <div className="popup__close-bttn">
          <button className="close-button" type="button" onClick={onClose}>
            <span className="close-button__line"></span>
          </button>
        </div>

        <nav className="popup__menu">
          <ul className="popup__links">
            <li><a href="https://yandex.ru/pogoda" className="popup__link">Главная</a></li>
            <li><a href="https://yandex.ru/pogoda" className="popup__link">Фильмы</a></li>
            <li><a href="https://yandex.ru/pogoda" className="popup__link menu__link_active">Сохраненные фильмы</a></li>
          </ul>
        </nav>

          <button className="profile-bttn popup__profile-bttn" type="button">Аккаунт
            <img
              src={accountImg}
              alt="Пиктограмма аккаунта"
              // className={`profile-bttn__img ${loggedIn && 'profile-bttn__img_dark'}`} />
              className='profile-bttn__img profile-bttn__img_dark' />
          </button>

      </div>
    </div>
  );
}

export default Popup;
Popup.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
