import React from 'react';

function Footer() {
  return (

    <section className="footer page__partition page__partition_color_black">
      <div className="footer__content">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__info">
          <p className="footer__copyright">&copy; 2023 | Alexander B</p>
          <nav>
            <ul className="footer__list">
              <li><a href="https://practicum.yandex.ru/" className="link footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
              <li><a href="https://github.com/AlexanderBulatov" className="link footer__link" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;
