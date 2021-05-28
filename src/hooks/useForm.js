import React from 'react';
import { usePlayContext } from '../contexts/PlayContext';


const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: ['E-mail inválido, verifique'],
  }
};
const useForm = (type, campo) => {
  const [value, setValue] = React.useState('');
  const { error, setError } = usePlayContext();

  const focus = () => {
    const d = document.querySelectorAll('input')
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
      focus();

      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      focus();
      setError({
        cod: 0,
        type: type,
        mensagem: [types[type].message]
      });
      return false;

    }
    else {
      setError({
        cod: 1,
        mensagem: ['Aluno cadastrado com sucesso']
      });
      return true;
    }
  }

  function onChange({ target }) {
    setError({
      cod: 3,
    });
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
  };
};

export default useForm;