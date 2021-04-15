import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Header from '../header'
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
      <Header />
      <div>
        <Link to='/'><IoIosArrowBack className='icon' /></Link>
        <div className='container-text'>
          <p className='text-product'>
            {itemName} {itemBrand}
          </p>
        </div>
        <div className='product-container'>
          <img className='img-product' src={itemImage} alt='Imagem Produto' />
        </div>
        <p className='product-titles'>Conheça nosso produto</p>
        <p className='about-product'>
          {itemDescription}
        </p>
        <p className='product-titles'>
          Como é feito
        </p>
        <Splide className='carousel-div'>
          {itemProcesses.map((process, index) => (
            <SplideSlide className='carousel-container'>
              <p className='carousel' key={index}>{process}</p>
            </SplideSlide>
          ))}
        </Splide>
        <p className='product-titles'>Receita para te inspirar</p>
        <video
          src={itemRecipe}
          controls
          type='video/mp4'
          className='video'
        />
      </div>
    </>
  );
}

export default productsInformation;
