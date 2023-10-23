import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import findFilms from '../../utils/findFilms';
import storeDataInLocalStorage from '../../utils/storeDataInLocalStorage';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Movies({
  handleGetAllMovies,
  filteredFilms,
  setFilteredFilms,
  handleLoadLikedFilms,
  handleSetFilm,
  handleDeleteFilm,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLoading = false;
  const { pathname } = useLocation();
  // const [initPageData, setInitPageData] = React.useState('');
  const [allFilmsFromAPI, setAllFilmsFromAPI] = React.useState(null);
  const [moviesList, setMoviesList] = React.useState([]);
  const [storedLikedList, setStoredLikedList] = React.useState([]);
  const [searchSettings, setSearchSettings] = React.useState({ search: '', checked: false });

  function prepareData(arr, search, checkedShort) {
    console.log('ищу!');
    const findedFilms = findFilms(arr, search, checkedShort);
    setMoviesList(findedFilms);
    if (findedFilms.length > 0) {
      storeDataInLocalStorage('filteredUserFilms', currentUser._id, findedFilms, search, checkedShort);
    }
  }

  const searchFromAllFilms = (search, checkedShort) => {
    console.log('nswsssss!!');
    if (pathname === '/movies') {
      if (allFilmsFromAPI === null) {
        console.log('Null!', null);
        const initialUserFilms = JSON.parse(window.localStorage.getItem('initialUserFilms'));
        console.log(initialUserFilms);
        if (initialUserFilms === null || initialUserFilms.userId !== currentUser._id) {
          console.log('Запрос!!', null);
          handleGetAllMovies().then((res) => {
            console.log('ВАУУ!', res);
            if (res !== 'Bad') {
              window.localStorage.setItem('initialUserFilms', JSON.stringify({ userId: currentUser._id, initialFilms: res }));
              setAllFilmsFromAPI(res);
              prepareData(res, search, checkedShort);
            }
          });
        } else {
          prepareData(initialUserFilms.initialFilms, search, checkedShort);
          console.log('Подготовили!', allFilmsFromAPI);
        }
      } else {
        prepareData(allFilmsFromAPI, search, checkedShort);
        console.log('Подготовили!', allFilmsFromAPI);
      }
      // /saved-movies------ /
    } else {
      let findDuration = 0;
      if (checkedShort) {
        findDuration = 60;
      } else {
        findDuration = 60000;
      }
      const filteredArr = storedLikedList.filter(
        (film) => ((film.nameRU.toLowerCase()).indexOf(search.toLowerCase()) >= 0
          || (film.nameEN.toLowerCase()).indexOf(search.toLowerCase()) >= 0)
          && (film.duration < findDuration),
      );
      setMoviesList(filteredArr);
    }
  };

  function handleSearchBttnClick(search, checkedShort) {
    console.log('тыщ ', search, checkedShort);
    searchFromAllFilms(search, checkedShort);
  }
  function handleCheckboxClick(search, checkedShort) {
    if (moviesList.length > 0) searchFromAllFilms(search, checkedShort);
  }

  function handleSaveFilm(isLiked, setLike, film) {
    console.log(film.image.formats.thumbnail);
    handleSetFilm(film).then((res) => {
      console.log('ВАУУ!', res);
      if (res !== 'Bad') {
        console.log(isLiked, setLike, film.id);
      }
    });
  }

  useEffect(() => {

  }, [allFilmsFromAPI]);

  useEffect(() => {
    console.log('страница сохраненные', moviesList);
    console.log('страница сохраненные фильтрованные', filteredFilms);
    console.log('Зашли с фильмами', filteredFilms);
    return () => {
      console.log('удалили фильмы');
      console.log('Ушли с фильмами', filteredFilms);
      setMoviesList([]);
      setFilteredFilms(null);
    };
  }, []);

  useEffect(() => {
    const initData = JSON.parse(window.localStorage.getItem('filteredUserFilms'));
    if (pathname === '/movies') {
      if (initData !== null && initData.userId === currentUser._id) {
        setMoviesList(initData.filteredFilms);
        console.log('set list', initData.filteredFilms);
        setSearchSettings({ search: initData.searchExpression, checked: initData.checkboxState });
        console.log('мы нашли его фильмы', currentUser);
      } else {
        setMoviesList([]);
        setSearchSettings({ search: '', checked: false });
      }
    } else {
      // ----------- ЗАГРУЗКА ПОНРАВИВШИХСЯ КАРТОЧЕК
      handleLoadLikedFilms().then((res) => {
        console.log(res);
        if (res !== 'Bad') {
          setMoviesList(res);
          setStoredLikedList(res);
        }
      });
    }
  }, [pathname]);

  // useEffect(() => {
  //   if (filteredFilms !== null) {
  //     setMoviesList(filteredFilms);
  //     setFilteredFilms(null);
  //   } else console.log(pathname, 'ОБНУЛИЛИСЬ');
  // }, [filteredFilms]);

  return (
    <main className="page__content">
      <section className="movies page__partition page__partition_color_black page__partition_grow">
          <SearchForm
            handleSearchClick = {handleSearchBttnClick}
            handleShortClick = {handleCheckboxClick}
            searchSettings = {searchSettings}/>
          {isLoading && <Preloader />}
          <MoviesCardList
            moviesList = {moviesList}
            setMoviesList = {setMoviesList}
            handleLikeFilm ={handleSaveFilm}
            handleDeleteFilm = {handleDeleteFilm}
            />
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
  handleSetFilm: PropTypes.func.isRequired,
  handleDeleteFilm: PropTypes.func.isRequired,
};
