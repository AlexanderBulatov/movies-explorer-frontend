import React from 'react';

function AboutProject() {
  return (
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
  );
}

export default AboutProject;
