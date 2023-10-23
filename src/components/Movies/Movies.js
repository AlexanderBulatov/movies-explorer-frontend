import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Movies({
  handleSearchClick, handleShortClick, filteredFilms, setFilteredFilms, handleLoadLikedFilm,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLoading = false;
  const { pathname } = useLocation();
  // const [initPageData, setInitPageData] = React.useState('');
  const [moviesList, setMoviesList] = React.useState([]);
  const [searchSettings, setSearchSettings] = React.useState(null);

  useEffect(() => {
    console.log('страница сохраненные', moviesList);
    console.log('страница сохраненные фильтрованные', filteredFilms);
    if (pathname === '/saved-movies') {
      handleLoadLikedFilm();
    }
  }, []);

  useEffect(() => {
    const initData = JSON.parse(window.localStorage.getItem('filteredUserFilms'));
    if (pathname === '/movies') {
      if (initData.userId === currentUser._id) {
        setMoviesList(initData.filteredFilms);
        setFilteredFilms(null);
        console.log('set list', initData.filteredFilms);
        setSearchSettings({ search: initData.searchExpression, checked: initData.checkboxState });
        console.log('мы нашли его фильмы', currentUser);
      } else {
        setMoviesList([]);
        setSearchSettings({ search: '', checked: false });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/movies') {
      if (filteredFilms !== null) {
        setMoviesList(filteredFilms);
        console.log('daaaa', filteredFilms);
      }
    }
  }, [filteredFilms]);

  return (
    <main className="page__content">
      <section className="movies page__partition page__partition_color_black page__partition_grow">
          <SearchForm
            handleSearchClick = {handleSearchClick}
            handleShortClick = {handleShortClick}
            searchSettings = {searchSettings}/>
          {isLoading && <Preloader />}
          <MoviesCardList moviesList = {moviesList} />
      </section>
    </main>
  );
}

export default Movies;
Movies.propTypes = {
  handleSearchClick: PropTypes.func,
  handleShortClick: PropTypes.func,
  filteredFilms: PropTypes.array,
  setFilteredFilms: PropTypes.func,
  handleLoadLikedFilm: PropTypes.func,
};
