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
  const SMALL_SCREEN_W_PX = 600;
  const INITIAL_CARDS_FOR_SMALL = 5;
  const RENDER_CARDS_FOR_SMALL = 2;
  const MEDIUM_SCREEN_W_PX = 900;
  const INITIAL_CARDS_FOR_MEDIUM = 8;
  const RENDER_CARDS_FOR_MEDIUM = 2;
  const INITIAL_CARDS_FOR_WIDE = 12;
  const RENDER_CARDS_FOR_WIDE = 3;

  if (windowWidth <= (SMALL_SCREEN_W_PX)) {
    initialNumCards = INITIAL_CARDS_FOR_SMALL;
    numCardForRender = RENDER_CARDS_FOR_SMALL;
  } else if (windowWidth <= MEDIUM_SCREEN_W_PX) {
    initialNumCards = INITIAL_CARDS_FOR_MEDIUM;
    numCardForRender = RENDER_CARDS_FOR_MEDIUM;
  } else {
    initialNumCards = INITIAL_CARDS_FOR_WIDE;
    numCardForRender = RENDER_CARDS_FOR_WIDE;
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
