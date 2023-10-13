import React from 'react';

import accountImg from '../../images/account.svg';

function Popup() {
  return (

    <div className="popup popup_type_menu">
      <div className="popup__content">
        <div className="popup__close-bttn">
          <div className="close-button">
            <span className="close-button__line"></span>
          </div>
        </div>

        <nav className="menu popup__menu">
          <ul className="popup__links">
            <li><a href="https://yandex.ru/pogoda" className="popup__link">Главная</a></li>
            <li><a href="https://yandex.ru/pogoda" className="popup__link">Фильмы</a></li>
            <li><a href="https://yandex.ru/pogoda" className="popup__link menu__link_active">Сохраненные фильмы</a></li>
          </ul>
        </nav>
        <div className="auth popup__auth">
          <button className="auth__profile" type="button">Аккаунт
            <img
              src={accountImg}
              alt="Пиктограмма аккаунта"
              className="auth__img auth__img_dark"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
