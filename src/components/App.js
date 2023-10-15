import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import SidePopup from './SidePopup/SidePopup';
import Main from './Main/Main';
import Page404 from './Page404/Page404';
import Footer from './Footer/Footer';
// import film1 from '../images/film-1.jpg';
// import film2 from '../images/film-2.jpg';
// import film3 from '../images/film-3.jpg';
import Profile from './Profile/Profile';
import Login from './Sign/Login/Login';
import Register from './Sign/Register/Register';
import InfoToolTip from './InfoToolTip/InfoToolTip';

function App() {
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);

  const loggedIn = true;
  return (
    <>
    <Routes>
        <Route path="*" element={<Navigate to="/page-404" replace />} />
        <Route path="/page-404" element={<Page404/> } />
        <Route path="/" element={[
                        <Header key="header"
                          loggedIn={loggedIn}
                          onBurger={() => setSideMenuOpen(true)}
                          isSideMenuOpen={isSideMenuOpen}
                          isBlack={false} />,
                        <Main key="main"/>,
                        <Footer key="footer"/>]}
        />
        <Route path="/movies" element={[
                        <Header key="header"
                          loggedIn={loggedIn}
                          onBurger={() => setSideMenuOpen(true)}
                          isSideMenuOpen={isSideMenuOpen}
                          isBlack={true} />,
                        <Movies key="movies"/>,
                        <Footer key="footer"/>]}
        />
        <Route path="/movies" element={[
                        <Header key="header"
                          loggedIn={loggedIn}
                          onBurger={() => setSideMenuOpen(true)}
                          isSideMenuOpen={isSideMenuOpen}
                          isBlack={true} />,
                        <Movies key="movies"/>,
                        <Footer key="footer"/>]}
        />
        <Route path="/saved-movies" element={[
                        <Header key="header"
                          loggedIn={loggedIn}
                          onBurger={() => setSideMenuOpen(true)}
                          isSideMenuOpen={isSideMenuOpen}
                          isBlack={true} />,
                        <Movies key="saved-movies"/>,
                        <Footer key="footer"/>]}
        />
        <Route path="/profile" element={[
                        <Header key="header"
                          loggedIn={loggedIn}
                          onBurger={() => setSideMenuOpen(true)}
                          isSideMenuOpen={isSideMenuOpen}
                          isBlack={true} />,
                        <Profile key="profile"/>]}
        />
        <Route path="/signin" element={[
                        <Login key="login"/>]}
        />
        <Route path="/signup" element={[
                        <Register key="register"/>]}
        />
      </Routes>

      <SidePopup isSideMenuOpen={isSideMenuOpen} onClose={ () => setSideMenuOpen(false)} />
      <InfoToolTip />

    </>
  );
}

export default App;
