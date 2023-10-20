import React from 'react';
import PropTypes from 'prop-types';

function DebugView({ varArray }) {
  return (

    <div className= 'debug-popup debug-popup_opened'>
      <div className="debug-popup__content">
        <ul>
          {varArray.map((varItem, ix) => (
            <li key={ix}>{varItem.varName} = {varItem.varValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DebugView;
DebugView.propTypes = {
  varArray: PropTypes.array,

};
