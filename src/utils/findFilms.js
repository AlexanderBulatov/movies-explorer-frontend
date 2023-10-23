function findFilms(
  initArray,
  searchExpression,
  checkedShort,
) {
  let findDuration = 0;
  if (checkedShort) {
    findDuration = 60;
  } else {
    findDuration = 60000;
  }
  return initArray.filter(
    (film) => ((film.nameRU.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0
      || (film.nameEN.toLowerCase()).indexOf(searchExpression.toLowerCase()) >= 0)
      && (film.duration < findDuration),
  );
}

export default findFilms;
