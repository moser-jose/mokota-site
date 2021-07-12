import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { usePlayContext } from '../contexts/PlayContext';


const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: ['E-mail inválido, verifique'],
  },
  telefone: {
    regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
    message: ['Telefone inválido, verifique']
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      '1 caracter maíusculo, 1 minúsculo e 1 digito. Mínimo 8 caracteres.',
  }
};
const useForm = (type, campo) => {
  const [value, setValue] = React.useState('');
  const { error, setError } = useAuthContext();
  const { errorSite, setErrorSite } = usePlayContext();

  const focus = () => {
    const d = document.querySelectorAll('.input input')
    d.forEach(f => {
      if (f.name === type) {
        f.focus();
      }
    });
  }
  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError({
        cod: 0,
        type: type,
        mensagem: ['Preencha o  campo ' + campo]
      });
      setErrorSite({
        cod: 0,
        type: type,
        mensagem: ['Preencha o  campo ' + campo]
      });
      focus();
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      focus();
      setError({
        cod: 0,
        type: type,
        mensagem: [types[type].message]
      });
      setErrorSite({
        cod: 0,
        type: type,
        mensagem: [types[type].message]
      });
      return false;

    }
    else {
      return true;
    }
  }

  function onChange({ target }) {
    setError({
      cod: 3,
    });
    setErrorSite({
      cod: 3,
    });
    
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    errorSite,
    onChange,
    validate: () => validate(value),
  };
};

export default useForm;