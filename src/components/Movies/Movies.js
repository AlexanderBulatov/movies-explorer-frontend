import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';

function Movies() {
  const isLoading = false;
  return (
    <section className="movies page__partition page__partition_color_black page__partition_grow">
        <SearchForm />
        {isLoading && <Preloader />}
        <MoviesCardList />

    </section>
  );
}

export default Movies;
