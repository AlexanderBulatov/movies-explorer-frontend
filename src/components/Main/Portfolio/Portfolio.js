import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio page__partition page__partition_color_black">
        <div className="portfolio__content page__content">
          <h3 className="portfolio__title">Портфолио</h3>
          <u className="projects portfolio__projects">
            <li className='projects__sample'>
              <a href="https://github.com/AlexanderBulatov/how-to-learn" className="link projects__title" target="_blank" rel="noreferrer">Статичный сайт</a>
              <a href="https://github.com/AlexanderBulatov/how-to-learn" className="link projects__link" target="_blank" rel="noreferrer">&#129125;</a>
            </li>
            <li className='projects__sample'>
              <a href="https://github.com/AlexanderBulatov/russian-travel" className="link projects__title" target="_blank" rel="noreferrer">Адаптивный сайт</a>
              <a href="https://github.com/AlexanderBulatov/russian-travel" className="link projects__link" target="_blank" rel="noreferrer">&#129125;</a>
            </li>
            <li className='projects__sample'>
              <a href="https://github.com/AlexanderBulatov/react-mesto-api-full-gha" className="link projects__title" target="_blank" rel="noreferrer">Одностраничное приложение</a>
              <a href="https://github.com/AlexanderBulatov/react-mesto-api-full-gha" className="link projects__link" target="_blank" rel="noreferrer">&#129125;</a>
            </li>
          </u>
        </div>
      </section>
  );
}

export default Portfolio;
