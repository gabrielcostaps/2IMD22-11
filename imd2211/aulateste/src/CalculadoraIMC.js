import React from 'react';

function CalculadoraIMC({ peso, altura }) {
  
  const imc = peso / (altura * altura);
  let categoria = '';

  if (imc < 18.5) {
    categoria = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    categoria = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    categoria = 'Sobrepeso';
  } else {
    categoria = 'Obesidade';
  }

  return (
    <div>
      <h2>Cálculo do IMC</h2>
      <p>IMC: {imc.toFixed(2)}</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}

export default CalculadoraIMC;
