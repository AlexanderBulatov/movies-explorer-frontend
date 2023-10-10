import React from 'react';
import Header from './Header/Header';
// import Main from './Main/Main';
// import Footer from './Footer/Footer';
// import film1 from '../images/film-1.jpg';
// import film2 from '../images/film-2.jpg';
// import film3 from '../images/film-3.jpg';

import logo from '../images/logo.svg';
// import accountImg from '../images/account.svg';
// import cvFoto from '../images/foto-profile.jpg';
// import promoImg from '../images/promo.svg';
// s

function App() {
  return (
    <>
      <Header />
      {/* <Main/> */}
      {/* <section className="movies page__partition
      page__partition_color_black page__partition_grow">
        <div className="movies__content page__content">
          <form className="search-form movies__search__form">
            <div className="search-bar">
              <input
                id="search"
                type="text"
                name="movie-search"
                placeholder="search"
                className="search__input"
                required
              />
              <button type="submit" className="search-bttn"></button>
            </div>
          </form>
          <div className="movies__filter-checkbox">
            <div className="burger-button">
              <span className="burger-button__line"></span>
              <span className="burger-button__line"></span>
              <span className="burger-button__line"></span>
            </div>
          </div>
          <div className="movies__filter-checkbox">
            <div className="close-button">
              <span className="close-button__line"></span>
            </div>
          </div>

          <div className="movies-list">
            <div className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film1}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <h2 className="movie__title">1 -
                  Названиеeeeeeuuuuuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <p className="movie__duration">1ч 47м

                </p>
              </div>

            </div>
            <div className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  // src={film2}
                  alt="Картинка"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <h2 className="movie__title">2 -Название</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <div className="movie__duration">

                </div>
              </div>
            </div>
            <div className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film3}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <h2 className="movie__title">3 -Названиеeeeeeuuu
                  uuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <div className="movie__duration">

                </div>
              </div>

            </div>
            <div className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film1}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <h2 className="movie__title">1 -Названиеeeeeeuuu
                  uuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <p className="movie__duration">

                </p>
              </div>

            </div>
            <div className="movie">
            <a href="www.google.com" className="movie__link">
                <img
                  // src={film2}
                  alt="Картинка"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
              <div className="movie__caption">
                  <h2 className="movie__title">2 -Название</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <div className="movie__duration">

                </div>
              </div>
            </div>
          </div>

        <button className="movies__more-bttn" type="button">Еще</button>

        </div>
      </section> */}
      {/* <div className="popup popup_type_menu">
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
      </div> */}
      {/* <section className="page-404 page__partition page__partition_color_black">
            <h2 className="page-404__title">404</h2>
            <p className="page-404__message">Страница не найдена</p>
            <a href="#" className="page-404__back">Назад</a>
      </section> */}
      {/* ============================================= */}
      <section className="sign
      page__partition page__partition_grow page__partition_color_black">
        <div className="page__sign">
          <a className="logo sign__logo" href="#">
            <img
              src={logo}
              alt="Пиктограмма со ссылкой на главную страницу"
              className="logo__img"
            />
          </a>
          <h2 className="page-title sign__title">Добро пожаловать!</h2>
          <form className="sign__form" name="" >
            <label className="sign__label">Имя</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="sign__input sign__input_type_name"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="error sign__error sign__error_type_name
            ">
            </span>
            <label className="sign__label">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ваш Email"
              className="sign__input sign__input_type_email"
              required
            />
            <span className="error sign__error sign__error_type_email"></span>
            <label className="sign__label">Пароль</label>
            <input
              id="pass"
              type="password"
              name="pass"
              placeholder="Введите пароль"
              className="sign__input sign__input_type_pass"
              required
            />
            <span className="error sign__error sign__error_type_pass
            error_active">Что-то пошло не так...</span>

            <button type="submit" className="sign__submit-btn">Зарегистрироваться</button>
          </form>
          <p className="sign__login">Ещё не зарегистрированы?&ensp;<
          a className="sign__link" href="">Регистрация</a></p>
        </div>
      </section>

      <section className="profile page__partition page__partition_grow page__partition_color_black">
        <div className="page__profile">
          <h2 className="page-title profile__title">Привет, Медвед</h2>
          <div className="profile__info">
            <div className="profile__info-row">
              <h3 className="profile__attribute">Имя</h3>
              <input
                id="pass"
                type="text"
                name="pass"
                placeholder="Медвед"
                // value={'Медвед'}
                className="profile__input"
              />
            </div>
            <span className="error profile__error profile__error_type_name error_active">Что-то пошло
            Что-то пошлоЧто-то пошлоЧто-то пошлоЧто-то пошло
            Что-то пошло то-то пошлоЧто-то пошлоЧто-то пошлоЧто-то п
            Что-то пошлоЧто-то пошлоЧто-то пошлоЧто-то пошло
            Что-то пошло то-то пошлоЧто-то пошлоЧто-то пошлоЧто-то п
            Что-то пошлоЧто-то пошлоЧто-то пошлоЧто-то пошло
            Что-то пошло то-то пошлоЧто-то пошлоЧто-то пошлоЧто-то п
            Что-то пошлоЧто-то пошлоЧто-то пошлоЧто-то пошло
            Что-то пошло то-то пошлоЧто-то пошлоЧто-то пошлоЧто-то п
            Что-то пошлоЧто-то пошлоЧто-то пошлоЧто-то пошло
            Что-то пошло то-то пошлоЧто-то пошлоЧто-то пошлоЧто-то п

            Что-то пошло
              </span>
            <div className="profile__info-row">
              <h3 className="profile__attribute">E-mail</h3>
              <input
                id="pass"
                type="text"
                name="pass"
                placeholder="Медвед"
                // value={'Медвед'}
                className="profile__input"
              />
            </div>
            <span className="error profile__error profile__error_type_email error_active">dkfjaljflajkd

            </span>
          </div>
          <div className="profile__button-place">
            <button className="profile_edit-bttn" type="button">Редактировать</button>
            <a href="#" className="profile__link" type="button">Выйти из аккаунта</a>
          </div>
        </div>
      </section>
      {/* ================================= */}
      {/* <article className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film1}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <div className="movie__title">НАЗВАНИЕ

                  </div>
                  <div className="movie__save">

                  </div>

                </div>
                <div className="movie__duration">

                </div>
              </div>

            </article>
            <article className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film2}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <div className="movie__title">

                  </div>
                  <div className="movie__save">

                  </div>

                </div>
                <div className="movie__duration">

                </div>
              </div>

            </article>
            <article className="movie">
              <a href="www.google.com" className="movie__link">
                <img
                  src={film1}
                  alt="Фотография автора проекта"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
                <div className="movie__caption">
                  <div className="movie__title">

                  </div>
                  <div className="movie__save">

                  </div>

                </div>
                <div className="movie__duration">

                </div>
              </div>

            </article> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
