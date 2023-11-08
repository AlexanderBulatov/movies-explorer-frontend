import React, { useEffect } from 'react';
import {
  Route, Routes, Navigate, useLocation, useNavigate,
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
  const navigate = useNavigate();
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);
  const [isInfoToolTipOpen, setInfoToolTipOpen] = React.useState(false);
  const [infoMsg, setInfoMsg] = React.useState({ isOk: true, msg: 'Все в порядке', handleCloseAction: null });
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [storedIdLikedList, setStoredIdLikedList] = React.useState([]);

  //--------------------------------------------
  const clearStorageItems = () => {
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('initialUserFilms');
    window.localStorage.removeItem('filteredUserFilms');
  };

  const showInfoToolTip = (isOk, msg, doAfterClosePopup) => {
    setInfoToolTipOpen(true);
    setInfoMsg({
      isOk,
      msg,
      handleCloseAction: doAfterClosePopup,
    });
  };
  const showErrorAPI = (err) => {
    const { statusCode = null, message } = err;
    if (statusCode === 401) {
      setLoggedIn(false);
      clearStorageItems();
      showInfoToolTip(false, 'Ошибка авторизации', () => navigate('/', { replace: true }));
      return 'gotError';
    }
    if (statusCode !== null) {
      showInfoToolTip(false, `${message}`);
      return 'gotError';
    }
    showInfoToolTip(false, 'Ошибка при попытке запроса данных сервера. Проверьте связь с Internet');
    return 'gotError';
  };

  const handleDeleteFilm = (filmId) => api.deleteMovie(filmId)
    .catch((err) => showErrorAPI(err));

  const handleSetFilm = (film) => api.setFilm(film)
    .catch((err) => showErrorAPI(err));
  // ------------------------ 100 FILMS LOADING --------------------
  const handleGetAllMovies = () => getAllMovies().then((films) => films)
    .catch((err) => showErrorAPI(err));
  // ------------------------ LIKED FILMS LOADING --------------------
  const handleLoadLikedFilms = () => api.getMovies().then((films) => {
    setStoredIdLikedList(films.map((film) => ({ _id: film._id, id: film.movieId })));
    return films;
  })
    .catch((err) => showErrorAPI(err));

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //                                              Проверка токена (если не прошло, все обнуляем)
  const handleTokenCheck = () => auth.checkToken().then((res) => {
    setLoggedIn(true);
    setCurrentUser(res);
    return null;
  })
    .catch((err) => {
      showErrorAPI(err);
      navigate('/', { replace: true });
      setLoggedIn(false);
      window.localStorage.removeItem('isLoggedIn');
    });

  // *************************************************************************************
  // -------------------------------------------------------------------------------------
  const handleAuthorize = (email, pass) => auth.authorize(email, pass)
    .then((serverRes) => {
      window.localStorage.setItem('isLoggedIn', 'true');
      setCurrentUser(serverRes);
      setLoggedIn(true);
      navigate('/movies', { replace: true });
      return '';
    });

  // .....................................................................................
  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      handleTokenCheck();
    } else {
      setLoggedIn(false);
    }
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
                showErrorAPI = {showErrorAPI}
              />]} />}
          />
          <Route path="/signin" element={
            loggedIn ? <Navigate to="/" replace />
              : <Login key="login"
                signIn={() => setLoggedIn(true)}
                setCurrentUser = {setCurrentUser}
                handleAuthorize = {handleAuthorize}/>}
          />
          <Route path="/signup" element={
            loggedIn ? <Navigate to="/" replace />
              : <Register key="register"
                handleAuthorize = {handleAuthorize} />}
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
