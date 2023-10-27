import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import findFilms from '../../utils/findFilms';
import storeDataInLocalStorage from '../../utils/storeDataInLocalStorage';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import NoResult from './NoResult/NoResult';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Movies({
  handleGetAllMovies,
  handleLoadLikedFilms,
  handleSetFilm,
  handleDeleteFilm,
  storedIdLikedList,
  setStoredIdLikedList,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const [allFilmsFromAPI, setAllFilmsFromAPI] = React.useState(null);
  const [moviesList, setMoviesList] = React.useState([]);
  const [storedLikedList, setStoredLikedList] = React.useState(null);
  const [searchSettings, setSearchSettings] = React.useState({ search: '', checked: false });
  const [resultStatus, setResultStatus] = React.useState('init');
  const [isLoading, setIsLoading] = React.useState(false);

  function storeAndShowSearchRes(arr, search, checkedShort) {
    const findedFilms = findFilms(arr, search, checkedShort);
    setMoviesList(findedFilms);
    storeDataInLocalStorage('filteredUserFilms', currentUser._id, findedFilms, search, checkedShort);
    if (findedFilms.length === 0) { setResultStatus('notFounded'); } else setResultStatus('init');
    setIsLoading(false);
  }

  const searchFromAllFilms = (search, checkedShort) => {
    setResultStatus('init');
    setIsLoading(true);
    if (allFilmsFromAPI === null) {
      handleGetAllMovies().then((res) => {
        if (res !== 'gotError') {
          window.localStorage.setItem('initialUserFilms', JSON.stringify({ userId: currentUser._id, initialFilms: res }));
          setAllFilmsFromAPI({ userId: currentUser._id, initialFilms: res });
          storeAndShowSearchRes(res, search, checkedShort);
        } else {
          setResultStatus('serverError');
          setIsLoading(false);
        }
      });
    } else {
      storeAndShowSearchRes(allFilmsFromAPI.initialFilms, search, checkedShort);
    }
  };

  const searchFromLikedFilms = (search, checkedShort) => {
    setResultStatus('init');
    setIsLoading(true);
    if (storedLikedList.length > 0) {
      const findedFilms = findFilms(storedLikedList, search, checkedShort);
      if (findedFilms.length === 0) setResultStatus('notFounded');
      else setResultStatus('init');
      setMoviesList(findedFilms);
    }
    setIsLoading(false);
  };

  function handleSearchClick(search, checkedShort) {
    if (pathname === '/movies') searchFromAllFilms(search, checkedShort);
    else searchFromLikedFilms(search, checkedShort);
  }

  useEffect(() => {
    if (storedLikedList === null) {
      handleLoadLikedFilms().then((res) => {
        if (res !== 'gotError') {
          if (pathname === '/saved-movies') setMoviesList(res);
          setStoredLikedList(res);
        }
      });
    }

    if (pathname === '/movies') {
      const initData = JSON.parse(window.localStorage.getItem('filteredUserFilms'));
      if (initData !== null && initData.userId === currentUser._id) {
        setMoviesList(initData.filteredFilms);
        setSearchSettings({ search: initData.searchExpression, checked: initData.checkboxState });
      } else {
        setMoviesList([]);
        setSearchSettings({ search: '', checked: false });
      }
      const initialUserFilms = JSON.parse(window.localStorage.getItem('initialUserFilms'));
      if (initialUserFilms !== null && initialUserFilms.userId === currentUser._id) {
        setAllFilmsFromAPI(initialUserFilms);
      }
    }
  }, [pathname]);

  return (
    <main className="page__content">
      <section className="movies page__partition page__partition_color_black page__partition_grow">
          <SearchForm
            handleSearchClick = {handleSearchClick}
            searchSettings = {searchSettings}/>
          {<NoResult resultStatus={resultStatus}/>}
          {isLoading && <Preloader />}
          {!isLoading && <MoviesCardList
            moviesList = {moviesList}
            setMoviesList = {setMoviesList}
            handleSetFilm ={ handleSetFilm}
            handleDeleteFilm = {handleDeleteFilm}
            storedIdLikedList = {storedIdLikedList}
            setStoredIdLikedList = {setStoredIdLikedList}
            />}
      </section>
    </main>
  );
}

export default Movies;

Movies.propTypes = {
  handleGetAllMovies: PropTypes.func,
  handleShortClick: PropTypes.func,
  filteredFilms: PropTypes.array,
  setFilteredFilms: PropTypes.func,
  handleLoadLikedFilms: PropTypes.func,
  handleSetFilm: PropTypes.func,
  handleDeleteFilm: PropTypes.func,
  storedIdLikedList: PropTypes.array,
  setStoredIdLikedList: PropTypes.func,
};
