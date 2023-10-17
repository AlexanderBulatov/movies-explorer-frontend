import React from 'react';
import PropTypes from 'prop-types';

function MoviesCard({ title, duration, cover }) {
  const [isLiked, setLike] = React.useState(false);
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
          onClick={() => !window.location.pathname.includes('saved') && setLike(!isLiked)}>
          </button>
        </div>
        <p className="movie__duration">{duration}</p>
      </div>
    </li>

  );
}

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default MoviesCard;
