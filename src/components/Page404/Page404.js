import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="page-404 page__partition page__partition_color_black">
        <div className="page-404__info">
          <h1 className="page-404__title">404</h1>
          <p className="page-404__message">Страница не найдена</p>
        </div>
        <button className="bttn page-404__back" type='button' onClick={() => navigate(-1) || navigate('/')} >Назад</button>
      </section>
    </main>

  );
}

export default Page404;
