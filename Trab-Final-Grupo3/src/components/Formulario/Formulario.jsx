import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Formulario = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [email, setEmail] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações
    if (titulo.length > 50) {
      setError('O título deve ter no máximo 50 caracteres.');
      return;
    }

    if (descricao.length > 100) {
      setError('A descrição deve ter no máximo 100 caracteres.');
      return;
    }

    if (conteudo.length > 200) {
      setError('O conteúdo deve ter no máximo 200 caracteres.');
      return;
    }

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
      setError('');  // Limpar mensagem de erro
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      setError('Erro ao criar produto. Tente novamente mais tarde.');
    }
  };

  return (
    <div className='container'>
      <div className="form_box">
        <h2 className="titulo">Cadastre seu Produto</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="Titulo" 
            placeholder="Titulo do seu Produto" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)}
            maxLength={50}
          />
          <input 
            type="text" 
            name="Desc" 
            placeholder='Descrição do seu produto' 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)}
            maxLength={100}
          />
          <input 
            className='email' 
            type="text" 
            name="Email" 
            placeholder="Email para contato" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name="message" 
            placeholder='Conteúdo do produto' 
            value={conteudo} 
            onChange={(e) => setConteudo(e.target.value)}
            maxLength={200}
          ></textarea>
          <button type="submit">Enviar Produto</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
