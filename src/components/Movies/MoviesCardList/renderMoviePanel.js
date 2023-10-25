function renderMoviePanel(
  allFilteredFilms,
  renderPointer,
  windowWidth,
  handleSetMoreCards,
  handleSetRenderPointer,
  handlesetFilmsForRender,
) {
  let initialNumCards = 0;
  let numCardForRender = 0;
  let chunkSize = 0;
  const tempArray = [];
  if (windowWidth < 601) {
    initialNumCards = 5;
    numCardForRender = 2;
  } else if (windowWidth < 901) {
    initialNumCards = 8;
    numCardForRender = 2;
  } else {
    initialNumCards = 12;
    numCardForRender = 3;
  }

  const restForRender = allFilteredFilms.length - renderPointer;
  if (renderPointer === 0) {
    if (restForRender <= initialNumCards) {
      chunkSize = restForRender;
      handleSetMoreCards(false);
    } else {
      chunkSize = initialNumCards;
      handleSetMoreCards(true);
    }
  } else if ((restForRender) <= 0 || allFilteredFilms.length === 0) {
    return null;
  } else if (restForRender / numCardForRender <= 1) {
    chunkSize = restForRender;
    handleSetMoreCards(false);
  } else if (restForRender / numCardForRender >= 1) {
    chunkSize = numCardForRender;
    handleSetMoreCards(true);
  }
  for (let i = 0; i < chunkSize; i += 1) {
    tempArray.push(allFilteredFilms[i + renderPointer]);
  }
  handleSetRenderPointer((state) => (state + chunkSize));
  handlesetFilmsForRender((state) => state.concat(tempArray));
  return null;
}

export default renderMoviePanel;
