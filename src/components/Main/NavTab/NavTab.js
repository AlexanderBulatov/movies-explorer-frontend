import React from 'react';

function NavTab() {
  return (
    <section className="nav-tab page__partition page__partition_color_grey">
        <nav className="nav-tab__content page__content">
          <ul className="nav-tab__links">
            <li><a href="#" className="link nav-tab__link">О проекте</a></li>
            <li><a href="#" className="link nav-tab__link">Технологии</a></li>
            <li><a href="#" className="link nav-tab__link">Студент</a></li>
          </ul>
        </nav>
      </section>
  );
}

export default NavTab;
