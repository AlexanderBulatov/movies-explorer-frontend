import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
// import DebugView from '../SidePopup/DebugView';
import useFormAndValidation from '../../utils/customHooks/useFormAndValidation';

function Profile({ setLoggedInFalse, setCurrentUser }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');
  // const [wasSubmit, setWasSubmit] = React.useState(false);

  const {
    values, handleChange, errors, isValid, setValues, resetForm,
  } = useFormAndValidation(currentUser);

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
  }, []);

  function handleSignOut() {
    auth.signOut().then(() => {
      setLoggedInFalse();
      window.localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('jwtMovie');
      navigate('/', { replace: true });
    })
      .catch((err) => {
        console.log('Logout error', err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    setValues({ name: values.name, email: values.email });
    api.updateUserInfo(values.name, values.email)
      .then(() => {
        setCurrentUser({ name: values.name, email: values.email });
        setSubmitMessage('Данные успешно обновлены');
        // setTimeout(() => {
        //   setEditingProfile(false);
        // }, 10000);
      })
      .catch((err) => {
        setSubmitMessage(err.message);
      });
  }

  useEffect(() => {
    // if (submitMessage === 'Данные успешно обновлены') {
    setTimeout(() => {
      setEditingProfile(false);
    }, 2500);
    // }
    // if (submitMessage !== '') { setWasSubmit(true); }
  }, [submitMessage]);

  // useEffect(() => {
  //   if (wasSubmit) { setSubmitMessage(''); setWasSubmit(false); }
  // }, [values]);

  useEffect(() => {
    setSubmitMessage('');
    setValues({ name: currentUser.name, email: currentUser.email });
    // setWasSubmit(false);
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
                value={values.name}
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
                value={values.email}
              />
            </div>
            <span className={`error profile__error profile__error_type_name ${!isValid ? 'profile__error_show' : ''}`}>{errors.email}</span>

            {/* {submitErrorMessage !== ''
              && <span className={`profile__save-error profile__error_type_save
              ${submitErrorMessage !== '' ? 'profile__save-error_show' : ''}`}>
                {submitErrorMessage}
              </span>} */}
               <span className={`error profile__save-error ${(submitMessage !== '') ? 'profile__save-error_show' : ''}`}>
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
};
