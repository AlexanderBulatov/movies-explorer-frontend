/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
      <><nav className="menu header__menu">
  <ul className="menu__film">
    <li><a href="https://yandex.ru/pogoda" className="menu__link">Фильмы</a></li>
    <li><a href="https://yandex.ru/pogoda" className="menu__link">Сохраненные фильмы</a></li>
  </ul>
  <div className="burger-button">
    <span className="burger-button__line"></span>
  </div>
</nav><nav className="authorisation header__authorisation">
    {loggedIn
      ? <>
        <button className="authorisation__profile" type="button">Аккаунт
          <img
            src={accountImg}
            alt="Пиктограмма аккаунта"
            className="authorisation__img" />
        </button>
      </>
      : <>
        <a href="#" className="authorisation__reg" type="button">Регистрация</a>
        <button className="authorisation__login" type="button">Войти</button>
      </>}
  </nav></>;

{ /* <header className="header page__partition page__partition_color_turquoise ">
            <div className="header__content page__content">
              <a className="logo" href="#">
                <img
                  src={logo}
                  alt="Пиктограмма со ссылкой на главную страницу"
                  className="header__logo"
                />
              </a>
              <nav className="auth header__auth">
                <a href="#" className="auth__reg" type="button">Регистрация</a>
                <button className="auth__login" type="button">Войти</button>
              </nav>
            </div>
        </header>  */ }
