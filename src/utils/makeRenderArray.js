function renderMoviePanel(
  storedFilms,
  renderFilms,
  renderPointer,
  numCardForRender,
  handleSetMoreActive,
  handleSetRenderPointer,
  handleSetRenderFilms,
) {
  let chunkSize = 0;
  const tempArray = [];
  const restRender = storedFilms.length - renderPointer;
  if ((restRender) <= 0) {
    return 0;
  }
  if (restRender / numCardForRender < 1) {
    chunkSize = restRender;
    handleSetMoreActive(false);
  }
  if (restRender / numCardForRender >= 1) {
    chunkSize = numCardForRender;
  }

  for (let i = 0; i < chunkSize; i += 1) {
    tempArray.push(storedFilms[i + renderPointer]);
  }
  handleSetRenderPointer(renderPointer + chunkSize);
  handleSetRenderFilms(renderFilms.concat(tempArray));
  return null;
}

export default renderMoviePanel;
