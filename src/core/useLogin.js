import { useState } from 'react';

export function useLogin(callback) {
  
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (callback && typeof callback === 'function') {
      callback(values);
    }
  };

  return { 
    values, 
    handleChange, 
    handleSubmit 
  };
}
