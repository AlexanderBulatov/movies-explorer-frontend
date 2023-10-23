const { REACT_APP_BASE_URL, REACT_APP_COVER_URL } = require('./config');

class Api {
  constructor(apiConfig) {
    this._initUrlApi = apiConfig.initUrlApi;
    this._authorization = apiConfig.headers.authorization;
    this._contentType = apiConfig.headers['Content-Type'];
  }

  _answerHandle(serverAnswer) {
    if (serverAnswer.ok) {
      return serverAnswer.json()
        .then((res) => res.data);
    }
    return Promise.reject(new Error(`Error: ${serverAnswer.status}`));
  }

  getMovies() {
    return fetch(
      `${this._initUrlApi}/movies`,
      {
        credentials: 'include',
        headers: {
        },
      },
    )
      .then(this._answerHandle);
  }

  getUserInfo() {
    return fetch(
      `${this._initUrlApi}/users/me`,
      {
        credentials: 'include',
        headers: {
        },
      },
    )
      .then(this._answerHandle);
  }

  updateUserInfo(name, email) {
    return fetch(
      `${this._initUrlApi}/users/me`,
      {
        credentials: 'include',
        method: 'PATCH',
        headers: {
          'Content-Type': this._contentType,
        },
        body: JSON.stringify({
          name,
          email,
        }),
      },
    )
      .then(this._answerHandle);
  }

  setLike(cardId) {
    return fetch(
      `${this._initUrlApi}/cards/${cardId}/likes`,
      {
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': this._contentType,
        },
      },
    )
      .then(this._answerHandle);
  }

  deleteLike(cardId) {
    return fetch(
      `${this._initUrlApi}/cards/${cardId}/likes`,
      {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'Content-Type': this._contentType,
        },
      },
    )
      .then(this._answerHandle);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.setLike(cardId) : this.deleteLike(cardId);
  }

  //---------------------

  setFilm(film) {
    return fetch(
      `${this._initUrlApi}/movies`,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': this._contentType,
        },
        body: JSON.stringify({
          country: film.country,
          director: film.director,
          duration: film.duration,
          year: film.year,
          description: film.description,
          image: `${REACT_APP_COVER_URL}${film.image.url}`,
          trailerLink: film.trailerLink,
          thumbnail: `${REACT_APP_COVER_URL}${film.image.formats.thumbnail.url}`,
          nameRU: film.nameRU,
          nameEN: film.nameEN,
          movieId: film.id,
        }),
      },
    )
      .then(this._answerHandle);
  }

  deleteMovie(movieId) {
    return fetch(
      `${this._initUrlApi}/movies/${movieId}`,
      {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'Content-Type': this._contentType,
        },
      },
    )
      .then(this._answerHandle);
  }

  setAvatar(link) {
    return fetch(
      `${this._initUrlApi}/users/me/avatar`,
      {
        credentials: 'include',
        method: 'PATCH',
        headers: {
          'Content-Type': this._contentType,
        },
        body: JSON.stringify({
          avatar: link,
        }),
      },
    )
      .then(this._answerHandle);
  }
}

const api = new Api({
  initUrlApi: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
