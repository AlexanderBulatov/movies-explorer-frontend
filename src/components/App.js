import React from 'react';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import Popup from './Popup/Popup';
// import Main from './Main/Main';
// import Page404 from './Page404/Page404';
// import Footer from './Footer/Footer';
// import film1 from '../images/film-1.jpg';
// import film2 from '../images/film-2.jpg';
// import film3 from '../images/film-3.jpg';
// import Profile from './Profile/Profile';
// import Register from './Sign/Register/Register';

function App() {
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);

  // const handleBurgerCleck = () => {
  //   SideMenuOpen(true);
  // };

  const loggedIn = true;
  return (
    <>
      <Header
        loggedIn={loggedIn}
        onBurger={ () => setSideMenuOpen(true) }
        isSideMenuOpen = {isSideMenuOpen}
      />
      {/* <Profile /> */}
      {/* <Main /> */}
      <Movies />
      {/* <Page404 /> */}
      {/* <Footer /> */}
      <Popup
        isSideMenuOpen={isSideMenuOpen}
        onClose={ () => setSideMenuOpen(false)} />

    </>
  );
}

export default App;
