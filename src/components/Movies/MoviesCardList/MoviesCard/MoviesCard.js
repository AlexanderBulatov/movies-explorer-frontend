import React from 'react';

import film1 from '../../../../images/film-1.jpg';

function MoviesCard() {
  return (
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
            Названиеeeeeeuuuuuuuuuuuuuudsklsdlkfjsldkfjlsdkjf</h2>
          <button className="movie__save" type="button">

          </button>

        </div>
        <p className="movie__duration">1ч 47м

        </p>
      </div>

    </div>

  );
}

export default MoviesCard;
