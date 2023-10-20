import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as auth from '../../utils/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import DebugView from '../SidePopup/DebugView';

function Profile({ setLoggedInFalse }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const [updatingErr, setUpdatingErr] = React.useState(false);

  function handleSignOut() {
    auth.signOut().then(() => {
      setLoggedInFalse();
      window.localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('jwtMovie');
      navigate('/', { replace: true });
    })
      .catch((err) => {
      // props.hanldeInfoTooltipError();
        console.log('Logout error', err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUpdatingErr(true);
  }

  return (
    <main className="page__content">
      <section className="profile page__partition page__partition_grow page__partition_color_black">
        <div className="profile__content">
          <h1 className="page-title profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__info" name="profile-form" disabled autoComplete="off" noValidate>
            <div className="profile__info-row">
              <label className="profile__attribute">Имя</label>
              <input
                id="profile-name"
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Виталий"
                className="profile__input"
                required
                pattern="[\-a-zA-Zа-яёА-ЯЁ ]{2,30}"
                disabled = {!editingProfile}
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
                disabled = {!editingProfile}
                autoComplete="off"
              />
            </div>
            <span className="error profile__error profile__error_type_email">Не так что-то пошло</span>

            {editingProfile
              && <span className={`error profile__save-error profile__error_type_save ${updatingErr ? 'error_active' : ''}`}>
                При обновлении профиля произошла ошибка.
              </span>}
            {editingProfile
              && <button className="page-bttn profile__save-bttn" type="submit" onClick={handleSubmit}>Сохранить</button>}

          </form>

          {!editingProfile
            && <button className="profile__edit-bttn" type="button" onClick={() => { setEditingProfile(true); }} >Редактировать</button>}
          {!editingProfile
            && <button className="link profile__link" type="button" onClick={ handleSignOut } >Выйти из аккаунта</button>}

        </div>
      </section>

      <DebugView varArray={[
        { varName: 'updatingErr', varValue: `${updatingErr}` },
        { varName: 'isloggedIn', varValue: `${window.localStorage.getItem('isLoggedIn')}` },
        { varName: 'currentUser', varValue: `${currentUser.email}` },
        { varName: 'editingProfile', varValue: `${editingProfile}` }]} />
    </main>

  );
}

export default Profile;
Profile.propTypes = {
  setLoggedInFalse: PropTypes.func,
};
