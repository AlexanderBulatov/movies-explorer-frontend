import React from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import DebugView from '../SidePopup/DebugView';

function ProtectedRoute({ element: componentsArray, loggedIn }) {
  if (loggedIn === null) {
    console.log('null');
    return null;
  }

  return (
    loggedIn ? componentsArray.map((component) => (component)) : <Navigate to="/signin" replace />
    // <DebugView varArray={[
    //   { varName: 'isloggedIn', varValue: `${window.localStorage.getItem('isLoggedIn')}` },
    //   { varName: 'loggedIn PR', varValue: `${loggedIn}` },
    // ]} />

  );
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  componentArray: PropTypes.array,
  element: PropTypes.any,
  props: PropTypes.any,
  loggedIn: PropTypes.bool,
};
