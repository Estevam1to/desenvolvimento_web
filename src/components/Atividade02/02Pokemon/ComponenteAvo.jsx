import React, { createContext, useState } from 'react';
import ComponentePai from './ComponentePai';

const NumeroContext = createContext();

const ComponenteAvo = () => {
  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <NumeroContext.Provider value={{ contador, incrementarContador }}>
      <div>
        <h2>Componente Avo</h2>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt={`Pokemon ${contador}`} />
        <ComponentePai />
      </div>
    </NumeroContext.Provider>
  );
};

export default ComponenteAvo;
