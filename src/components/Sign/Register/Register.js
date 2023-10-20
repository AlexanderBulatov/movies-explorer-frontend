import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../../utils/auth';
import logo from '../../../images/logo.svg';

const { REACT_APP_BASE_URL } = require('../../../utils/config');

function Registr() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleUserNameChange(e) {
    console.log(`userName before: ${REACT_APP_BASE_URL}`);
    setUserName(e.target.value);
    console.log(`value ${e.target.value}`);
    setTimeout(() => console.log(`userName after ${userName}`), 1000);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPass(e.target.value);
  }

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePassChange(e) {
  //   setPass(e.target.value);
  // }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   props.onSubmit(email, pass);
  // }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(userName, email, pass)
      .then(() => {
        // props.hanldeInfoTooltipOk();
        console.log('Register ok!');
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        // props.hanldeInfoTooltipError();
        console.log('Register error', err);
      });
  }

  return (
    <main className="page__content">
      <section className="sign page__partition page__partition_grow page__partition_color_black">
        <div className="page__sign">
          <Link to="/" className="logo sign__logo" >
            <img
              src={logo}
              alt="Пиктограмма со ссылкой на главную страницу"
              className="logo__img"
            />
          </Link>
          <h1 className="page-title sign__title">Добро пожаловать!</h1>
          <form
            className="sign__form"
            name="registr-form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}>
            <label className="sign__label">Имя</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ваше имя"
              autoComplete="off"
              className="sign__input sign__input_type_name"
              required
              pattern="[\-a-zA-Zа-яёА-ЯЁ ]{2,30}"
              onChange={handleUserNameChange}
              value={userName}
            />
            <span className="error sign__error sign__error_type_name
                ">Имя должно быть от 2 до 200 симоволов
            </span>
            <label className="sign__label">E-mail</label>
            <input
              id="email-reg"
              type="email"
              name="email"
              placeholder="Ваш Email"
              autoComplete="off"
              className="sign__input sign__input_type_email"
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              onChange={handleEmailChange}
              value={email}
            />
            <span className="error sign__error sign__error_type_email">Укажите электронну почту
            </span>
            <label className="sign__label">Пароль</label>
            <input
              id="pass-reg"
              type="password"
              name="pass"
              placeholder="Введите пароль"
              autoComplete="off"
              className="sign__input sign__input_type_pass"
              required
              minLength="2"
              maxLength="200"
              onChange={handlePassChange}
              value={pass}
            />
            <span className="error sign__error sign__error_type_pass
                error_active">Что-то пошло не так...</span>
            <button type="submit" className="page-bttn sign__submit-bttn">Зарегистрироваться</button>
          </form>
          <p className="sign__login">Уже зарегистрированы?&ensp;
            <Link to="/signin" className="link sign__link" >Войти</Link>
            {/* <a className="sign__link" href="">Войти</a> */}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Registr;
