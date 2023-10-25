const { REACT_APP_BASE_URL } = require('./config');

function answerHandle(serverAnswer) {
  if (serverAnswer.ok) {
    return serverAnswer.json()
      .then((res) => res.data);
    // serverAnswer.json()
    //   .then((res) => {
    //     console.log(res.data);
    //     return res.data;
    //   });
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
  .then((serverAnswer) => {
    if (serverAnswer.ok) {
      return serverAnswer.json()
        .then((res) => res);
    }
    if (serverAnswer.status === 409) {
      return Promise.reject(new Error('Пользователь с таким email уже существует'));
    }
    return serverAnswer.json().then((res) => Promise.reject(new Error(`При регистрации пользователя произошла ошибка: ${res.message}`)));
  });

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
  .then((serverAnswer) => {
    if (serverAnswer.ok) {
      return serverAnswer.json()
        .then((res) => res);
    }
    if (serverAnswer.status === 401) {
      return Promise.reject(new Error('Вы ввели неправильный логин или пароль.'));
    }
    return serverAnswer.json().then((res) => Promise.reject(new Error(`Возникла ошибка: ${res.message}`)));
  });

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
