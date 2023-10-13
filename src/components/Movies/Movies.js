import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <section className="movies page__partition page__partition_color_black page__partition_grow">
      <div className="movies__content page__content">
        <SearchForm />
        <MoviesCardList />
        <button className="movies__more-bttn" type="button">Еще</button>
      </div>
    </section>
    /* <article className="movie">
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

            </article> */
  );
}

export default Movies;
