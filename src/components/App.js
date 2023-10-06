import React from 'react';
import Header from './Header/Header';
// import Main from './Main/Main';
import Footer from './Footer/Footer';
import film1 from '../images/film-1.jpg';
// import film2 from '../images/film-2.jpg';
import film3 from '../images/film-3.jpg';

// import logo from '../images/logo.svg';
// import accountImg from '../images/account.svg';
// import cvFoto from '../images/foto-profile.jpg';
// import promoImg from '../images/promo.svg';

function App() {
  return (
    <>
      <Header />
      {/* <Main/> */}
      <section className="movies page__partition page__partition_color_black">
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

          <label className="filter-checkbox">
            <input type="checkbox" className="checkbox" />
            <div className="visible-checkbox">
              <div className="checkbox-toggle"></div>
            </div>
            <span className="filter-checkbox__label">Короткометражки</span>
          </label>

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
                  <h2 className="movie__title">Названиеeeeeeuuuuuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
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
                  // src={film2}
                  alt="Картинка"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
              <div className="movie__caption">
                  <h2 className="movie__title">Название</h2>
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
                  <h2 className="movie__title">Названиеeeeeeuuuuuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
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
                  <h2 className="movie__title">Названиеeeeeeuuuuuuuuuu</h2>
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
                  // src={film2}
                  alt="Картинка"
                  className="movie__cover"
                />
              </a>
              <div className="movie__info">
              <div className="movie__caption">
                  <h2 className="movie__title">Название</h2>
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
                  <h2 className="movie__title">Названиеeeeeeuuuuuuuuuuuuuu9uuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeee</h2>
                  <button className="movie__save" type="button">

                  </button>

                </div>
                <div className="movie__duration">

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </>
  );
}

export default App;
