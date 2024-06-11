import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import './style.css';  // Importação do arquivo CSS
import Header2 from "../../components/Header2";

const validationSchema = yup.object().shape({
  titulo: yup
    .string()
    .required("Título Obrigatório")
    .max(40, "Precisa ter 40 caracteres no máximo!"),
  descricao: yup
    .string()
    .required("Descrição Obrigatória")
    .max(100, "Precisa ter 100 caracteres no máximo!"),
  conteudo: yup
    .string()
    .required("Conteúdo Obrigatório")
    .max(500, "Precisa ter 500 caracteres no máximo!"),
});

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/produtos/${id}`)
      .then(response => {
        setProductDetails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/produtos/update/${id}`, productDetails)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
      });
  };

  return (
    <div className="container">
      <Header2/>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="form-label" htmlFor="name">Titulo Produto:</label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
          required
        />
        <label className="form-label" htmlFor="description">Description:</label>
        <textarea
          className="form-textarea"
          id="description"
          name="description"
          value={productDetails.description}
          onChange={handleInputChange}
          required
        />
        <label className="form-label" htmlFor="price">Price:</label>
        <input
          className="form-input"
          type="text"
          id="price"
          name="price"
          step="0.01"
          value={productDetails.price}
          onChange={handleInputChange}
          required
        />
        <button className="form-button" type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
