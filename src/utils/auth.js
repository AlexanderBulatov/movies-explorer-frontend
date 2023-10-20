const { REACT_APP_BASE_URL } = require('./config');

function answerHandle(serverAnswer) {
  if (serverAnswer.ok) {
    return serverAnswer.json()
      .then((res) => res.data);
  }
  return Promise.reject(new Error(`Error: ${serverAnswer.status}`));
}

export const register = (userName, email, password) => fetch(`${REACT_APP_BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: userName,
    email,
    password,
  }),
})
  .then(answerHandle);

export const authorize = (email, password) => fetch(
  `${REACT_APP_BASE_URL}/signin`,
  {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  },
)
  .then(answerHandle);

export const signOut = () => fetch(
  `${REACT_APP_BASE_URL}/signout`,
  {
    credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
)
  .then(answerHandle);

export const checkToken = () => fetch(
  `${REACT_APP_BASE_URL}/users/me`,
  {
    credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
)
  .then((serverAnswer) => {
    if (serverAnswer.ok) {
      return serverAnswer.json()
        .then((res) => res.data);
    }
    return null;
  });
