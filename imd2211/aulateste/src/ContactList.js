import React from 'react';
import Contact from './Contact';


function ContactList() {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <Contact 
        nome="José" 
        sobrenome="João" 
        cpf="000.000.000-00" 
        telefone="(84) 00000-0000" 
        email="jj@email.com" 
      />
      <Contact 
        nome="Maria" 
        sobrenome="Silva" 
        cpf="111.111.111-11" 
        telefone="(84) 11111-1111" 
        email="maria@email.com" 
      />
      <Contact 
        nome="Carlos" 
        sobrenome="Oliveira" 
        cpf="222.222.222-22" 
        telefone="(84) 22222-2222" 
        email="carlos@email.com" 
      />
      <Contact 
        nome="Fernanda" 
        sobrenome="Costa" 
        cpf="333.333.333-33" 
        telefone="(84) 33333-3333" 
        email="fernanda@email.com" 
      />
      <Contact 
        nome="Ana" 
        sobrenome="Pereira" 
        cpf="444.444.444-44" 
        telefone="(84) 44444-4444" 
        email="ana@email.com" 
      />
    </div>
  );
}


export default ContactList;
