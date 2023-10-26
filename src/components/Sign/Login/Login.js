import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as auth from '../../../utils/auth';
import logo from '../../../images/logo.svg';
import useFormAndValidation from '../../../utils/customHooks/useFormAndValidation';

function Login({ signIn, setCurrentUser }) {
  const navigate = useNavigate();
  const [submitErrorMessage, setSubmitErrorMessage] = React.useState('');
  const [wasSubmitError, setWasSubmitError] = React.useState(false);
  // const [dataInputError, setDataInputError] = React.useState({email: '', pass: ''});

  const {
    values, handleChange, errors, isValid, setValues, resetForm,
  } = useFormAndValidation(null);

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    setValues({ name: values.name, email: values.email });
    if (!values.pass || !values.email) {
      return;
    }
    auth.authorize(values.email, values.pass)
      .then((serverRes) => {
        window.localStorage.setItem('isLoggedIn', 'true');
        setCurrentUser(serverRes);
        signIn();
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setSubmitErrorMessage(err.message);
      });
  }

  useEffect(() => {
    if ((submitErrorMessage !== '')) {
      setWasSubmitError(true);
    }
  }, [submitErrorMessage]);

  useEffect(() => {
    if (wasSubmitError) setSubmitErrorMessage('');
  }, [values]);

  useEffect(() => {
    resetForm();
    setValues({ email: '', pass: '' });
  }, []);

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
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className={`error sign__error sign__error_type_pass ${!isValid ? 'sign__error_show' : ''}`}>{errors.email}</span>
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
              onChange={handleChange}
              value={values.pass || ''}
            />
            <span className={`error sign__error sign__error_type_pass ${!isValid ? 'sign__error_show' : ''}`}>{errors.pass}</span>
            <span className= {`error sign__submit-err ${!(submitErrorMessage === '') ? 'sign__submit-err_show' : ''}`}>{submitErrorMessage}</span>
            <button type="submit" className= {`page-bttn sign__submit-bttn ${!isValid ? 'sign__submit-bttn_disabled' : ''}`}>Войти</button>
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
  setCurrentUser: PropTypes.func,
};
