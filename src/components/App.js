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
// import DebugView from './SidePopup/DebugView';

function App() {
  const { pathname } = useLocation();
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [loggedIn, setLoggedIn] = React.useState(null);
  // const [initialFilms, setinitialFilms] = React.useState([]);
  const [filteredFilms, setFilteredFilms] = React.useState(null);
  // const [renderPointer, setRenderPointer] = React.useState(0);
  // const [storedFilms, setStoredFilms] = React.useState([]);
  // const [hasMoreCards, setMoreCards] = React.useState(false);
  // const navigate = useNavigate();

  //  -------------Проверка валидности токена----------------------------------------------
  const handleError = (err) => {
    console.log(err);
  };

  const handleLoadLikedFilm = () => {
    console.log('saved-films');
    api.getMovies().then((res) => {
      console.log(res);
    })
      .catch(handleError);
  };

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
      .catch(handleError);
  };

  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      handleTokenCheck();
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleSearchClick = (search, checkedShort) => {
    if (JSON.parse(window.localStorage.getItem('initialUserFilms')).userId !== currentUser._id) {
      getAllMovies()
        .then((res) => {
          window.localStorage.setItem('initialUserFilms', JSON.stringify({ userId: currentUser._id, initialFilms: res }));
        })
        .catch((err) => {
          console.log('no films!', err);
        });
    }
    const { initialFilms } = JSON.parse(window.localStorage.getItem('initialUserFilms'));
    let findDuration = 0;
    if (checkedShort) {
      findDuration = 60;
    } else {
      findDuration = 60000;
    }
    const filteredArr = initialFilms.filter(
      (film) => ((film.nameRU.toLowerCase()).indexOf(search.toLowerCase()) >= 0
              || (film.nameEN.toLowerCase()).indexOf(search.toLowerCase()) >= 0)
              && (film.duration < findDuration),
    );
    setFilteredFilms(filteredArr);
    console.log('filteredArr', filteredArr);
    if (filteredArr.length > 0) {
      window.localStorage.setItem('filteredUserFilms', JSON.stringify({
        userId: currentUser._id,
        filteredFilms: filteredArr,
        searchExpression: search,
        checkboxState: checkedShort,
      }));
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      handleTokenCheck();
    }
  }, []);

  const handleShortClick = (search, checkedShort) => {
    let findDuration = 0;
    if (checkedShort) {
      findDuration = 60;
    } else {
      findDuration = 60000;
    }
    const { initialFilms } = JSON.parse(window.localStorage.getItem('initialUserFilms'));
    const filteredArr = initialFilms.filter(
      (film) => ((film.nameRU.toLowerCase()).indexOf(search.toLowerCase()) >= 0
              || (film.nameEN.toLowerCase()).indexOf(search.toLowerCase()) >= 0)
              && (film.duration < findDuration),
    );
    setFilteredFilms(filteredArr);

    console.log('filteredArr', filteredArr);
    if (filteredArr.length > 0) {
      window.localStorage.setItem('filteredUserFilms', JSON.stringify({
        userId: currentUser._id,
        filteredFilms: filteredArr,
        searchExpression: search,
        checkboxState: checkedShort,
      }));
    }
  };
  // React.useEffect(() => {
  //   if (loggedIn) { navigate('/movies', { replace: true }); }
  // }, [loggedIn]);

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
                handleSearchClick = {handleSearchClick}
                handleShortClick = {handleShortClick}
                filteredFilms = {filteredFilms}
                setFilteredFilms = {setFilteredFilms}/>,
              <Footer key="footer" />]} />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Movies key="movies"
                pathName = {pathname}
                handleLoadLikedFilm = {handleLoadLikedFilm} />,
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
          {/* <Route path="*" element={<Page404 />} /> */}
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

        <SidePopup isSideMenuOpen={isSideMenuOpen} onClose={() => setSideMenuOpen(false)} />
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
