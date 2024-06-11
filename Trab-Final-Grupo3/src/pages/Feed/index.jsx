import Header from '../../components/Header';
import './style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Feed() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const deleteProduto = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/produtos/${id}`);
      setProdutos(produtos.filter((produto) => produto.id !== id));
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className='cards'>
          {produtos.map((produto) => (
            <div key={produto.id} className='card'>
              <header>
                <h2>{produto.titulo}</h2>
              </header>
              <div className='line' />
              <p>{produto.descricao}</p>
              <div className='btns'>
                <div className='btn-edit'>
                  <Link to={`/update/${produto.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>

                <div className='btn-more'>
                  <Link to={`/more/${produto.id}`}>
                    <button>More</button>
                  </Link>
                </div>

                <div className='btn-delete'>
                  <button onClick={() => deleteProduto(produto.id)}>
                    Apagar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Feed;
