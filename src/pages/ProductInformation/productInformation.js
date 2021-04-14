import React from 'react';
import './productInformation.css';
import { Link } from 'react-router-dom';

function productInformation() {
  const itemName = localStorage.getItem('itemName');
  const itemBrand = localStorage.getItem('itemBrand');
  const itemDescription = localStorage.getItem('itemDescription');
  const itemRecipe = String(localStorage.getItem('itemRecipe'));
  const itemImage = String(localStorage.getItem('itemImage'));
  const itemProcesses = JSON.parse(localStorage.getItem('itemProcesses'));
  return (
    <>
      <div className='App'>
        <Link to='/'>Voltar</Link>
        <img src={itemImage} alt='Imagem Produto' />
        <p>
          <b>Nome: </b>
          {itemName}
        </p>
        <p>
          <b>Marca: </b>
          {itemBrand}
        </p>
        <p>
          <b>Descrição: </b>
          {itemDescription}
        </p>
        <p>
          <b>Processos de Produção: </b>
        </p>
        {itemProcesses.map((process, index) => (
          <p key={index}>{process}</p>
        ))}
        <video
          src={itemRecipe}
          width='320'
          height='240'
          controls
          type='video/mp4'
        />
      </div>
    </>
  );
}

export default productInformation;
