import React from "react";

function Filho({ peso, altura }) {
  // Cálculo do IMC
  const imc = peso / (altura * altura);

  // Função para retornar a mensagem
  const mensagemIMC = () => {
    if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };

  // Exibindo o IMC
  return (
    <div>
      <h3>IMC: {imc.toFixed(2)}</h3>
      {mensagemIMC()}
    </div>
  );
}

export default Filho;
