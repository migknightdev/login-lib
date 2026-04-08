import { useState } from 'react';

export function useLogin(callback) {
  // Estado que guarda os valores dos inputs
  const [values, setValues] = useState({});

  // Função que captura o que o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    // Verifica se o callback existe e passa os dados capturados
    if (callback && typeof callback === 'function') {
      callback(values);
    }
  };

  // Retorna as ferramentas para o Dev usar
  return { 
    values, 
    handleChange, 
    handleSubmit 
  };
}
