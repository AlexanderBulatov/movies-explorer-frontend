import React from 'react';

function Profile() {
  return (
    <section className="profile page__partition page__partition_grow page__partition_color_black">
      <div className="profile__content">
        <h2 className="page-title profile__title">Привет, Виталий!</h2>
        <div className="profile__info">
          <div className="profile__info-row">
            <h3 className="profile__attribute">Имя</h3>
            <input
              id="pass"
              type="text"
              name="pass"
              placeholder="Медвед"
              className="profile__input"
            />
          </div>
          <span className="error profile__error profile__error_type_name error_active">Что-то пошл</span>
          <div className="profile__info-row">
            <h3 className="profile__attribute">E-mail</h3>
            <input
              id="pass"
              type="text"
              name="pass"
              placeholder="Медвед"
              className="profile__input"
            />
          </div>
          <span className="error profile__error profile__error_type_email error_active">dkfjaljflajkd</span>
        </div>
        {/* <span className="error profile__save-error
        profile__error_type_save error_active">Что-то пошл
          Что-то пошл Чт
        </span>
        <button className="page-bttn profile__save-bttn" type="button" >Сохранить</button> */}
        <button className="profile__edit-bttn" type="button">Редактировать</button>
        <a href="#" className="profile__link" type="button">Выйти из аккаунта</a>

      </div>
    </section>
  );
}

export default Profile;
