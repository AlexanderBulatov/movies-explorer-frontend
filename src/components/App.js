import React, { useEffect } from 'react';
import {
  Route, Routes, Navigate, useLocation,
  // Route, Routes,
} from 'react-router-dom';
import * as auth from '../utils/auth';
import api from '../utils/MainApi';
import getAllMovies from '../utils/MoviesApi';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import SidePopup from './SidePopup/SidePopup';
import Main from './Main/Main';
import Page404 from './Page404/Page404';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Login from './Sign/Login/Login';
import Register from './Sign/Register/Register';
import ProtectedRoute from './ProtectedRout/ProtectedRout';
import InfoToolTip from './InfoToolTip/InfoToolTip';
// import DebugView from './SidePopup/DebugView';

function App() {
  const { pathname } = useLocation();
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);
  const [isInfoToolTipOpen, setInfoToolTipOpen] = React.useState(false);
  const [infoMsg, setInfoMsg] = React.useState({ isOk: true, msg: 'Все в порядке' });
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [storedIdLikedList, setStoredIdLikedList] = React.useState([]);

  //--------------------------------------------
  const handleDeleteFilm = (filmId) => api.deleteMovie(filmId)
    .catch((err) => {
      setInfoToolTipOpen(true);
      setInfoMsg({ isOk: false, msg: `Попробуйте еще раз. Произошла ошибка при удалении: ${err}` });
      return err;
    });

  const handleSetFilm = (film) => api.setFilm(film)
    .catch((err) => {
      setInfoToolTipOpen(true);
      setInfoMsg({ isOk: false, msg: `Попробуйте еще раз. Произошла ошибка при отметке фильма: ${err}` });
      return { data: null, msg: 'Bad' };
    });

  // ------------------------ 100 FILMS LOADING --------------------
  const handleGetAllMovies = () => getAllMovies().then((films) => films)
    .catch((err) => {
      setInfoToolTipOpen(true);
      setInfoMsg({ isOk: false, msg: `Попробуйте еще раз. Произошла ошибка при обращении к базе фильмов: ${err}` });
      return 'server_error';
    });
  // ------------------------ LIKED FILMS LOADING --------------------
  const handleLoadLikedFilms = () => api.getMovies().then((films) => {
    setStoredIdLikedList(films.map((film) => ({ _id: film._id, id: film.movieId })));
    return films;
  })
    .catch((err) => {
      setInfoToolTipOpen(true);
      setInfoMsg({ isOk: false, msg: `Попробуйте еще раз. Не удалось загрузить сохраненные фильмы с сервера: ${err}` });
      return err;
    });
  // --------------------------------------------------------------------------------------
  const handleTokenCheck = () => {
    auth.checkToken().then((res) => {
      if (res) {
        setLoggedIn(true);
        setCurrentUser(res);
        return null;
      }
      window.localStorage.setItem('isLoggedIn', 'false');
      return null;
    })
      .catch((err) => {
        setInfoToolTipOpen(true);
        setInfoMsg({ isOk: false, msg: `Возможны проблемы с авторизацией. Не удалось получить ответ сервера. Проверьте, что вы используете защищенное htts-соединение. ${err}`, home: true });
        return err;
      });
  };
  // -------------------------------------------------------------------------------------
  // .....................................................................................
  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      handleTokenCheck();
    } else {
      setLoggedIn(false);
    }
    // api.getMovies().then((films) => {
    //   setStoredIdLikedList(films.map((film) => ({ _id: film._id, id: film.movieId })));
    //   return films;
    // })
    //   .catch((err) => {
    //     console.log(err);
    //     return 'Bad';
    //   });
  }, []);

  return (
    <div className="page" >
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Movies key="movies"
                pathname = {pathname}
                handleGetAllMovies = {handleGetAllMovies}
                handleLoadLikedFilms = {handleLoadLikedFilms}
                storedIdLikedList = {storedIdLikedList}
                setStoredIdLikedList = {setStoredIdLikedList}
                handleSetFilm ={handleSetFilm}
                handleDeleteFilm = {handleDeleteFilm}/>,
              <Footer key="footer" />]} />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Movies key="saved-movies"
                handleLoadLikedFilms = {handleLoadLikedFilms}
                storedIdLikedList = {storedIdLikedList}
                setStoredIdLikedList = {setStoredIdLikedList}
                handleDeleteFilm = {handleDeleteFilm} />,
              <Footer key="footer" />]} />}
          />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                onLogin={() => setLoggedIn(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Profile key="profile"
                setCurrentUser = {setCurrentUser}
                setLoggedInFalse={() => setLoggedIn(false)}
              />]} />}
          />
          <Route path="/signin" element={[
            <Login key="login"
              signIn={() => setLoggedIn(true)}
              setCurrentUser = {setCurrentUser} />]}
          />
          <Route path="/signup" element={[
            <Register key="register" />]}
          />
          <Route path="/page-404" element={<Page404 />} />
          <Route path="/" element={[
            <Header key="header"
              loggedIn={loggedIn}
              onBurger={() => setSideMenuOpen(true)}
              isSideMenuOpen={isSideMenuOpen}
              isBlack={false} />,
            <Main key="main" />,
            <Footer key="footer" />]}
          />
          <Route path="*" element={<Navigate to="/page-404" replace />} />
        </Routes>

        <SidePopup
          isSideMenuOpen={isSideMenuOpen}
          onClose={() => setSideMenuOpen(false)} />
        <InfoToolTip
          isInfoToolTipOpen={isInfoToolTipOpen}
          onClose={() => setInfoToolTipOpen(false)}
          infoMsg = {infoMsg}
          setInfoToolTipOpen = {setInfoToolTipOpen} />
        {/* <DebugView varArray={[
          { varName: 'loggedIn', varValue: `${loggedIn}` },
          { varName: 'isloggedIn', varValue: `${window.localStorage.getItem('isLoggedIn')}` },
          { varName: 'currentUser', varValue: `${currentUser.email}` },
          { varName: 'test', varValue: `${test}` }]} /> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
