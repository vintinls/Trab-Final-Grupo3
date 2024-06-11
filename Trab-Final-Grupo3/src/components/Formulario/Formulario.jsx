import React from 'react'
import './style.css';



const Formulario = () => {
  return (

    <>
    <div className='container'>


    <div className="form_box">


    <h2 className="titulo">Cadastre seu Produto</h2>

    <form action="" method="get">

    <input type="text" name="Titulo" id="" placeholder="Titulo do seu Produto" />
    <input type="text" name="Desc" id="" placeholder='Decrição do seu produto' />
    <input className='email' type="text" name="Conteudo" id="" placeholder="Email para contato" />


    <textarea name="message" placeholder='Conteudo do produto'></textarea>

    <button type="submit">Enviar Produto</button>


    </form>


    </div>



    </div>

    </>
  )
}

export default Formulario