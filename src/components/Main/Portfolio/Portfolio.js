import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio page__partition page__partition_color_black">
        <div className="portfolio__content page__content">
          <h3 className="portfolio__title">Портфолио</h3>
          <u className="projects portfolio__projects">
            <li className='projects__sample'>
              <a href="#" className="link projects__title">Статичный сайт</a>
              <a href="#" className="link projects__link">&#129125;</a>
            </li>
            <li className='projects__sample'>
              <a href="#" className="link projects__title">Адаптивный сайт</a>
              <a href="#" className="link projects__link">&#129125;</a>
            </li>
            <li className='projects__sample'>
              <a href="#" className="link projects__title">Одностраничное приложение</a>
              <a href="#" className="link projects__link">&#129125;</a>
            </li>
          </u>
        </div>
      </section>
  );
}

export default Portfolio;
