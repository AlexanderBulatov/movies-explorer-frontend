import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import renderMoviePanel from './renderMoviePanel';
import { REACT_APP_COVER_URL } from '../../../utils/config';
import DebugView from '../../SidePopup/DebugView';

function MoviesCardList({
  moviesList, setMoviesList, handleLikeFilm, handleDeleteFilm,
}) {
  const { pathname } = useLocation();
  // const [initialFilms, setinitialFilms] = React.useState([]);
  const [filmsForRender, setFilmsForRender] = React.useState([]);
  const [renderPointer, setRenderPointer] = React.useState(0);
  // const [allFilteredFilms, setAllFilteredFilms] = React.useState([]);
  const [hasMoreCards, setMoreCards] = React.useState(false);

  // ----------handleDeleteFilm-------------------
  function handleDeleteRenderedItem(film) {
    handleDeleteFilm(film._id).then((res) => {
      if (res === 'Ok') {
        console.log('все получилось');
        setMoviesList((state) => state.filter(
          (moviesFromState) => moviesFromState._id !== film._id,
        ));
        setFilmsForRender(moviesList);
      }
    });
  }

  // --- window resizing----------------------------
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  useEffect(() => {

  }, []);

  useEffect(() => {
    let timeout;

    function handleWindowResize() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowSize(getWindowSize());
      }, 1000);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  // ----------------- end of resizing-----------------------
  // ----------
  useEffect(() => {
    setRenderPointer(0);
    setFilmsForRender([]);

    console.log('here founded-movies', moviesList);
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/movies') {
      console.log('use moviesList', moviesList);
      // if (pathname === '/movies') {
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
      console.log('no!');
    }
    // }
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
              <MoviesCard key={film._id}
                title={film.nameRU}
                duration={film.duration}
                cover={(pathname === '/saved-movies') ? `${film.image}` : `${REACT_APP_COVER_URL}${film.image.url}`}
                handleLikeFilm ={handleLikeFilm}
                handleDeleteFilm = {handleDeleteRenderedItem}
                film = {film}
              />
      ))}
      </ul>
      <button className={`movies__more-bttn ${!hasMoreCards ? 'movies__more-bttn_hidden' : ''}`} type="button" onClick={handleClickMore}>Еще</button>
      <DebugView varArray={[
        { varName: 'renderPointer', varValue: `${renderPointer}` },
        { varName: 'hasMoreCards', varValue: `${hasMoreCards}` },
        { varName: 'filmsForRender', varValue: `${windowSize.innerWidth} | ${filmsForRender.length}` },
        { varName: 'filteredFilms', varValue: `| ${moviesList}` }]} />
    </section>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  moviesList: PropTypes.array,
  handleLikeFilm: PropTypes.func.isRequired,
  handleDeleteFilm: PropTypes.func.isRequired,
  setMoviesList: PropTypes.func.isRequired,
};
