import React from 'react';
import PropTypes from 'prop-types';
// import film1 from '../../../../images/film-1.jpg';

function MoviesCard({ title, duration, cover }) {
  const [isLiked, setLike] = React.useState(false);
  return (
    <div className="movie">
      <a href="www.google.com" className="movie__link">
        <img
          src={cover}
          alt="Фотография автора проекта"
          className="movie__cover"
        />
      </a>
      <div className="movie__info">
        <div className="movie__caption">
          <h2 className="movie__title">{title}</h2>
          <button className={`movie-bttn ${window.location.pathname.includes('saved') ? 'movie__remove' : `movie__save ${isLiked && 'movie__save_true'}`} `}
          type="button"
          onClick={() => !window.location.pathname.includes('saved') && setLike(!isLiked)}>
          </button>
        </div>
        <p className="movie__duration">{duration}</p>
      </div>

    </div>

  );
}

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default MoviesCard;
