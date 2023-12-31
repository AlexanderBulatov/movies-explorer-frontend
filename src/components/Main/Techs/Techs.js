import React from 'react';

function Techs() {
  return (
    <section className="techs page__partition page__partition_color_grey">
        <div className="techs__content" id = 'techs'>
          <h3 className="subtitle techs__subtitle">Технологии</h3>
          <h2 className="title techs__title">7 технологий</h2>
          <p className="description techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__stack">
            <li className="techs__technology">HTML</li>
            <li className="techs__technology">CSS</li>
            <li className="techs__technology">JS</li>
            <li className="techs__technology">React</li>
            <li className="techs__technology">Git</li>
            <li className="techs__technology">Express.js</li>
            <li className="techs__technology">mongoDB</li>
          </ul>
        </div>
      </section>
  );
}

export default Techs;
