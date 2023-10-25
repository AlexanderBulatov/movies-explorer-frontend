import { useState, useCallback } from 'react';

function useFormAndValidation(currentUser) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  function validate(e) {
    const { name, value } = e.target;
    if (currentUser !== null) {
      if (name === 'name') {
        return e.target.closest('form').checkValidity()
      && ((value !== currentUser.name) || (values.email !== currentUser.email));
      }
      if (name === 'email') {
        return e.target.closest('form').checkValidity()
      && ((values.name !== currentUser.name) || (value !== currentUser.email));
      }
    }
    return e.target.closest('form').checkValidity();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(validate(e));
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {
    values, handleChange, errors, isValid, resetForm, setValues, setIsValid,
  };
}
export default useFormAndValidation;
