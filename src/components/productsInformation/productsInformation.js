import React from 'react';
import './productsInformation.css';
import Footer from '../footer';
import Header from '../header';

function productsInformation({product}) {
  return (
    <>
      <div className='App'>
        <Header />
        <p>{product.name}</p>
        <p>{product.brand}</p>
        <p>{product.description}</p>
        {product.processes.map((process) => (
          <p>{process}</p>
        ))}
        <p>{product.recipe}</p>
        <Footer />
      </div>
    </>
  );
}

export default productsInformation;
