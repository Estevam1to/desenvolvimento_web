import React from "react";

function PlacaMae({ nome, preco }) {
  return (
    <div>
      <h3>Placa Mãe</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
}

function Memoria({ nome, preco }) {
  return (
    <div>
      <h3>Memória</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
}

function PlacaDeVideo({ nome, preco }) {
  return (
    <div>
      <h3>Placa de Vídeo</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco}</p>
    </div>
  );
}

export  { PlacaMae, Memoria, PlacaDeVideo };
