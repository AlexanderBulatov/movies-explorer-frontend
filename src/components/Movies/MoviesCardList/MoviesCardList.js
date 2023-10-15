import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import SearchForm from '../SearchForm/SearchForm';
import film00 from '../../../images/covers/00.jpg';
import film01 from '../../../images/covers/01.jpg';
import film02 from '../../../images/covers/02.jpg';
// import film03 from '../../../images/covers/03.jpg';
// import film04 from '../../../images/covers/04.jpg';
// import film05 from '../../../images/covers/05.jpg';
// import film06 from '../../../images/covers/06.jpg';
// import film07 from '../../../images/covers/07.jpg';
import film08 from '../../../images/covers/08.jpg';
// import film09 from '../../../images/covers/09.jpg';
// import film10 from '../../../images/covers/10.jpg';
// import film11 from '../../../images/covers/11.jpg';
import film2 from '../../../images/film-2.jpg';

function MoviesCardList() {
  return (

        <div className="movies__list">
          <MoviesCard title={'33 слова о дизайне'} duration={'1ч 45м'} cover={film00} />
          <MoviesCard title={'Киноальманах «100 лет дизайна»'} duration={'1ч 45м'} cover={film2} />
          <MoviesCard title={'В погоне за Бенкси'} duration={'1ч 45м'} cover={film08} />
          <MoviesCard title={'Киноальманах «100 лет дизайна»'} duration={'1ч 45м'} cover={film01} />
          <MoviesCard title={'В погоне за Бенкси'} duration={'1ч 45м'} cover={film02} />
          {/* <MoviesCard title={'Бег это свобода'} duration={'1ч 45м'} cover={film04} />
          <MoviesCard title={'Книготорговцы'} duration={'1ч 45м'} cover={film05} />
          <MoviesCard title={'Gimme Danger: История Игги и The St...'}
          duration={'1ч 45м'} cover={film06} /> */}
          {/* <MoviesCard title={'Gimme Danger: История Игги и The Stooge...'}
          duration={'1ч 45м'} cover={film07} />
          <MoviesCard title={'Дженис: Маленькая девочка грустит'}
          duration={'1ч 45м'} cover={film08} />
          <MoviesCard title={'Соберись перед прыжком'} duration={'1ч 45м'} cover={film09} />
          <MoviesCard title={'Пи Джей Харви: A dog called money'}
          duration={'1ч 45м'} cover={film10} /> */}

          <button className="movies__more-bttn" type="button">Еще</button>

        </div>

  );
}

export default MoviesCardList;
