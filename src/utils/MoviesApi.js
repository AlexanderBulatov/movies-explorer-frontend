import { REACT_APP_MOVIES_API_URL } from './config';

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
      return null;
    });
}
