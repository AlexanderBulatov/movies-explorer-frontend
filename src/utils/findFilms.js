function findFilms(
  initArray,
  searchExpression,
  checkedShort,
) {
  return initArray.filter(
    (film) => ((film.nameRU.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0
      || (film.nameEN.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0)
      && (checkedShort ? film.duration <= 40 : true),
  );
}

export default findFilms;
