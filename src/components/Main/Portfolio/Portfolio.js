import React from 'react';

import pointer from '../../../images/pointer-ne.svg';

function Portfolio() {
  return (
    <section className="portfolio page__partition page__partition_color_black">
        <div className="portfolio__content page__content">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="projects portfolio__projects">
          <li className='projects__sample'>
            <a href="https://github.com/AlexanderBulatov/how-to-learn" className="link projects__title" target="_blank" rel="noreferrer">
              Статичный сайт
              <img src={pointer} className="projects__pointer" alt="Указатель стрелка северо-восток" />
            </a>
          </li>
          <li className='projects__sample'>
            <a href="https://github.com/AlexanderBulatov/how-to-learn" className="link projects__title" target="_blank" rel="noreferrer">
              Адаптивный сайт
              <img src={pointer} className="projects__pointer" alt="Указатель стрелка северо-восток" />
            </a>
          </li>
          <li className='projects__sample'>
            <a href="https://github.com/AlexanderBulatov/how-to-learn" className="link projects__title" target="_blank" rel="noreferrer">
              Одностраничное приложение
              <img src={pointer} className="projects__pointer" alt="Указатель стрелка северо-восток" />
            </a>

          </li>
        </ul>
        </div>
      </section>
  );
}

export default Portfolio;
