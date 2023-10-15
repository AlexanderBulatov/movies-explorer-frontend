import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import accountImg from '../../images/account.svg';

function SidePopup({ isSideMenuOpen, onClose }) {
  const menuLinkClassName = ({ isActive }) => `side-popup__link ${isActive ? 'side-popup__link_current' : ''}`;
  return (

    <div className={`side-popup ${isSideMenuOpen && 'side-popup_opened'}`}>
      <div className="side-popup__content">
        <div className="side-popup__close-bttn">
          <button className="close-button" type="button" onClick={onClose}>
            <span className="close-button__line"></span>
          </button>
        </div>

        <nav className="side-popup__menu">
          <ul className="side-popup__links">
            <li><NavLink to="/" className={menuLinkClassName}>Главная</NavLink></li>
            <li><NavLink to="/movies" className={menuLinkClassName}>Фильмы</NavLink></li>
            <li><NavLink to="/saved-movies" className={menuLinkClassName}>Сохраненные фильмы</NavLink></li>
          </ul>
        </nav>

        <Link to="/profile" className="profile-bttn side-popup__profile-bttn" >Аккаунт
          <img
            src={accountImg}
            alt="Пиктограмма аккаунта"
            className='profile-bttn__img profile-bttn__img_dark' />
        </Link>
      </div>
    </div>
  );
}

export default SidePopup;
SidePopup.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
