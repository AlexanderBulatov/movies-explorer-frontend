const { REACT_APP_BASE_URL } = require('./config');
const CustomError = require('./error/error');

function answerHandleGET(serverAnswer) {
  if (serverAnswer.ok) {
    return serverAnswer.json()
      .then((res) => res.data);
  }
  return serverAnswer.json().then(
    (res) => Promise.reject(new CustomError(serverAnswer.status, res.message)),
  );
}

function answerHandlePOST(serverAnswer) {
  if (serverAnswer.ok) {
    return serverAnswer.json();
    // .then((res) => res);
  }
  return serverAnswer.json().then(
    (res) => Promise.reject(new CustomError(serverAnswer.status, res.message)),
  );
}
// 00 =============================================================================================

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
  .then(answerHandlePOST);

// 01 =============================================================================================

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
  .then(answerHandlePOST);

// 02 =============================================================================================

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
  .then(answerHandleGET);

// 03 =============================================================================================

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
  .then(answerHandleGET);
