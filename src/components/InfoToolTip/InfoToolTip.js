import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import allRight from '../../images/icon-ok.svg';
import somethinWrong from '../../images/icon-error.svg';

function InfoToolTip({ isInfoToolTipOpen, infoMsg, setInfoToolTipOpen }) {
  const { pathname } = useLocation();
  return (

    <div className={`info-tooltip ${isInfoToolTipOpen && 'info-tooltip_opened'}`}>
      <div className="info-tooltip__content">
        <div className="info-tooltip__close-bttn">
          <button className="close-button" type="button" onClick={() => setInfoToolTipOpen(false)}>
            <span className="close-button__line"></span>
          </button>
        </div>

        <img src={infoMsg.isOk ? allRight : somethinWrong} alt="инфографика" className="info-tooltip__icon" />
        <h2 className="info-tooltip__title">
          {infoMsg.msg}
        </h2>
        {infoMsg.home && (pathname !== '/') && <Link to="/" className="link sign__link" >На Главную</Link>}
      </div>
    </div>
  );
}

export default InfoToolTip;
InfoToolTip.propTypes = {
  isInfoToolTipOpen: PropTypes.bool,
  infoMsg: PropTypes.object,
  setInfoToolTipOpen: PropTypes.func,
};
