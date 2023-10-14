import React from 'react';
import Header from './Header/Header';
import Movies from './Movies/Movies';
// import Main from './Main/Main';
import Footer from './Footer/Footer';
// import film1 from '../images/film-1.jpg';
// import film2 from '../images/film-2.jpg';
// import film3 from '../images/film-3.jpg';

function App() {
  const loggedIn = true;
  return (
    <>
      <Header loggedIn={loggedIn}/>
      {/* <Main /> */}
      <Movies />
      <Footer />

    </>
  );
}

export default App;
