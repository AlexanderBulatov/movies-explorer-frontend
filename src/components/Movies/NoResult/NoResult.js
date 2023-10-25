import React from 'react';
import PropTypes from 'prop-types';

function NoResult({ resultStatus }) {
  return (
    <div className={`no-result ${(resultStatus === 'init') ? 'no-result_hidden' : ''} movies__no-result`}>
      {(resultStatus === 'notFounded') && <h2 className="no-result__message" >Ничего не найдено</h2>}
      {(resultStatus === 'serverError') && <h2 className="no-result__message" >Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>}
    </div>
  );
}

export default NoResult;

NoResult.propTypes = {
  resultStatus: PropTypes.string,
};
