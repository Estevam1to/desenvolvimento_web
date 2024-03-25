import React, { useContext } from 'react';
import { NumeroContext } from './ComponenteAvo';

const ComponenteNeto = () => {
  const numero = useContext(NumeroContext);

  return (
    <div>
      <h2>Componente Neto</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`} alt={`Pokemon ${numero + 1}`} />
    </div>
  );
};

export default ComponenteNeto;
