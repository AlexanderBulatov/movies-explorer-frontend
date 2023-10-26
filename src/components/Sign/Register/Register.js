import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../../utils/auth';
import logo from '../../../images/logo.svg';
import useFormAndValidation from '../../../utils/customHooks/useFormAndValidation';

function Registr() {
  const [submitErrorMessage, setSubmitErrorMessage] = React.useState('');
  const [wasSubmitError, setWasSubmitError] = React.useState(false);

  const navigate = useNavigate();

  const {
    values, handleChange, errors, isValid, setValues, resetForm,
  } = useFormAndValidation(null);

  function handleSubmit(e) {
    resetForm();
    setValues({ name: values.name, email: values.email });
    e.preventDefault();
    auth.register(values.name, values.email, values.pass)
      .then(() => {
        navigate('/signin', { replace: true });
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
    setValues({ name: '', email: '', pass: '' });
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
              onChange={handleChange}
              value={values.name || ''}
            />
            <span className={`error sign__error sign__error_type_pass ${!isValid ? 'sign__error_show' : ''}`}> {errors.name}
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
              onChange={handleChange}
              value={values.email || ''}/>
            <span className={`error sign__error sign__error_type_pass ${!isValid ? 'sign__error_show' : ''}`}>{errors.email}
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
              onChange={handleChange}
              value={values.pass || ''}/>
            <span className={`error sign__error sign__error_type_pass ${!isValid ? 'sign__error_show' : ''}`}>{errors.pass}</span>
            <span className= {`error sign__submit-err ${!(submitErrorMessage === '') ? 'sign__submit-err_show' : ''}`}>{submitErrorMessage}</span>
            <button type="submit" className= {`page-bttn sign__submit-bttn ${!isValid ? 'sign__submit-bttn_disabled' : ''}`}>Зарегистрироваться</button>
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
