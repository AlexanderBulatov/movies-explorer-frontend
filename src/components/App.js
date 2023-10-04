import React from 'react';
// import Header from './Header';

import logo from '../images/logo.svg';
import accountImg from '../images/account.svg';
import cvFoto from '../images/foto-profile.jpg';
// import promoImg from '../images/promo.svg';

function App() {
  return (
    <>
      <header className="header page__partition page__partition_color_turquoise ">
          <div className="header__content page__content">
            <a className="logo" href="#">
              <img
                src={logo}
                alt="Пиктограмма со ссылкой на главную страницу"
                className="header__logo"
              />
            </a>
            <nav className="auth header__auth">
              {/* <a href="https://yandex.ru/pogoda" className="auth__reg">Регистрация</a> */}
              <a href="#" className="auth__reg" type="button">Регистрация</a>
              <button className="auth__login" type="button">Войти</button>
            </nav>
          </div>
      </header>
      <header className="header page__partition page__partition_color_turquoise">
        <div className="header__content page__content">
          <a className="logo" href="#">
            <img
              src={logo}
              alt="Пиктограмма со ссылкой на главную страницу"
              className="header__logo"
            />
          </a>
          <nav className="menu header__menu">
            <ul className="menu__film">
              <li><a href="https://yandex.ru/pogoda" className="menu__link">Фильмы</a></li>
              <li><a href="https://yandex.ru/pogoda" className="menu__link">Сохраненные фильмы</a></li>
            </ul>
          </nav>
          <nav className="auth header__auth">
            <button className="auth__profile" type="button">Аккаунт
              <img
                src={accountImg}
                alt="Пиктограмма аккаунта"
                className="auth__img"
              />
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section className="promo page__partition page__partition_color_turquoise">
          <div className="promo__content page__content">
            <h1 className="title promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          </div>
        </section>
        <section className="nav-tab page__partition page__partition_color_grey">
          <nav className="nav-tab__content page__content">
            <ul className="nav-tab__links">
              <li><a href="#" className="nav-tab__link">О проекте</a></li>
              <li><a href="#" className="nav-tab__link">Технологии</a></li>
              <li><a href="#" className="nav-tab__link">Студент</a></li>
            </ul>
          </nav>
        </section>
        <section className="about-project page__partition page__partition_color_black">
          <div className="about-project__content page__content">
            <h2 className="subtitle about-project__subtitle">О проекте</h2>

            <u className="facts about-project__facts">
              <li className="facts__fact">
                <h3 className="facts__title">Дипломный проект включал 5 этапов</h3>
                <p className="description facts__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
              </li>
              <li className="facts__fact">
                <h3 className="facts__title">На выполнение диплома ушло 5 недель</h3>
                <p className="description facts__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
              </li>
            </u>

            <u className="chart about-project__chart">
              <li className="chart__term">
                <h3 className="chart__time chart__time_light">1 неделя</h3>
                <p className="chart__phase">Back-end</p>
              </li>
              <li className="chart__term chart__term_ext">
                <h3 className="chart__time">4 недели</h3>
                <p className="chart__phase">Front-end</p>
              </li>
            </u>
          </div>
        </section>
        <section className="techs page__partition page__partition_color_grey">
            <div className="techs__content page__content">
              <h3 className="subtitle techs__subtitle">Технологии</h3>
              <h2 className="title techs__title">7 технологий</h2>
              <p className="description techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
              <u className="techs__stack">
                <li className="techs__technology">HTML</li>
                <li className="techs__technology">CSS</li>
                <li className="techs__technology">JS</li>
                <li className="techs__technology">React</li>
                <li className="techs__technology">Git</li>
                <li className="techs__technology">Express.js</li>
                <li className="techs__technology">mongoDB</li>
              </u>
            </div>
        </section>

        <section className="about-me page__partition page__partition_color_black">
          <div className="about-me__content page__content">
            <h3 className="subtitle about-me__subtitle">Студент</h3>
            <div className="about-me__resume">
              <div className="about-me__info">
                <h2 className="title about-me__name">Alexander</h2>
                <p className="about-me__job-title">Web developer</p>
                <p className="about-me__summary">
                  Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="about-me__github">GitHub</a>
              </div>
              <div className="about-me__foto">
                <img
                  src={cvFoto}
                  alt="Фотография автора проекта"
                  className="about-me__img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio page__partition page__partition_color_black">
          <div className="portfolio__content page__content">
            <h3 className="portfolio__title">Портфолио</h3>
            <u className="projects portfolio__projects">
              <li className='projects__sample'>
                <a href="#" className="projects__title">Статичный сайт</a>
                <a href="#" className="projects__link">&#129125;</a>
              </li>
              <li className='projects__sample'>
                <a href="#" className="projects__title">Адаптивный сайт</a>
                <a href="#" className="projects__link">&#129125;</a>
              </li>
              <li className='projects__sample'>
                <a href="#" className="projects__title">Одностраничное приложение</a>
                <a href="#" className="projects__link">&#129125;</a>
              </li>
            </u>
          </div>
        </section>
        <section className="footer page__partition page__partition_color_black">
          <div className="footer__content page__content">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
              <p className="footer__copyright">&copy;2023 | Alexander B</p>
              <nav>
                <ul className="footer__list">
                  <li><a href="https://yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                  <li><a href="https://github.com/AlexanderBulatov" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
