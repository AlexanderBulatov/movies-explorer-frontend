import React from 'react';

import cvFoto from '../../../images/foto-profile.jpg';

function AboutMe() {
  return (
    <section className="about-me page__partition page__partition_color_black">
      <div className="about-me__content page__content" id = 'about-me'>
        <h3 className="subtitle about-me__subtitle">Студент</h3>
        <div className="about-me__resume">
          <div className="about-me__info">
            <h2 className="title about-me__name">Alexander</h2>
            <p className="about-me__job-title">Web developer</p>
            <p className="description about-me__summary">
              Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit am officia deserunt mollit anim id est laborum.
            </p>
            <a href="https://github.com/AlexanderBulatov/" className="about-me__github" target="_blank" rel="noreferrer">Github</a>
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
  );
}

export default AboutMe;
