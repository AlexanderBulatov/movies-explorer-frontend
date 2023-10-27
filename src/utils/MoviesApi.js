import { REACT_APP_MOVIES_API_URL } from './config';

const CustomError = require('./error/error');

export default function getAllMovies() {
  return fetch(
    `${REACT_APP_MOVIES_API_URL}`,
    {
      headers: {
      },
    },
  )
    .then((serverAnswer) => {
      if (serverAnswer.ok) {
        return serverAnswer.json();
      }
      return serverAnswer.json().then(
        (res) => Promise.reject(new CustomError(serverAnswer.status, res.message)),
      );
    });
}
