import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: componentsArray, ...props }) {
  // { element: Component, ...props  }
  return (
    props.loggedIn ? componentsArray : <Navigate to="/" replace/>
  );
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  componentArray: PropTypes.any,
  element: PropTypes.any,
  props: PropTypes.any,
  loggedIn: PropTypes.bool,
};
