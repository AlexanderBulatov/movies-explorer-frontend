import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
// import DebugView from '../SidePopup/DebugView';
import useFormAndValidation from '../../utils/customHooks/useFormAndValidation';

function Profile({ setLoggedInFalse, setCurrentUser, showErrorAPI }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');
  const SAME_DATA_MSG = 'Данные не были обновлены, т.к. не отличаются от данных текущего пользователя';
  const UPDATE_DATA_MSG = 'Данные успешно обновлены';

  const {
    values, handleChange, errors, isValid, setValues, resetForm,
  } = useFormAndValidation(currentUser);

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
  }, []);

  function handleSignOut() {
    setLoggedInFalse();
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('initialUserFilms');
    window.localStorage.removeItem('filteredUserFilms');
    navigate('/', { replace: true });
    auth.signOut().then(() => {
    })
      .catch((err) => {
        showErrorAPI(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      resetForm();
      setValues({ name: values.name, email: values.email });
      api.updateUserInfo(values.name, values.email)
        .then(() => {
          setCurrentUser({ name: values.name, email: values.email });
          setSubmitMessage(UPDATE_DATA_MSG);
        })
        .catch((err) => {
          const { statusCode = null } = err;
          if (statusCode === 409) {
            setSubmitMessage('Пользователь с таким email уже существует');
            return null;
          }
          return setSubmitMessage('При обновлении профиля произошла ошибка');
        });
    } else setSubmitMessage(SAME_DATA_MSG);
  }
  useEffect(() => {
    if (submitMessage === SAME_DATA_MSG) {
      setSubmitMessage('');
    }
  }, [values]);

  useEffect(() => {
    if (submitMessage !== SAME_DATA_MSG && submitMessage !== '') {
      setTimeout(() => {
        setEditingProfile(false);
      }, 2500);
    }
  }, [submitMessage]);

  useEffect(() => {
    if (!editingProfile) setSubmitMessage('');
  }, [editingProfile]);

  useEffect(() => {
    // setWasSubmit(false);
    // setTimeout(() => {
    //   setEditingProfile(false);
    // }, 2500);
    // }
    // if (submitMessage !== '') { setWasSubmit(true); }
  }, [submitMessage]);

  useEffect(() => {
    setSubmitMessage('');
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [editingProfile]);

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
                onChange={ handleChange}
                value={values.name || ''}
              />
            </div>
            <span className={`error profile__error profile__error_type_name ${!isValid ? 'profile__error_show' : ''}`}>{errors.name}</span>
            <div className="profile__info-row">
              <label className="profile__attribute">E-mail</label>
              <input
                id="profile-email"
                type="email"
                name="email"
                required
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                placeholder="123@123.com"
                className="profile__input"
                disabled = {!editingProfile}
                autoComplete="off"
                onChange={ handleChange}
                value={values.email || ''}
              />
            </div>
            <span className={`error profile__error profile__error_type_name ${!isValid ? 'profile__error_show' : ''}`}>{errors.email}</span>
               <span className={`error profile__save-error ${(submitMessage !== SAME_DATA_MSG && submitMessage !== '') ? 'profile__save-error_show' : ''}`}>
                {'Возврат через 3 секунды...'}
              </span>
               <span className={`error profile__save-error ${(submitMessage !== '') ? 'profile__save-error_show' : ''}`}>
                {`${submitMessage}`}
              </span>
            {editingProfile
              && <button
                className={`page-bttn profile__save-bttn ${!isValid ? 'profile__save-bttn_disabled' : ''}`}
                type="submit"
                onClick={handleSubmit}>Сохранить</button>}
          </form>

          {!editingProfile
            && <button className="profile__edit-bttn" type="button" onClick={() => { setEditingProfile(true); }} >Редактировать</button>}
          {!editingProfile
            && <button className="link profile__link" type="button" onClick={ handleSignOut } >Выйти из аккаунта</button>}

        </div>
      </section>

      {/* <DebugView varArray={[
        { varName: 'submitMessage', varValue: `${submitMessage}` },
        { varName: 'currentUser', varValue: `${currentUser.email}, ${currentUser.name}` },
        { varName: 'inputName', varValue: `${values.name}` },
        { varName: 'inpuEmail', varValue: `${values.email}` },
        { varName: 'editingProfile', varValue: `${editingProfile}` }]} /> */}
    </main>

  );
}

export default Profile;
Profile.propTypes = {
  setLoggedInFalse: PropTypes.func,
  setCurrentUser: PropTypes.func,
  showErrorAPI: PropTypes.func,
};
