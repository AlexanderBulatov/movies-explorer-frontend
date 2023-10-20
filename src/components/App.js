import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate, Navigate,
} from 'react-router-dom';
import * as auth from '../utils/auth';
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
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  let test = 'r';
  //  -------------Проверка валидности токена----------------------------------------------
  const handleError = (err) => {
    console.log(err);
  };

  const handleTokenCheck = () => {
    auth.checkToken().then((res) => {
      if (res) {
        setLoggedIn(true);
        console.log('yep!');
        setCurrentUser(res);
        test = res;
        console.log('yep!', test);
        return null;
      }
      window.localStorage.setItem('isLoggedIn', 'false');
      console.log('nop!');
      return null;
    })
      .catch(handleError);
  };

  useEffect(() => {
    if (window.localStorage.getItem('isLoggedIn') === 'true') {
      handleTokenCheck();
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) { navigate('/movies', { replace: true }); }
  }, [loggedIn]);

  return (
    <div className="page" >
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={[
            <Header key="header"
              loggedIn={loggedIn}
              onBurger={() => setSideMenuOpen(true)}
              isSideMenuOpen={isSideMenuOpen}
              isBlack={false} />,
            <Main key="main" />,
            <Footer key="footer" />]}
          />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Movies key="movies" />,
              <Footer key="footer" />]} />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn} element={[
              <Header key="header"
                loggedIn={loggedIn}
                onBurger={() => setSideMenuOpen(true)}
                isSideMenuOpen={isSideMenuOpen}
                isBlack={true} />,
              <Movies key="movies" />,
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
                setLoggedInFalse={() => setLoggedIn(false)}
              />]} />}
          />
          <Route path="/signin" element={[
            <Login key="login"
              signIn={() => setLoggedIn(true)} />]}
          />
          <Route path="/signup" element={[
            <Register key="register" />]}
          />
          {/* <Route path="*" element={<Page404 />} /> */}
          <Route path="/page-404" element={<Page404 />} />
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
