import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import renderMoviePanel from './renderMoviePanel';
import { REACT_APP_COVER_URL } from '../../../utils/config';
import DebugView from '../../SidePopup/DebugView';

function MoviesCardList({ moviesList }) {
  const { pathname } = useLocation();
  // const [initialFilms, setinitialFilms] = React.useState([]);
  const [filmsForRender, setFilmsForRender] = React.useState([]);
  const [renderPointer, setRenderPointer] = React.useState(0);
  // const [allFilteredFilms, setAllFilteredFilms] = React.useState([]);
  const [hasMoreCards, setMoreCards] = React.useState(false);

  // --- window resizing----------------------------
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  useEffect(() => {
    console.log('first load', moviesList);
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
    if (pathname === '/saved-movies') {
      setRenderPointer(0);
      setFilmsForRender([]);
    }
    console.log('here founded-movies', moviesList);
  }, [pathname]);

  useEffect(() => {
    console.log('use moviesList', moviesList);
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
      { (pathname === '/movies') ? filmsForRender.map((film) => (
              <MoviesCard key={film.id}
                title={film.nameRU}
                duration={film.duration}
                cover={`${REACT_APP_COVER_URL}${film.image.url}`}
              />
      )) : null
      }
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
};
