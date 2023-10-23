function storeDataInLocalStorage(
  key,
  userId,
  filteredFilms,
  searchExpression,
  checkboxState,
) {
  window.localStorage.setItem(key, JSON.stringify({
    userId,
    filteredFilms,
    searchExpression,
    checkboxState,
  }));
}

export default storeDataInLocalStorage;
