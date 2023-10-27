import { SHORT_FILM_MIN } from './constants';

function findFilms(
  initArray,
  searchExpression,
  checkedShort,
) {
  return initArray.filter(
    (film) => ((film.nameRU.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0
      || (film.nameEN.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0)
      && (checkedShort ? film.duration <= SHORT_FILM_MIN : true),
  );
}

export default findFilms;
