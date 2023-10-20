import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as auth from '../../../utils/auth';
import logo from '../../../images/logo.svg';

function Login({ signIn }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPass(e.target.value);
  }
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!pass || !email) {
      return;
    }
    auth.authorize(email, pass)
      .then(() => {
        navigate('/movies', { replace: true });
        window.localStorage.setItem('isLoggedIn', 'true');
        signIn();
      })
      .catch((err) => {
        console.log('Login Erorr:', err);
        // props.hanldeInfoTooltipError();
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
          <h1 className="page-title sign__title">Рады видеть!</h1>
          <form
            className="sign__form"
            name="login-form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}>
            <label className="sign__label">E-mail</label>
            <input
              id="email-login"
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
            <span className="error sign__error sign__error_type_name">Имя должно быть от 2 до 200 симоволов
            </span>
            <label className="sign__label">Пароль</label>
            <input
              id="pass-login"
              type="password"
              name="pass"
              autoComplete="off"
              placeholder="Введите пароль"
              className="sign__input sign__input_type_pass"
              required
              minLength="2"
              maxLength="200"
              onChange={handlePassChange}
              value={pass}
            />
            <span className="error sign__error sign__error_type_pass
                error_active">Что-то пошло не так...</span>
            <button type="submit" className="page-bttn sign__submit-bttn">Войти</button>
          </form>
          <p className="sign__login">Ещё не зарегистрированы?&ensp;
            <Link to="/signup" className="link sign__link" >Регистрация</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;

Login.propTypes = {

  signIn: PropTypes.func,
};
