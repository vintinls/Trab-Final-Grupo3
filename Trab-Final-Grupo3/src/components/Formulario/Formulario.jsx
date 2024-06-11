import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Formulario = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [email, setEmail] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/produtos', {
        titulo,
        descricao,
        email,
        conteudo
      });
      console.log('Produto criado com sucesso:', response.data);
      // Limpar o formulário após o envio
      setTitulo('');
      setDescricao('');
      setEmail('');
      setConteudo('');
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <div className='container'>
      <div className="form_box">
        <h2 className="titulo">Cadastre seu Produto</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="Titulo" 
            id="" 
            placeholder="Titulo do seu Produto" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input 
            type="text" 
            name="Desc" 
            id="" 
            placeholder='Descrição do seu produto' 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input 
            className='email' 
            type="text" 
            name="Email" 
            id="" 
            placeholder="Email para contato" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name="message" 
            placeholder='Conteúdo do produto' 
            value={conteudo} 
            onChange={(e) => setConteudo(e.target.value)}
          ></textarea>
          <button type="submit">Enviar Produto</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
