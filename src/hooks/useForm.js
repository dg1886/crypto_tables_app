import { useEffect, useState } from "react";

const useForm = (initialFormState = {}, validations = {}, onSubmit = () => {}) => {
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  const validateForm = (data) => {
    const result = Object.values(validations)
      .map((validation) => validation(data))
      .filter((validation) => validation);
    const newErrors = result.reduce((acum, item) => ({ ...acum, ...item }), {});
    setValid(!result.length);
    setErrors(newErrors);
  };

  const changeHandler = ({ target: { value, name } }) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    setTouched({ ...touched, [name]: true });
    validateForm(newValues);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isValid) {
      onSubmit(values);
    }
  };

  useEffect(() => { validateForm(initialFormState); }, []);

  return {
    values, errors, touched, isValid, changeHandler, submitHandler,
  };
};

export default useForm;
