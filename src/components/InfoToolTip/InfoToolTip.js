import React from 'react';
// import PropTypes from 'prop-types';

import allRight from '../../images/icon-ok.svg';
import somethinWrong from '../../images/icon-error.svg';

function InfoToolTip() {
  const [isInfoToolTipOpen, setInfoToolTipOpen] = React.useState(true);

  const isOk = true;
  return (

    <div className={`info-tooltip ${isInfoToolTipOpen && 'info-tooltip_opened'}`}>
      <div className="info-tooltip__content">
        <div className="info-tooltip__close-bttn">
          <button className="close-button" type="button" onClick={() => setInfoToolTipOpen(false)}>
            <span className="close-button__line"></span>
          </button>
        </div>

        <img src={isOk ? allRight : somethinWrong} alt="инфографика" className="info-tooltip__icon" />
        <h2 className="info-tooltip__title">
          {`${isOk ? 'Тест InfoToolTip (успешное сообщение). Нажмите крестик' : 'Что-то пошло не так! Попробуйте еще раз.'}`}
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
// InfoToolTip.propTypes = {
//   isInfoToolTipOpen: PropTypes.bool.isRequired,
// };
