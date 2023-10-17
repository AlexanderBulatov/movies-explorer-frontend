import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Profile({ onSignOut }) {
  const [editingProfile, setEditingProfile] = React.useState(false);
  return (
    <main>
      <section className="profile page__partition page__partition_grow page__partition_color_black">
        <div className="profile__content">
          <h1 className="page-title profile__title">Привет, Виталий!</h1>
          <form className="profile__info" name="profile-form">
            <div className="profile__info-row">
              <label className="profile__attribute">Имя</label>
              <input
                id="profile-name"
                type="text"
                name="name"
                placeholder="Виталий"
                className="profile__input"
                required
                pattern="[\-a-zA-Zа-яёА-ЯЁ ]{2,30}"
              />
            </div>
            <span className="error profile__error profile__error_type_name">Что-то пошло не так</span>
            <div className="profile__info-row">
              <label className="profile__attribute">E-mail</label>
              <input
                id="profile-email"
                type="text"
                name="pass"
                required
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                placeholder="123@123.com"
                className="profile__input"
              />
            </div>
            <span className="error profile__error profile__error_type_email">Не так что-то пошло</span>

            {editingProfile
              && <span className="error profile__save-error profile__error_type_save error_active">При обновлении профиля произошла ошибка. </span>}
            {editingProfile
              && <button className="page-bttn profile__save-bttn" type="submit" >Сохранить</button>}

          </form>

          {!editingProfile
            && <button className="profile__edit-bttn" type="button" onClick={() => { setEditingProfile(true); }} >Редактировать</button>}
          {!editingProfile
            && <Link to="/" className="link profile__link" onClick={onSignOut} >Выйти из аккаунта</Link>}

        </div>
      </section>
    </main>
  );
}

export default Profile;
Profile.propTypes = {
  onSignOut: PropTypes.func,
};
