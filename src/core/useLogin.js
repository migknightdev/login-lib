import { useState } from 'react';

export function useLogin(callback) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    callback(values); // Devolve os dados pro dev
  };

  return { values, handleChange, handleSubmit };
}