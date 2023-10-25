import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import renderMoviePanel from './renderMoviePanel';
import useWindowSize from '../../../utils/customHooks/useWindowSize';
import { REACT_APP_COVER_URL } from '../../../utils/config';
// import DebugView from '../../SidePopup/DebugView';

function MoviesCardList({
  moviesList, setMoviesList, handleSetFilm, handleDeleteFilm, storedIdLikedList,
  setStoredIdLikedList,
}) {
  const { pathname } = useLocation();
  // const [initialFilms, setinitialFilms] = React.useState([]);
  const [isLiked, setLiked] = React.useState(false);
  const [filmsForRender, setFilmsForRender] = React.useState([]);
  const [renderPointer, setRenderPointer] = React.useState(0);
  // const [allFilteredFilms, setAllFilteredFilms] = React.useState([]);
  const [hasMoreCards, setMoreCards] = React.useState(false);

  // ----------handleDeleteFilm-------------------
  function handleDeleteRenderedItem(film) {
    console.log(isLiked);
    handleDeleteFilm(film._id).then((res) => {
      if (res === 'Ok') {
        console.log('все получилось');
        setMoviesList((state) => state.filter(
          (moviesFromState) => moviesFromState._id !== film._id,
        ));
        setFilmsForRender(moviesList);
        setStoredIdLikedList((state) => state.filter(
          (filmIdFromState) => filmIdFromState._id !== film._id,
        ));
      }
    });
  }
  // ----------handleDelete-LikeFilm-------------------
  function handleLikeFilm(isLiked, film) {
    if (!isLiked) {
      handleSetFilm(film).then((res) => {
        if (res.msg !== 'Bad') {
          setStoredIdLikedList([{ _id: res.data._id, id: res.data.movieId }, ...storedIdLikedList]);
        }
      });
    } else {
      const [filmForDelete] = storedIdLikedList.filter((filmId) => filmId.id === film.id);
      handleDeleteFilm(filmForDelete._id).then((res) => {
        if (res === 'Ok') {
          setStoredIdLikedList((state) => state.filter(
            (filmIdFromState) => filmIdFromState.id !== film.id,
          ));
        }
      });
    }
  }

  // --- window resizing----------------------------
  const windowSize = useWindowSize();

  useEffect(() => {
    if (pathname === '/movies') {
      setRenderPointer(0);
      setFilmsForRender([]);
      renderMoviePanel(
        moviesList,
        0,
        windowSize.innerWidth,
        setMoreCards,
        setRenderPointer,
        setFilmsForRender,
      );
    } else {
      setFilmsForRender(moviesList);
    }
  }, [moviesList, pathname]);

  function handleClickMore() {
    renderMoviePanel(
      moviesList,
      renderPointer,
      windowSize.innerWidth,
      setMoreCards,
      setRenderPointer,
      setFilmsForRender,
    );
  }

  return (

    <section className = "movies__panel">
      <ul className="movies__list">
      {filmsForRender.map((film) => (
              <MoviesCard key={film.id || film._id}
                title={film.nameRU}
                duration={film.duration}
                cover={(pathname === '/saved-movies') ? `${film.image}` : `${REACT_APP_COVER_URL}${film.image.url}`}
                trailerLink={film.trailerLink}
                handleLikeFilm ={handleLikeFilm}
                handleDeleteFilm = {handleDeleteRenderedItem}
                film = {film}
                isLiked = {(pathname === '/movies') ? storedIdLikedList.some((storedId) => storedId.id === film.id) : false}
                setLiked = {setLiked}
              />
      ))}
      </ul>
      <button className={`movies__more-bttn ${!hasMoreCards ? 'movies__more-bttn_hidden' : ''}`} type="button" onClick={handleClickMore}>Еще</button>
      {/* <DebugView varArray={[
        { varName: 'cardListSize', varValue: `${windowSize.innerWidth}` },
        { varName: 'windowSize.innerWidth', varValue: `${windowSize.innerWidth}` },
        { varName: 'filmsForRender', varValue:
        `${windowSize.innerWidth} | ${filmsForRender.length}` },
        { varName: 'filteredFilms', varValue: `| ${moviesList}` }]} /> */}
    </section>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  moviesList: PropTypes.array,
  handleSetFilm: PropTypes.func,
  handleDeleteFilm: PropTypes.func,
  setMoviesList: PropTypes.func,
  storedIdLikedList: PropTypes.array,
  setStoredIdLikedList: PropTypes.func,
};
