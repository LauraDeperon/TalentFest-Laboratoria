import React from 'react';
import './productsInformation.css';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

function productsInformation() {
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
        <Splide>
          {itemProcesses.map((process, index) => (
            <SplideSlide>
              <p key={index}>{process}</p>
            </SplideSlide>
          ))}
        </Splide>
        <video
          src={itemRecipe}
          width='320'
          height='240'
          controls
          type='video/mp4'
        />
        {/* <p>
          <b>Receita</b>
          {itemRecipe}
        </p> */}
      </div>
    </>
  );
}

export default productsInformation;
