import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useFormatDuration from '../../../utils/customHooks/useFormatDuration';

function MoviesCard({
  title, duration, cover, trailerLink, film, handleLikeFilm, handleDeleteFilm, isLiked,
}) {
  const { pathname } = useLocation();

  return (
    <li className="movie">
      <a href={trailerLink} className="movie__link" target="_blank" rel="noreferrer">
        <img
          src={cover}
          alt={`Обложка для фильма ${title}`}
          className="movie__cover"
        />
      </a>
      <div className="movie__info">
        <div className="movie__caption">
        <a href={trailerLink} className="link movie__title" target="_blank" rel="noreferrer">{title}</a>
          <button className={`movie-bttn ${window.location.pathname.includes('saved') ? 'movie__remove' : `movie__save ${isLiked && 'movie__save_true'}`} `}
          type="button"
          onClick={ pathname.includes('saved')
            ? () => {
              handleDeleteFilm(film);
            } : () => {
              handleLikeFilm(isLiked, film);
            } }>
          </button>
        </div>
        <p className="movie__duration">{useFormatDuration(duration)}</p>
      </div>
    </li>

  );
}

MoviesCard.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
  trailerLink: PropTypes.string,
  handleLikeFilm: PropTypes.func,
  handleDeleteFilm: PropTypes.func,
  film: PropTypes.object,
  isLiked: PropTypes.bool,
  setLiked: PropTypes.func,
};

export default MoviesCard;
