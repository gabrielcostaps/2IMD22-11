import React from 'react';
import ContactList from './ContactList';
import CalculadoraIMC from './CalculadoraIMC';

function App() {
  return (
    <div>
      <h1>Minha Aplicação</h1>


      <h2>Contatos</h2>
      <ContactList />


      <h2>Cálculo do IMC</h2>
      <CalculadoraIMC peso={70} altura={1.75} />
      <CalculadoraIMC peso={80} altura={1.80} />
      <CalculadoraIMC peso={60} altura={1.65} />
      <CalculadoraIMC peso={90} altura={1.70} />
      <CalculadoraIMC peso={120} altura={1.75} />
    </div>
  );
}

export default App;




