import { React, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import './Form.css';

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    let valid = true;

    if (!name.value) {
      // eslint-disable-next-line
      alert('O campo Nome deve ser preenchido.');
      valid = false;
    }

    if (!isEmail(email.value)) {
      // eslint-disable-next-line
      alert('Email inválido');
      valid = false;
    }

    if (valid) {
      // eslint-disable-next-line
      alert('Seja bem vindo! Obrigado pelo interesse.');
      window.location.reload();
    }
  };

  return (
    <div className="form">
      <h1>Faça seu cadastro:</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Nome" />
        <p />
        <input type="email" id="email" placeholder="E-mail" />
        <p />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
