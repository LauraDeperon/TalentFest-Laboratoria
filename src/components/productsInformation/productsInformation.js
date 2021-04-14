import React from 'react';

function productsInformation({ item }) {
  return (
    <>
      <div className='products-section'>
        <p className='product-type'>{item.name}</p>
        <p className='product-type'>{item.brand}</p>
        <p className='product-type'>{item.description}</p>
        {item.processes.map((process) => console.log(process))}
        <p className='product-type'>{item.recipe}</p>
      </div>
    </>
  );
}

export default productsInformation;
