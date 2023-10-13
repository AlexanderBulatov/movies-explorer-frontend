import React from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
// import SearchForm from '../SearchForm/SearchForm';

function MoviesCardList() {
  return (

        <div className="movies-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>

  );
}

export default MoviesCardList;
