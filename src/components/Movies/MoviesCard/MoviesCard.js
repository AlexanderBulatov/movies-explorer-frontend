import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  title, duration, cover, film, handleLikeFilm, handleDeleteFilm,
}) {
  const { pathname } = useLocation();
  const [isLiked, setLike] = React.useState(false);

  const handleLike = () => {
    handleLikeFilm(isLiked, setLike, film);
    console.log(film);
    setLike(!isLiked);
  };
  const handleDelete = () => {
    console.log('click на удаление фильма: ', film);
    handleDeleteFilm(film);
  };

  return (
    <li className="movie">
      <a href="https://www.youtube.com/watch?v=H3fXWXmlEvc" className="movie__link" target="_blank" rel="noreferrer">
        <img
          src={cover}
          alt={`Обложка для фильма ${title}`}
          className="movie__cover"
        />
      </a>
      <div className="movie__info">
        <div className="movie__caption">
        <a href="https://www.youtube.com/watch?v=H3fXWXmlEvc" className="link movie__title" target="_blank" rel="noreferrer">{title}</a>
          <button className={`movie-bttn ${window.location.pathname.includes('saved') ? 'movie__remove' : `movie__save ${isLiked && 'movie__save_true'}`} `}
          type="button"
          onClick={ pathname.includes('saved') ? handleDelete : handleLike }>
          </button>
        </div>
        <p className="movie__duration">{duration}</p>
      </div>
    </li>

  );
}

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  handleLikeFilm: PropTypes.func.isRequired,
  handleDeleteFilm: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};

export default MoviesCard;
