import React from 'react';
function Contact({ nome, sobrenome, cpf, telefone, email }) {
  return (
    <div>
      <h3>{nome} {sobrenome}</h3>
      <p>CPF: {cpf}</p>
      <p>Contato: {telefone}</p>
      <p>Email: {email}</p>
    </div>
  );
}


export default Contact;
