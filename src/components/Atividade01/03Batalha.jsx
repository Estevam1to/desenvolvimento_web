import React from 'react';

function Hero({ name, image }) {
  return (
    <div className="hero">
      <h2>{name}</h2>
      <img src={image} alt="Imagem do Herói" style={{ maxWidth: '110px'}} />
    </div>
  );
}

function Enemy({ name, image }) {
  return (
    <div className="enemy">
      <h2>{name}</h2>
      <img src={image} alt="Imagem do Inimigo" style={{ maxWidth: '110px' }} />
    </div>
  );
}

function Arena(props) {
    const arenaStyle = {
        maxWidth: '500px',
        border: '2px solid #333',
        padding: '20px',
        marginBottom: '20px',
    };

  return (
    <div className="arena" style={arenaStyle}>
      <h2>{props.arena}</h2>
      {props.children}
    </div>
  );
}

function World(props) {
  return <div className="world">{props.children}</div>;
}

export { Hero, Enemy, Arena, World };
